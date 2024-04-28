import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { TicketComponent } from './pages/ticket/ticket.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'tickets',
    component: TicketsComponent,
  },
  {
    path: 'tickets/:id',
    component: TicketComponent,
  },
  { path: '**', component: NotFoundComponent },
];
