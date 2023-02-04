import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "../../models/task.model";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task: Task;

  @Output() onPinTask = new EventEmitter<string | undefined>();

  @Output() onArchiveTask = new EventEmitter<string | undefined>();

  onPin(id?: string): void {
    this.onPinTask.emit(id);
  }

  onArchive(id?: string): void {
    this.onArchiveTask.emit(id);
  }
}
