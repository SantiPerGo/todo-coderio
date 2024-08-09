package com.coderio.interview.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum PriorityTaskEnum {
    LOW("LOW", "Low task priority"),
    MEDIUM("MEDIUM", "Medium task priority"),
    HIGH("HIGH", "High task priority");

    private final String code;
    private final String description;
}
