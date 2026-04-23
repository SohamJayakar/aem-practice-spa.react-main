package com.practice.react.core.models;
import com.adobe.cq.export.json.ComponentExporter;
import java.util.List;

public interface HubNavigationComponent extends ComponentExporter{
    public List<NavigationItem> getNavItems();
}
