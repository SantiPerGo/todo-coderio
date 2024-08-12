package com.coderio.interview.dto;

import com.coderio.interview.enums.PriorityTaskEnum;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class TaskDTO {
    private Long id;
    @NotBlank
    @Size(max = 50)
    private String name;
    @Size(max = 255)
    private String description;
    private PriorityTaskEnum priority;
    private Boolean isCompleted;
}
