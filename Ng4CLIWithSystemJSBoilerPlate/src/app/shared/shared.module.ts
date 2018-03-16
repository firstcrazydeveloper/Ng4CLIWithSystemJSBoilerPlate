import { NgModule, ModuleWithProviders } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { WebApiManager } from './service/webApiManager.service';
import { AuthGuard } from './service/auth.guard.service';
import { AuthService } from './service/auth.service';
import { BusySpinnerComponent } from './components/busyspinner/busyspinner.component';
import { BusySpinnerService } from './components/busyspinner/busyspinner.service';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/pagenotfound/pagenotfound.component';
@NgModule({
    imports: [CommonModule, RouterModule, HttpModule, ReactiveFormsModule, FormsModule],
    declarations: [BusySpinnerComponent, LoginComponent, PageNotFoundComponent],
    exports: [BusySpinnerComponent, LoginComponent, PageNotFoundComponent],
    providers: [BusySpinnerService]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [AuthGuard, AuthService, WebApiManager]
        }
    }

}