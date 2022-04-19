import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina404ComponentComponent } from './pagina404-component/pagina404-component.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  

  /* { path: 'inicio', component: PageOneComponentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'inicio/:id_card', component: CardItemComponentComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard], //solo accesible si el usuario esta logeado
  },
  { path: 'menu-principal/login', component: CardLoginComponent }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
