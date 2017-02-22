import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CardComponent } from './showcase/components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowcaseComponent,
    HomeComponent,
    LoginComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
