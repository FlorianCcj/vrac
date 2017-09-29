import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header-user',
  template: `
  <!-- header -> utilisateur -->
    <span class="btn btn-link navbar-link navbar-btn"
      *ngIf="signedIn; else userNotSignedIn">
      <img [src]="userImageUrl" class="user-icon">
    </span>
    <ng-template #userNotSignedIn>
      <span class="btn btn-link navbar-link navbar-btn"
        (click)="handleSignIn()">
        <i class="fa fa-sign-in"></i>
        Sign In
      </span>
    </ng-template>
  `,
  styleUrls: ['./app-header-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppHeaderUserComponent {
  @Input() userImageUrl = '';
  @Input() signedIn = false;

  @Output() signIn = new EventEmitter();

  constructor() { }

  handleSignIn() {
    this.signIn.emit();
  }
}
