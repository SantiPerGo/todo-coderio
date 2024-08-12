import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskDTO } from '../../../../models/task-dto';
import { AbstractControl, FormControl, FormGroup, MaxLengthValidator, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

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

  protected taskForm: FormGroup = new FormGroup({});

  ngOnInit() {
    if(this.task) {
      this.taskForm = new FormGroup({
        name: new FormControl(this.task.name, [
          Validators.required,
          Validators.maxLength(100)
        ]),
        description: new FormControl(this.task.description, Validators.maxLength(255)),
        priority: new FormControl(this.task.priority ?? 'NONE')
      });
    }
  }

  protected get name() {
    return this.taskForm.get('name');
  }

  protected get description() {
    return this.taskForm.get('description');
  }

  protected emitTaskValue() {
    if(this.taskForm.valid && this.task) {
      const taskValue = this.taskForm.value;
      this.onTaskChange.emit({
        id: this.task.id,
        name: taskValue.name,
        description: taskValue.description,
        priority: taskValue.priority === 'NONE' ? null : taskValue,
        isCompleted: this.task.isCompleted
      });
    }
  }
}
