import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina404ComponentComponent } from './pagina404-component/pagina404-component.component';

const routes: Routes = [
 /*  {path:'inicio',component:Ejemplo}, */
 {path:'**', component:Pagina404ComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
