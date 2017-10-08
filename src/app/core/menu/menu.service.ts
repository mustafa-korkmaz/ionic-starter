import { Injectable } from '@angular/core';
import { MenuPage } from '../../../pages/menu';

@Injectable()
export class MenuService {

    menuPages: Array<MenuPage>;

    constructor() {
        this.menuPages = [];
    }

    addMenu(items: Array<MenuPage>) {
        items.forEach((item) => {
            this.menuPages.push(item);
        });
    }

    getMenu() {
        return this.menuPages;
    }

}
