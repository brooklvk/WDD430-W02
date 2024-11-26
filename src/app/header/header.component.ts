import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'cms-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  constructor( private authService: AuthService) {}

  onLogout() {
    // this.authService.logout();
  }

  isAuthenticated() {
    // return this.authService.isAuthenticated();
    return true;
  }
}
