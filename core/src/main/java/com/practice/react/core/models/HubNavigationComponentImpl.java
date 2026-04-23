package com.practice.react.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import java.util.ArrayList;
import java.util.List;

@Model(
    adaptables = SlingHttpServletRequest.class,
    adapters = { HubNavigationComponent.class, ComponentExporter.class },
    resourceType = HubNavigationComponentImpl.RESOURCE_TYPE,
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(
    name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
    extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class HubNavigationComponentImpl implements HubNavigationComponent {

    @ChildResource(name = "navitems")
    private List<NavigationItem> navitems;

    static final String RESOURCE_TYPE = "wknd-spa-react/components/hub-navigation";

    @Override
    public String getExportedType() {
        return HubNavigationComponentImpl.RESOURCE_TYPE;
    }

    @Override
    public List<NavigationItem> getNavItems() {
        return navitems != null ? navitems : new ArrayList<>();
    }
    
}
