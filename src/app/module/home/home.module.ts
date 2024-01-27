import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { HomeComponent } from './pages/home/home.component';

import { CardComponent } from './pages/card/card.component';
import { CheckboxModule } from 'primeng/checkbox';
import { CreateTaskComponent } from './pages/create-task/create-task.component';

@NgModule({
  declarations: [HomeComponent, CardComponent, CreateTaskComponent],
  imports: [SharedModule, CheckboxModule, HomeRoutingModule],
})
export class HomeModule {}
