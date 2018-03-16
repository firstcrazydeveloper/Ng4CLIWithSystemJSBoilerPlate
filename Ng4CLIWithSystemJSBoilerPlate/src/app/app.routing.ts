﻿import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { PageNotFoundComponent } from './shared/components/pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
   
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    //{
    //    path: 'todo',
    //    loadChildren: 'app/features/todo/todo.module#TodoModule'
    //},
    //{
    //    path: 'speechDashboard',
    //    loadChildren: 'app/features/speech/speech.module#SpeechModule'
    //},
    { path: '**', component: PageNotFoundComponent }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });