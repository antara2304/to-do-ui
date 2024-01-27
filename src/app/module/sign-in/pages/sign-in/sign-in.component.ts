import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '@app/data/services/api/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  public password: string | null = '';
  public email: string | null = '';
  constructor(
    private userSvc: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  async onSubmit() {
    const profile = {
      password: this.password,
      email: this.email,
    };
    try {
      this.userSvc.login(profile).subscribe((data: any) => {
        localStorage.setItem('token', data['access_token']);
        console.log('User Logged In Successfully');
        this.router.navigate(['/home'], { relativeTo: this.route });
      });
    } catch (error) {
      console.error(error);
    }
  }
  createAccout() {
    this.router.navigate(['/sign-up'], { relativeTo: this.route });
  }
}
