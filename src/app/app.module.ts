import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { MicroserviceComponent } from './microservice/microservice.component';
import { CustomerSystemComponent } from './customer-system/customer-system.component';
import { SocialComponent } from './social/social.component';
import { WebHostingComponent } from './web-hosting/web-hosting.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MenuComponent,
    RegisterComponent,
    MicroserviceComponent,
    CustomerSystemComponent,
    SocialComponent,
    WebHostingComponent,
    WebDevelopmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
