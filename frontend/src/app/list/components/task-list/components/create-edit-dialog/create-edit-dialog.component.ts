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

  protected taskForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(50)
    ]),
    description: new FormControl('', Validators.maxLength(255)),
    priority: new FormControl('NONE')
  });

  ngOnInit() {
    if(this.task) {
      this.taskForm.patchValue({
        name: this.task.name,
        description: this.task.description,
        priority: this.task.priority ?? 'NONE'
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
    if(this.taskForm.valid) {
      const taskValue = this.taskForm.value;

      if(this.task)
        this.onTaskChange.emit({
          id: this.task.id,
          name: taskValue.name,
          description: taskValue.description === '' ? null : taskValue.description,
          priority: taskValue.priority === 'NONE' ? null : taskValue.priority,
          isCompleted: this.task.isCompleted
        });
      else
        this.onTaskChange.emit({
          name: taskValue.name,
          description: taskValue.description === '' ? null : taskValue.description,
          priority: taskValue.priority === 'NONE' ? null : taskValue.priority
        });
    }
  }
}
