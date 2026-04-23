package com.practice.react.core.models;

import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.api.resource.Resource;

import javax.inject.Inject;

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class NavigationItem {

    @Inject
    private String label;

    @Inject
    private String link;

    public String getLabel() {
        return label;
    }

    public String getLink() {
        return link;
    }
}
