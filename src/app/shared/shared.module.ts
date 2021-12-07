import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    PokeListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    SearchComponent,
    PokeListComponent,
  ]
})
export class SharedModule { }
