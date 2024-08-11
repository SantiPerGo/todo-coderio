import { Component } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { TaskListComponent } from './components/task-list/task-list.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    NavComponent,
    FooterComponent,
    TaskListComponent
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
}
