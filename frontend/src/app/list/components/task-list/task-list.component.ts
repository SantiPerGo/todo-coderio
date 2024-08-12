import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { TaskDTO } from '../../models/task-dto';
import { TaskComponent } from './components/task/task.component';
import { CreateEditDialogComponent } from './components/create-edit-dialog/create-edit-dialog.component';
import { TaskService } from '../../services/task.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskComponent, CreateEditDialogComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  protected showTaskDialog: boolean = false;
  protected taskList: TaskDTO[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe({
      next: (taskList: TaskDTO[]) => {
        this.taskList = taskList;
        this.reorderTasks();
      }, error: response => console.error(response)
    })
  }

  protected deleteTask(index: number, isConfirmed: boolean, task: TaskDTO) {
    if(isConfirmed)
      this.taskService.deleteTask(task.id).subscribe({
        next: () => this.taskList.splice(index, 1),
        error: response => console.error(response)
      });
  }

  protected createTask(newTask: TaskDTO) {
    this.showTaskDialog = false;

    this.taskService.createTask(newTask).subscribe({
      next: (task: TaskDTO) => {
        this.taskList.push(task);
        this.reorderTasks();
      },
      error: response => console.error(response)
    });
  }

  private reorderTasks() {
    // Priority mapping
    const priorityOrder: { [key in 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH']?: number } = {
      NONE: 0,
      LOW: 1,
      MEDIUM: 2,
      HIGH: 3
    };
  
    // Sorting function
    this.taskList.sort((a, b) => {
      // Compare by priority first
      const priorityA = priorityOrder[a.priority ?? 'NONE'] ?? 0;
      const priorityB = priorityOrder[b.priority ?? 'NONE'] ?? 0;
      if (priorityA !== priorityB)
        return priorityA - priorityB;
  
      // If priorities are the same, compare by name alphabetically
      return a.name.localeCompare(b.name);
    });
  }
}
