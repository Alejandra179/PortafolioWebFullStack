import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pagina404ComponentComponent } from './pagina404-component/pagina404-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { PageOneComponentComponent } from './page-one-component/page-one-component.component';
import { CardItemComponentComponent } from './card-item-component/card-item-component.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
