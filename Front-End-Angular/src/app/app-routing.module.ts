import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardItemComponentComponent } from './card-item-component/card-item-component.component';
import { Pagina404ComponentComponent } from './pagina404-component/pagina404-component.component';
import {PageOneComponentComponent} from './page-one-component/page-one-component.component';
import {ProfileComponent} from './profile/profile.component';
import {AuthGuard} from './auth.guard'
const routes: Routes = [
  {path:'**', component:Pagina404ComponentComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'inicio',component:PageOneComponentComponent},
  {path:'inicio/:id_card',component:CardItemComponentComponent},
  {path: 'profile', component: ProfileComponent,
  canActivate:[AuthGuard],//solo accesible si el usuario esta logeado
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
