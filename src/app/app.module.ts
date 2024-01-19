import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';





@NgModule({
  declarations: [
    AppComponent
  ],
 
  imports: [
    MatIconModule,
    BrowserModule,
 
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

