import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngxs/store";

@Component({
  selector: 'app-inbox-screen',
  templateUrl: './inbox-screen.component.html',
  styleUrls: ['./inbox-screen.component.css']
})
export class InboxScreenComponent {
  error$: Observable<boolean>;

  constructor(private store: Store) {
    this.error$ = store.select((state) => state.taskbox.error);
  }
}
