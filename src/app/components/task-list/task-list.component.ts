import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngxs/store";
import { Task } from '../../models/task.model';
import {ArchiveTask, PinTask} from "../../state/task.state";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks$?: Observable<Task[]>;

  constructor(private store: Store) {
    this.tasks$ = store.select((state) => state.taskbox.tasks);
  }

  archiveTask(id: string) {
    this.store.dispatch(new ArchiveTask(id));
  }

  pinTask(id: string) {
    this.store.dispatch(new PinTask(id));
  }
}
