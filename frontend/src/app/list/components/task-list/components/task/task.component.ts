import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskDTO } from '../../../../models/task-dto';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { CreateEditDialogComponent } from '../create-edit-dialog/create-edit-dialog.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ConfirmDialogComponent, CreateEditDialogComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task: TaskDTO | undefined;

  @Output() onTaskDeleted = new EventEmitter<boolean>();

  protected showConfirmDialog = false;
  protected showEditDialog = false;

  protected deleteTask(isConfirmed: boolean) {
    this.showConfirmDialog = false;
    this.onTaskDeleted.emit(isConfirmed);
  }

  protected updateTask(task: TaskDTO) {
    this.task = task;
    this.showEditDialog = false;
  }
}
