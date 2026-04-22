package com.practice.react.core.models;

import com.adobe.cq.export.json.ComponentExporter;

public interface HeaderComponent extends ComponentExporter {
    public String getLogoAlt();
    public String getLogoImage();
}
