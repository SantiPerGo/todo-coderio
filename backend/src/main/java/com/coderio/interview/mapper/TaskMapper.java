package com.coderio.interview.mapper;

import com.coderio.interview.dto.TaskDTO;
import com.coderio.interview.entity.Task;

public abstract class TaskMapper {
    public static TaskDTO mapTaskEntityToDto(Task task) {
        return TaskDTO.builder()
            .id(task.getId())
            .name(task.getName())
            .description(task.getDescription())
            .priority(task.getPriority())
            .isCompleted(task.getIsCompleted())
            .build();
    }

    public static Task mapTaskDtoToEntity(TaskDTO task) {
        return Task.builder()
            .id(task.getId())
            .name(task.getName())
            .description(task.getDescription())
            .priority(task.getPriority())
            .isCompleted(task.getIsCompleted())
            .build();
    }
}
