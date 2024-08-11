import { Component, Input } from '@angular/core';
import { TaskDTO } from '../../models/task-dto';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task: TaskDTO | undefined;
}
