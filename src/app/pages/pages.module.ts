import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//pages
import { HomeComponent } from './home/home.component';

//Module routing
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';
import { RoutingModule } from './routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
