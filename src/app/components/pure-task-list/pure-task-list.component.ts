import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from '../../models/task.model';

@Component({
  selector: 'app-pure-task-list',
  templateUrl: './pure-task-list.component.html',
  styleUrls: ['./pure-task-list.component.css']
})
export class PureTaskListComponent {
  @Input() loading = false;

  @Output() onPinTask = new EventEmitter<string>();

  @Output() onArchiveTask = new EventEmitter<string>();

  tasksInOrder: Task[] = [];

  @Input() set tasks(arr: Task[] | null) {
    const tasks: Task[] = arr ?? [];
    
    const initialTasks = [
      ...tasks.filter(t => t.state === 'TASK_PINNED'),
      ...tasks.filter(t => t.state !== 'TASK_PINNED'),
    ];
    this.tasksInOrder = initialTasks.filter(
      t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
    );
  }
}
