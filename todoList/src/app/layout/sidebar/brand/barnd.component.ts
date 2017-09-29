import { EchoesState } from '../../store';
import { Store } from '@ngrx/store';
import { AppLayoutActions } from '../../store/app-layout';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// import './app-brand.scss';

@Component({
  selector: 'app-brand',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './brand.scss' ],
  templateUrl: './brand.component.html',
})

export class BrandComponent implements OnInit {

  constructor(
    private appLayoutActions: AppLayoutActions,
    private store: Store<EchoesState>
  ) {}
  ngOnInit() { }

  toggleSidebar () {
    return this.store.dispatch(this.appLayoutActions.toggleSidebar());
  }
}
