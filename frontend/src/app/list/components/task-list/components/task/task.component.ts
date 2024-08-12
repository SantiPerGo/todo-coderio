import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { TaskDTO } from '../../../../models/task-dto';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { CreateEditDialogComponent } from '../create-edit-dialog/create-edit-dialog.component';
import { TaskService } from '../../../../services/task.service';

declare var confetti: any;

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ConfirmDialogComponent, CreateEditDialogComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task?: TaskDTO;

  @Output() onTaskDeleted = new EventEmitter<boolean>();
  @Output() onTaskCompleted = new EventEmitter<void>();

  @ViewChild('confettiButton') confettiButton!: ElementRef;
  protected showConfirmDialog = false;
  protected showEditDialog = false;
  
  constructor(private taskService: TaskService) {}

  protected deleteTask(isConfirmed: boolean) {
    this.showConfirmDialog = false;
    this.onTaskDeleted.emit(isConfirmed);
  }

  protected updateTask(oldTask: TaskDTO) {
    this.showEditDialog = false;

    this.taskService.updateTask(oldTask).subscribe({
      next: (task: TaskDTO) => this.task = task,
      error: response => console.error(response)
    });    
  }

  protected completeTask() {   
    if(!this.task) return;

    if (typeof confetti === 'function' && !this.task.isCompleted) {
      const rect = this.confettiButton.nativeElement.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      
      // Calculate the center of the button
      const origin = {
        x: x / window.innerWidth,
        y: y / window.innerHeight
      };

      confetti({
        origin: origin,
        angle: 85,
        colors: ['#ff0000', '#00ff00', '#0000ff'],
        particleCount: 100,
        scalar: 0.5,
        ticks: 100,
        startVelocity: 20
      });
      
      setTimeout(() => {
        if(!this.task) return;
        this.task.isCompleted = this.task.isCompleted == false ? true : false;
        this.taskService.updateTask(this.task).subscribe({
          next: (task: TaskDTO) => this.onTaskCompleted.emit(),
          error: response => console.error(response)
        });
      }, 1000);
    } else {
      this.task.isCompleted = this.task.isCompleted == false ? true : false;
      this.taskService.updateTask(this.task).subscribe({
        next: (task: TaskDTO) => this.onTaskCompleted.emit(),
        error: response => console.error(response)
      });  
    }
  }
}
