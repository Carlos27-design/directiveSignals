import { Component, signal } from '@angular/core';

interface MenuItem {
  route: string;
  title: string;
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent {
  public menuItems = signal<MenuItem[]>([
    { route: 'counter', title: 'Contador' },
    { route: 'user-info', title: 'Información de Usuario' },
    { route: 'properties', title: 'Mutaciones' },
  ]);
}
