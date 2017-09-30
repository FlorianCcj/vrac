import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';

import { UserProfile, Authorization } from '../../core/services';
import { EchoesState } from '../../core/store';
import { getUserPlaylists$, getUserViewPlaylist$, getIsUserSignedIn$ } from '../../core/store/user-profile/user-profile.selectors';


@Component({
  selector: 'app-page2',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./page2.component.scss'],
  template: `
  <article>
    <app-header>
      <h3 class="navbar-text">
        <i class="fa fa-heart"></i> My Profile - <small>My Playlists</small>
      </h3>
    </app-header>
    <router-outlet></router-outlet>
  </article>
  `
})
export class Page2Component implements OnInit {
  playlists$ = this.store.let(getUserPlaylists$);
  currentPlaylist$ = this.store.let(getUserViewPlaylist$);
  isSignedIn$ = this.store.let(getIsUserSignedIn$);

  constructor(
    private userProfile: UserProfile,
    private authorization: Authorization,
    public store: Store<EchoesState>
  ) {}

  ngOnInit () {}

  signInUser () {
    this.authorization.signIn();
  }

  getPlaylists () {
    return this.userProfile.getPlaylists(true);
  }
}
