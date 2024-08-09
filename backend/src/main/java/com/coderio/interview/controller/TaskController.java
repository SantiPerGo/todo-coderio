package com.coderio.interview.controller;

import com.coderio.interview.dto.TaskDTO;
import com.coderio.interview.service.TaskService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @Operation(summary = "Get all tasks", description = "Returns a list of all tasks.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful operation, returns a list of tasks.",
                    content = @Content(array = @ArraySchema(schema = @Schema(implementation = TaskDTO.class)))),
            @ApiResponse(responseCode = "404", description = "No tasks found.",
                    content = @Content(schema = @Schema()))
    })
    @GetMapping(produces = "application/json")
    public ResponseEntity<List<TaskDTO>> getTasks() {
        return taskService.getTasks();
    }

    @Operation(summary = "Create a new task", description = "Creates a new task and returns the created task.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Task created successfully.",
                    content = @Content(schema = @Schema(implementation = TaskDTO.class))),
            @ApiResponse(responseCode = "400", description = "Bad request, invalid input.",
                    content = @Content(schema = @Schema()))
    })
    @PostMapping(consumes = "application/json", produces = "application/json")
    public ResponseEntity<TaskDTO> createTask(@RequestBody TaskDTO dto) {
        return taskService.createTask(dto);
    }

    @Operation(summary = "Update a task", description = "Updates an existing task by ID and returns the updated task.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Task updated successfully.",
                    content = @Content(schema = @Schema(implementation = TaskDTO.class))),
            @ApiResponse(responseCode = "400", description = "Bad request, invalid input.",
                    content = @Content(schema = @Schema())),
            @ApiResponse(responseCode = "404", description = "Task not found.",
                    content = @Content(schema = @Schema()))
    })
    @PutMapping(consumes = "application/json", produces = "application/json")
    public ResponseEntity<TaskDTO> updateTask(@RequestBody TaskDTO dto) {
        return taskService.updateTask(dto);
    }

    @Operation(summary = "Delete a task", description = "Deletes a specific task by ID.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Task deleted successfully.",
                    content = @Content(schema = @Schema())),
            @ApiResponse(responseCode = "404", description = "Task not found.",
                    content = @Content(schema = @Schema()))
    })
    @DeleteMapping(value = "{id}", produces = "application/json")
    public ResponseEntity<Void> deleteTask(@PathVariable Long id) {
        return taskService.deleteTask(id);
    }

    @Operation(summary = "Get filtered tasks", description = "Returns a list of tasks that match the specified filters.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful operation, returns a filtered list of tasks.",
                    content = @Content(array = @ArraySchema(schema = @Schema(implementation = TaskDTO.class)))),
            @ApiResponse(responseCode = "404", description = "No tasks found for the given filters.",
                    content = @Content(schema = @Schema()))
    })
    @GetMapping(value = "/filter", produces = "application/json")
    public ResponseEntity<List<TaskDTO>> getTasksFiltered(TaskDTO task) {
        return taskService.getTasksFiltered(task);
    }
}