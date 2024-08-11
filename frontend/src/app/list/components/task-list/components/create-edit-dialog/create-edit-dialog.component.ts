import { Component, EventEmitter, Output } from '@angular/core';
import { TaskDTO } from '../../../../models/task-dto';

@Component({
  selector: 'app-create-edit-dialog',
  standalone: true,
  imports: [],
  templateUrl: './create-edit-dialog.component.html',
  styleUrl: './create-edit-dialog.component.css'
})
export class CreateEditDialogComponent {
  @Output() onVisibleChange = new EventEmitter<void>();
  @Output() onTaskChange = new EventEmitter<TaskDTO>();
}
