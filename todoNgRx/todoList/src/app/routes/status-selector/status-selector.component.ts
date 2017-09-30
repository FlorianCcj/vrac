import {Component} from "@angular/core";
import {ALL, IN_PROGRESS, DONE, filterByStatus} from "../../core/store/filters/filters.actions";
import {AppState} from "../../interfaces/appState";
import {Store} from "@ngrx/store";
import * as Rx from "rxjs/Rx";
@Component({
  selector: 'app-status-selector',
  templateUrl: './status-selector.component.html',
  styleUrls: ['./status-selector.component.css']
})
export class StatusSelectorComponent {
	statuses = [ALL, IN_PROGRESS, DONE];

    changeStatus$ = new Rx.Subject()
        .map((status) => filterByStatus(status));

    constructor(store: Store<AppState>) {
        Rx.Observable.merge(
            this.changeStatus$
        )
            .subscribe(store.dispatch.bind(store));
    }
}
