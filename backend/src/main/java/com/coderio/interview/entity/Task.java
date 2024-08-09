package com.coderio.interview.entity;

import com.coderio.interview.enums.PriorityTaskEnum;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@Entity(name = "task")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotBlank
    private String name;

    private String description;

    @Enumerated(EnumType.STRING)
    private PriorityTaskEnum priority;

    @Column(name="is_completed")
    private Boolean isCompleted;
}
