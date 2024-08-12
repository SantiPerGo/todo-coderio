package com.coderio.interview.service;

import com.coderio.interview.dto.TaskDTO;
import com.coderio.interview.entity.Task;
import com.coderio.interview.enums.PriorityTaskEnum;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface TaskService {
    ResponseEntity<List<TaskDTO>> getTasks();
    ResponseEntity<TaskDTO> createTask(TaskDTO task);
    ResponseEntity<TaskDTO> updateTask(TaskDTO task);
    ResponseEntity<Void> deleteTask(Long id);
    ResponseEntity<List<TaskDTO>> getTasksFiltered(PriorityTaskEnum priority, Boolean isCompleted);
}
