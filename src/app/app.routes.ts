import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { TicketComponent } from './pages/ticket/ticket.component';
import { LayoutPageComponent } from './shared/components/layout-page/layout-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Вход',
  },
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
        title: 'Профиль',
      },
      {
        path: 'tickets',
        component: TicketsComponent,
        title: 'Задачи',
      },
      {
        path: 'tickets/:id',
        component: TicketComponent,
        title: 'Задача',
      },
    ],
  },

  { path: '**', component: NotFoundComponent },
];
