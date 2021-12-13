import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
     ReactiveFormsModule,
     CommonModule,
     BrowserAnimationsModule,
     ToastrModule.forRoot({
       timeOut:1500,
       progressBar:true,
       progressAnimation:'increasing',
       preventDuplicates:true
     })
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

