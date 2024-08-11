import { Component, Input } from '@angular/core';
import { TaskDTO } from '../../../../models/task-dto';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ConfirmDialogComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task: TaskDTO | undefined;

  protected showConfirmDialog = false;

  protected deleteTask(isConfirmed: boolean) {
    this.showConfirmDialog = false;
  }
}
