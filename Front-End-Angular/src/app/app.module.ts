import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPrincipalModule } from './menu-principal/menu-principal.module';
import { PageLoginModule} from './page-login/page-login.module';

@NgModule({

  declarations: [
    AppComponent

  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MenuPrincipalModule,
    PageLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
