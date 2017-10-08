import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

  public user: any;
  public app: any;
  public layout: any;
  public xhr: any;
  public listing: any;
  public alarmSettings: any;


  constructor() {

    // xhr settings
    // ------------------------------------
    this.xhr = {
      apiBaseUrl: 'http://apitest.raqun.co/',
      contentType: 'application/json',
      channelType: '0',
      apiKey: '38605538fd5c81be4b0270b8fbd6aa45',
      cookieExpireDays: 730,
      sharedDomain: 'http://raqun.co/'
    };

    // listing settings
    // ------------------------------------
    this.listing = {
      startIndex: 0,
      length: 20,
    };

    // alarm settings
    // ------------------------------------
    this.alarmSettings = {
      notifyOnPriceChanges: 1,
      notifyOnPriceDecreased: 2,
      notifyOnPriceIncreased: 3,
      notifyOnExactPrice: 4
    };

    // User Settings
    // -----------------------------------
    this.user = {
      name: 'John',
      job: 'ng-developer',
      email: '',
      username: '',
      picture: 'assets/img/user/02.jpg'
    };

    // App Settings
    // -----------------------------------
    this.app = {
      name: 'Angle',
      description: 'Angular Bootstrap Admin Template',
      year: ((new Date()).getFullYear()),
      siteUrl: 'raqun.co',
      adminPanelUrl: 'web.raqun.co',
      dummyImage: '/assets/img/dummy.png'
    };

    // Layout Settings
    // -----------------------------------
    this.layout = {
      isFixed: true,
      isCollapsed: false,
      isBoxed: false,
      isRTL: false,
      horizontal: false,
      isFloat: false,
      asideHover: false,
      theme: null,
      asideScrollbar: false,
      isCollapsedText: false,
      useFullLayout: false,
      hiddenFooter: false,
      offsidebarOpen: false,
      asideToggled: false,
      viewAnimation: 'ng-fadeInUp'
    };

  }

  getAppSetting(name) {
    return name ? this.app[name] : this.app;
  }
  getUserSetting(name) {
    return name ? this.user[name] : this.user;
  }
  getLayoutSetting(name) {
    return name ? this.layout[name] : this.layout;
  }

  setAppSetting(name, value) {
    if (typeof this.app[name] !== 'undefined') {
      this.app[name] = value;
    }
  }
  setUserSetting(name, value) {
    if (typeof this.user[name] !== 'undefined') {
      this.user[name] = value;
    }
  }
  setLayoutSetting(name, value) {
    if (typeof this.layout[name] !== 'undefined') {
      return this.layout[name] = value;
    }
  }

  toggleLayoutSetting(name) {
    return this.setLayoutSetting(name, !this.getLayoutSetting(name));
  }

}
