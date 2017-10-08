import { TabsControllerPage } from "./tabs-controller/tabs-controller";
import { ProfilePage } from "./profile/profile";
import { HelpPage } from "./help/help";
import { ContactPage } from "./contact/contact";
import { LoginPage } from "./login/login";
import { InfoPage } from "./info/info";

export class MenuPage {
    constructor(title: string, component: any, icon: string) {
        this.title = title;
        this.component = component;
        this.icon = icon;
    }

    public title: string;
    public component: any;
    public icon: string;
}

const MenuPageHome = new MenuPage("Anasayfa", TabsControllerPage, "home");
const MenuPageProfile = new MenuPage("Profilim", ProfilePage, "person");
const MenuPageContact = new MenuPage("İletişim", ContactPage, "mail");
const MenuPageHelp = new MenuPage("Yardım", HelpPage, "help-circle");
const MenuPageInfo = new MenuPage("Hakkında", InfoPage, "information-circle");
const MenuPageLogout = new MenuPage("Çıkış Yap", LoginPage, "log-out");

export const menu = [
    MenuPageHome,
    MenuPageProfile,
    MenuPageContact,
    MenuPageHelp,
    MenuPageInfo,
    MenuPageLogout
];

