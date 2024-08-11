import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskDTO } from '../../../../models/task-dto';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-edit-dialog',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-edit-dialog.component.html',
  styleUrl: './create-edit-dialog.component.css'
})
export class CreateEditDialogComponent {
  @Input() task?: TaskDTO;
  @Output() onVisibleChange = new EventEmitter<void>();
  @Output() onTaskChange = new EventEmitter<TaskDTO>();

  protected taskForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl(''),
    priority: new FormControl('NONE')
  });

  ngOnInit() {
    if(this.task) {
      this.taskForm = new FormGroup({
        name: new FormControl(this.task.name, Validators.required),
        description: new FormControl(this.task.description),
        priority: new FormControl(this.task.priority ?? 'NONE')
      });
    }
  }

  protected get name() {
    return this.taskForm.get('name');
  }
}
