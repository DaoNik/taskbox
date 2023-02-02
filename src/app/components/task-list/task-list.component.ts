import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() loading = false;

  @Output() onPinTask = new EventEmitter<string>();

  @Output() onArchiveTask = new EventEmitter<string>();

  tasksInOrder: Task[] = [];

  @Input() set tasks(arr: Task[]) {
    const initialTasks = [
      ...arr.filter(t => t.state === 'TASK_PINNED'),
      ...arr.filter(t => t.state !== 'TASK_PINNED'),
    ];
    // const filteredTasks = initialTasks.filter(
    //   t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
    // );
    this.tasksInOrder = initialTasks.filter(
      t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
    );
  }
}
