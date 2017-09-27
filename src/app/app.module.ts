// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';

// Services
import { AuthenticationService } from './services/authentication.service';
import { MovieService } from './services/movie.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule,
    FormsModule
  ],
  providers: [
    MovieService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
