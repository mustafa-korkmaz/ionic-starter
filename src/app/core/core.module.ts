import { NgModule } from '@angular/core';
import { SettingsService } from './settings/settings.service';
import { MenuService } from './menu/menu.service';
import { HelperService } from './helper/helper.service';

@NgModule({
    imports: [
    ],
    providers: [
        SettingsService,
        HelperService,
        MenuService
    ],
    declarations: [
    ],
    exports: [
    ]
})
export class CoreModule {
}

