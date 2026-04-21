package com.practice.react.core.models;

import com.adobe.cq.export.json.ComponentExporter;

public interface HeroContentComponent extends ComponentExporter {
    public String getHeadline();
    public String getDescription();
    public String getCtaLabel();
    public String getCtaLink();
    public String getCategory();
}
