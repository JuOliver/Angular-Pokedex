import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//pages
import { HomeComponent } from './home/home.component';

//Module routing
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class PagesModule { }
