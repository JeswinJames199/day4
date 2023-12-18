import { Routes } from '@angular/router';
import { HomeComponent } from './pagees/home/home.component';
import { Component } from '@angular/core';
import { ContactComponent } from './pagees/contact/contact.component';
import { NavbarComponent } from './pagees/navbar/navbar.component';
import { DistrictsComponent } from './pagees/districts/districts.component';
import { SingleComponent } from './pagees/single/single.component';
import { LoginComponent } from './pagees/login/login.component';
import { MapComponent } from './pagees/map/map.component';
import { FooterComponent } from './pagees/footer/footer.component';

export const routes: Routes = [
    {
        path:'navbar',component:HomeComponent,
    },

{
    path: 'home',component:HomeComponent
},
{
    path: 'districts',component:DistrictsComponent
},
{
    path:'contact',component:ContactComponent
},
{
    path:'districts/:id',component:SingleComponent
},
{
    path:'login',component:LoginComponent
},
{
    path:'Map',component:MapComponent

}










];