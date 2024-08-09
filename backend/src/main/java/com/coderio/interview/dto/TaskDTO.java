package com.coderio.interview.dto;

import jakarta.persistence.Column;
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
    private String priority;
    private Boolean isCompleted;
}
