package com.coderio.interview.dto;

import com.coderio.interview.enums.PriorityTaskEnum;
import jakarta.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class TaskDTO {
    private Long id;
    @NotBlank
    private String name;
    private String description;
    private PriorityTaskEnum priority;
    private Boolean isCompleted;
}
