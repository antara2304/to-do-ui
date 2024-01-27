import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '@app/data/services/api/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  constructor(
    private userSvc: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public name: string | null = '';
  public password: string | null = '';
  public email: string | null = '';

  public profile = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
  });

  public value: string = '';

  async onSubmit() {
    const profile = {
      name: this.name,
      password: this.password,
      email: this.email,
    };
    try {
      this.userSvc.create(profile).subscribe((data) => {
        console.log('User Created Successfully');
        this.router.navigate(['/sign-in'], { relativeTo: this.route });
      });
    } catch (error) {
      console.error(error);
    }
  }
  signin() {
    this.router.navigate(['/sign-in'], { relativeTo: this.route });
  }
}
