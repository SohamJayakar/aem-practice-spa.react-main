package com.practice.react.core.models;

import com.adobe.cq.export.json.ComponentExporter;

public interface FooterComponent extends ComponentExporter {
    public String getCompanyName();
    public String getCopyrightYear();
}
