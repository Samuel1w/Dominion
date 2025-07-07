import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ReservationComponent } from './reservation/reservation.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './Admin/login/login.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'menu', component:MenuComponent},
    {path:'reserve', component:ReservationComponent},
    {path:'gallery', component:GalleryComponent},
    {path:'contact', component:ContactComponent}
    
];
