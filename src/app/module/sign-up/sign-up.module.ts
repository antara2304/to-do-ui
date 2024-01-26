import { NgModule } from '@angular/core';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [SharedModule, SignUpRoutingModule],
})
export class SignUpModule {}
