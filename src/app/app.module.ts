import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FlowerListComponent } from './flower-list/flower-list.component';
import { FlowerDetailComponent } from './flower-detail/flower-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavComponent } from './nav/nav.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    FlowerListComponent,
    FlowerDetailComponent,
    WelcomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
