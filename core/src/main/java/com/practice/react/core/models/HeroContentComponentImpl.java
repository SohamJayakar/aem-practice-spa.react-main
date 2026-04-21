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
    adapters = { HeroContentComponent.class, ComponentExporter.class },
    resourceType = HeroContentComponentImpl.RESOURCE_TYPE,
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(
    name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
    extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class HeroContentComponentImpl implements HeroContentComponent {

    @ValueMapValue
    private String headline;

    @ValueMapValue
    private String description;

    @ValueMapValue
    private String ctaLabel;

    @ValueMapValue
    private String ctaLink;

    @ValueMapValue
    private String category;

    static final String RESOURCE_TYPE = "wknd-spa-react/components/hero-content";

    @Override
    public String getExportedType() {
        return HeroContentComponentImpl.RESOURCE_TYPE;
    }

    @Override
    public String getHeadline() {
        return headline;
    }

    @Override
    public String getDescription() {
        return description;
    }

    @Override
    public String getCtaLabel() {
        return ctaLabel;
    }

    @Override
    public String getCtaLink() {
        return ctaLink;
    }

    @Override
    public String getCategory() {
        return category;
    }
}
