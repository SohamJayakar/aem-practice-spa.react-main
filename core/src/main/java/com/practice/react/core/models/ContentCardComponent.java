package com.practice.react.core.models;

import com.adobe.cq.export.json.ComponentExporter;

public interface ContentCardComponent extends ComponentExporter {
    public String getCardImage();
    public String getCategory();
    public String getTitle();
    public String getDescription();
    public String getLink();
    public String getVariant();
}
