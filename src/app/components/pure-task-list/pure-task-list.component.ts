import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-pure-pure-task-list',
  templateUrl: './pure-task-list.component.html',
  styleUrls: ['./pure-task-list.component.css']
})
export class PureTaskListComponent {
  @Input() loading = false;

  @Output() onPinTask = new EventEmitter<string>();

  @Output() onArchiveTask = new EventEmitter<string>();

  tasksInOrder: Task[] = [];

  @Input() set tasks(arr: Task[]) {
    const initialTasks = [
      ...arr.filter(t => t.state === 'TASK_PINNED'),
      ...arr.filter(t => t.state !== 'TASK_PINNED'),
    ];
    this.tasksInOrder = initialTasks.filter(
      t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
    );
  }
}
