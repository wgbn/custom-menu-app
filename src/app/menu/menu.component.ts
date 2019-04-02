import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  active: number = 1;
  menuOpened: boolean = false;

  constructor() { }

  ngOnInit() {}

  menuClick(menu) {
    if (menu == this.active && this.menuOpened) {
      this.menuOpened = false;
    } else {
      this.menuOpened = true;
    }
    this.active = menu;
  }

}
