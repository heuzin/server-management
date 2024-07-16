import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { TicketsComponent } from './dashboard/tickets/tickets.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    TrafficComponent,
    TicketsComponent,
    ServerStatusComponent,
    DashboardItemComponent,
  ],
})
export class AppComponent {}
