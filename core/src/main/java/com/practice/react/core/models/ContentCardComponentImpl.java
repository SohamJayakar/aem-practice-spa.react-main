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
    adapters = { ContentCardComponent.class, ComponentExporter.class },
    resourceType = ContentCardComponentImpl.RESOURCE_TYPE,
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(
    name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
    extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class ContentCardComponentImpl implements ContentCardComponent {

    @ValueMapValue
    private String cardImage;

    @ValueMapValue
    private String category;

    @ValueMapValue
    private String title;

    @ValueMapValue
    private String description;

    @ValueMapValue
    private String link;

    @ValueMapValue
    private String variant;

    static final String RESOURCE_TYPE = "wknd-spa-react/components/content-card";

    @Override
    public String getExportedType() {
        return ContentCardComponentImpl.RESOURCE_TYPE;
    }

    @Override
    public String getCardImage() {
        return cardImage;
    }

    @Override
    public String getCategory() {
        return category;
    }

    @Override
    public String getTitle() {
        return title;
    }

    @Override
    public String getDescription() {
        return description;
    }

    @Override
    public String getLink() {
        return link;
    }

    @Override
    public String getVariant() {
        return variant;
    }
}
