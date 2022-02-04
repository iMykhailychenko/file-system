import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ContainerComponent } from './components/container/container.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { ActionsComponent } from './components/actions/actions.component';
import { BackButtonComponent } from './components/back-button/back-button.component';

@NgModule({
    declarations: [AppComponent, HomeComponent, MenuComponent, ContainerComponent, BreadcrumbComponent, ActionsComponent, BackButtonComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
