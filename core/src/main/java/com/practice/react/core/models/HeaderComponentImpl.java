package com.practice.react.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(
    adaptables = SlingHttpServletRequest.class,
    adapters = { HeaderComponent.class, ComponentExporter.class },
    resourceType = HeaderComponentImpl.RESOURCE_TYPE,
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(
    name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
    extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class HeaderComponentImpl implements HeaderComponent {

    @ValueMapValue
    private String logoAlt;

    
    @ValueMapValue
    private String logoImage;


    static final String RESOURCE_TYPE = "wknd-spa-react/components/header";

    @Override
    public String getExportedType() {
        return HeaderComponentImpl.RESOURCE_TYPE;
    }

    @Override
    public String getLogoAlt() {
        return logoAlt != null ? logoAlt : "Xfinity Logo";
    }

    
    @Override
    public String getLogoImage() {
        return logoImage;
    }

}
