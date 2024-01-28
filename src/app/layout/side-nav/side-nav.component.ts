import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from '@app/data/services/api/token.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  public userName: string = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tokenSvc: TokenService
  ) {}
  ngOnInit() {
    try {
      this.userName = this.tokenSvc.decodeToken()['name'];
    } catch (error) {
      console.error(error);
    }
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/sign-in'], { relativeTo: this.route });
  }
}
