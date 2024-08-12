import { Component, EventEmitter, Output } from '@angular/core';
import { TaskDTO } from '../../../../models/task-dto';
import { TaskService } from '../../../../services/task.service';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {  
  @Output() onTaskListChange = new EventEmitter<TaskDTO[]>();
  @Output() onInputChange = new EventEmitter<string>();

  private filters: { priority?: string, isCompleted?: boolean } = {};

  constructor(private taskService: TaskService) {}

  protected emitTasksFiltered(dropdown: any) {
    if(dropdown.id === 'priority')
      this.filters.priority = dropdown.value !== 'NONE' ? dropdown.value : undefined;
    else if(dropdown.id === 'status')
      this.filters.isCompleted = dropdown.value !== 'NONE' ? dropdown.value === 'COMPLETED' : undefined;

    this.taskService.getTaskFiltered(this.filters.priority, this.filters.isCompleted).subscribe({
      next: (taskList: TaskDTO[]) => this.onTaskListChange.emit(taskList),
      error: response => console.error(response)
    })
  }

  protected filterByText(input: any) {
    this.onInputChange.emit(input.value);
  }
}
