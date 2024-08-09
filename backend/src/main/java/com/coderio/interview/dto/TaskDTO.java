package com.coderio.interview.dto;

import com.coderio.interview.enums.PriorityTaskEnum;
import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class TaskDTO {
    private Long id;
    @NotBlank
    private String name;
    private String description;
    @Enumerated(EnumType.STRING)
    private PriorityTaskEnum priority;
    private Boolean isCompleted;
}
