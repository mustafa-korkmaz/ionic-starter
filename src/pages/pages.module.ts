import { NgModule } from '@angular/core';
import { ListPage } from './list/list';
import { CameraTabDefaultPagePage } from './camera-tab-default-page/camera-tab-default-page';
import { CartTabDefaultPagePage } from './cart-tab-default-page/cart-tab-default-page';
import { CloudTabDefaultPagePage } from './cloud-tab-default-page/cloud-tab-default-page';
import { TabsControllerPage } from './tabs-controller/tabs-controller';
import { IonicPageModule } from 'ionic-angular';
import { MenuService } from '../app/core/menu/menu.service';
import { menu } from '../pages/menu';
import { ProfilePage } from './profile/profile';
import { HelpPage } from './help/help';
import { ContactPage } from './contact/contact';
import { InfoPage } from './info/info';
import { LoginPage } from './login/login';

@NgModule({
  declarations: [
    ListPage,
    CameraTabDefaultPagePage,
    CartTabDefaultPagePage,
    CloudTabDefaultPagePage,
    TabsControllerPage,
    ProfilePage,
    ContactPage,
    InfoPage,
    HelpPage,
    LoginPage    
  ],
  imports: [
    IonicPageModule.forChild(TabsControllerPage),
  ],
  entryComponents: [
    ListPage,
    CameraTabDefaultPagePage,
    CartTabDefaultPagePage,
    CloudTabDefaultPagePage,
    TabsControllerPage,
    ProfilePage,
    ContactPage,
    InfoPage,
    HelpPage,
    LoginPage
  ],
  providers: [
  ]
})
export class PagesModule {
  constructor(public menuService: MenuService) {

    let menuItems = [];
    for (let entry of menu) {
      menuItems.push(entry);
    }

    menuService.addMenu(menuItems);
  }
}