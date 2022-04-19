import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { ProfileComponent } from './profile/profile.component';
import { ExperienciaLaboralItemComponent } from './experiencia-laboral-item/experiencia-laboral-item.component';
import { EducacionItemComponent } from './educacion-item/educacion-item.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    NavHeaderComponent,
    ProfileComponent,
    ExperienciaLaboralItemComponent,
    EducacionItemComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[NavHeaderComponent,
    ProfileComponent,
    ExperienciaLaboralItemComponent,
    EducacionItemComponent]
})
export class MenuPrincipalModule { }
