import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/sign-in'], { relativeTo: this.route });
  }
}
