import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { WebApiManager } from '../app/shared/service/webApiManager.service';



@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, HttpModule, BrowserAnimationsModule, CommonModule, FormsModule, ReactiveFormsModule, routing, SharedModule.forRoot()
    ],
    providers: [WebApiManager],
    bootstrap: [AppComponent]
})
export class AppModule {

    constructor(router: Router) {
    }
}
