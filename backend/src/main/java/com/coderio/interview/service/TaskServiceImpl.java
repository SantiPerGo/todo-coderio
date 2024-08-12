package com.coderio.interview.service;

import com.coderio.interview.dto.TaskDTO;
import com.coderio.interview.entity.Task;
import com.coderio.interview.enums.PriorityTaskEnum;
import com.coderio.interview.mapper.TaskMapper;
import com.coderio.interview.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service("taskService")
public class TaskServiceImpl implements TaskService {
    @Autowired
    private TaskRepository taskRepository;

    @Override
    public ResponseEntity<List<TaskDTO>> getTasks() {
        List<TaskDTO> list = taskRepository.findAll().stream().map(TaskMapper::mapTaskEntityToDto).toList();

        if(list.isEmpty())
            return ResponseEntity.notFound().build();
        else
            return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<TaskDTO> createTask(TaskDTO dto) {
        Task task = TaskMapper.mapTaskDtoToEntity(dto);
        taskRepository.saveAndFlush(task);
        return new ResponseEntity<>(dto, HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<TaskDTO> updateTask(TaskDTO dto) {
        if(dto.getId() == null) return ResponseEntity.badRequest().build();

        Optional<Task> optionalTask = taskRepository.findById(dto.getId());

        if(optionalTask.isPresent()){
            Task task = TaskMapper.mapTaskDtoToEntity(dto);
            taskRepository.saveAndFlush(task);
            return new ResponseEntity<>(dto, HttpStatus.OK);
        } else
            return ResponseEntity.notFound().build();
    }

    @Override
    public ResponseEntity<Void> deleteTask(Long id){
        Optional<Task> optionalTask = taskRepository.findById(id);

        if(optionalTask.isPresent()){
            taskRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } else
            return ResponseEntity.notFound().build();
    }

    @Override
    public ResponseEntity<List<TaskDTO>> getTasksFiltered(PriorityTaskEnum priority, Boolean isCompleted) {
        List<TaskDTO> list = taskRepository.findAll().stream()
            .map(TaskMapper::mapTaskEntityToDto)
            .filter(task -> priority == null || (task.getPriority() != null && task.getPriority().equals(priority)))
            .filter(task -> isCompleted == null || (task.getIsCompleted() != null && task.getIsCompleted() == isCompleted))
            .toList();

        if(list.isEmpty())
            return ResponseEntity.notFound().build();
        else
            return new ResponseEntity<>(list, HttpStatus.OK);
    }
}