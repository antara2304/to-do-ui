import { NgModule } from '@angular/core';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { SignInComponent } from './pages/sign-in/sign-in.component';

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [SharedModule, SignInRoutingModule],
})
export class SignInModule {}
