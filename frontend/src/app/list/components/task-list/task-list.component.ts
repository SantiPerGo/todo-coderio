import { Component } from '@angular/core';
import { TaskDTO } from '../../models/task-dto';
import { TaskComponent } from './components/task/task.component';
import { CreateEditDialogComponent } from './components/create-edit-dialog/create-edit-dialog.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskComponent, CreateEditDialogComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  protected showTaskDialog: boolean = false;
  protected taskList: TaskDTO[] = [
    {
      id: 0,
      name: 'Hacer proyecto de Coderio para entregar de tarea',
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
      priority: 'HIGH',
      isCompleted: false
    },
    {
      id: 1,
      name: 'Ejemplo'
    },
    {
      id: 2,
      name: 'Ejemplo',
      priority: 'MEDIUM'
    },
    {
      id: 3,
      name: 'Ejemplo',
      priority: 'LOW'
    }
  ];

  protected deleteTask(index: number, isConfirmed: boolean) {
    if(isConfirmed)
      this.taskList.splice(index, 1);
  }

  protected createTask(task: TaskDTO) {
    this.taskList.push(task);
    this.showTaskDialog = false;
  }
}
