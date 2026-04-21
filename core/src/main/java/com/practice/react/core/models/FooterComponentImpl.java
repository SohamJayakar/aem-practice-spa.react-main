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
    adapters = { FooterComponent.class, ComponentExporter.class },
    resourceType = FooterComponentImpl.RESOURCE_TYPE,
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(
    name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
    extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class FooterComponentImpl implements FooterComponent {

    @ValueMapValue
    private String companyName;

    @ValueMapValue
    private String copyrightYear;

    static final String RESOURCE_TYPE = "wknd-spa-react/components/footer";

    @Override
    public String getExportedType() {
        return FooterComponentImpl.RESOURCE_TYPE;
    }

    @Override
    public String getCompanyName() {
        return companyName != null ? companyName : "Comcast";
    }

    @Override
    public String getCopyrightYear() {
        return copyrightYear != null ? copyrightYear : "2026";
    }
}
