import { Route } from '@angular/router';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';

// import './navigator.scss';

@Component({
  selector: 'app-menu',
  // encapsulation: ViewEncapsulation.None,
  styleUrls: [ './menu.component.scss' ],
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppNavigatorComponent implements OnInit {
  @Input() closed = false;

  public routes = [
    { link: '/', icon: 'fa fa-music', label: 'Explore' },
    { link: '/user', icon: 'fa fa-heart', label: 'My Profile' }
  ];

  constructor() { }

  ngOnInit() {
  }
}
