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

    public static Task mapTaskDtoToEntity(TaskDTO dto) {
        var task = Task.builder().name(dto.getName());

        if(dto.getId() != null)
            task.id(dto.getId());

        if(dto.getDescription() != null)
            task.description(dto.getDescription());

        if(dto.getPriority() != null)
            task.priority(dto.getPriority());

        if(dto.getIsCompleted() != null)
            task.isCompleted(dto.getIsCompleted());

        return task.build();
    }
}
