// import { Injectable } from '@angular/core';
// import { HttpService } from 'app/core/http/http.service';
// import { SettingsService } from 'app/core/settings/settings.service';
// import { CookieService } from 'app/core/cookie/cookie.service';
// import { RegisterResponse } from 'app/core/session/registerresponse';
// import { ApiResponse, ResponseCode } from 'app/core/http/apiresponse';
// import { TokenResponse } from 'app/core/session/tokenresponse';
// import { LoginComponent } from 'app/routes/pages/login/login.component';
// import { Message } from 'app/core/constants/constants.message';

// @Injectable()
// export class SessionService {

//   private accessTokenSelector: string;

//   constructor(public http: HttpService, private setting: SettingsService, public cookie: CookieService) {
//     this.accessTokenSelector = 'access_token';
//   }

//   register(username: string, email: string, password: string, successCallback, errorCallback): Promise<ApiResponse<RegisterResponse>> {

//     var payload = {
//       'user_name': username,
//       'email': email,
//       'password': password
//     }

//     const self = this;
//     return self.http.post('register', payload, (resp) => {
//       console.log('register');
//       self.login(username, password, (tokenResp) => {
//         return successCallback(resp);
//       }, (tokenError) => {
//         errorCallback(tokenError);
//       });
//     }, (error) => {
//       if (error.status === 400) // bad req?
//       {
//         const apiResponse = new ApiResponse(ResponseCode.Fail, 'Fail', error.json().message, error);
//         errorCallback(apiResponse);
//       }
//       else {
//         errorCallback(new ApiResponse(ResponseCode.Fail, 'Fail', Message.defaultError, error));
//       }

//     })
//   }

//   recover(usernameOrEmail: string, successCallback, errorCallback): Promise<ApiResponse<RegisterResponse>> {

//     const payload = {
//       'email_or_user_name': usernameOrEmail
//     };

//     const self = this;
//     return self.http.post('remind', payload, (resp) => {
//       return successCallback(resp);

//     }, (error) => {
//       if (error.status === 400) // bad req?
//       {
//         var apiResponse = new ApiResponse(ResponseCode.Fail, 'Fail', error.json().message, error);
//         errorCallback(apiResponse);
//       }
//       else {
//         errorCallback(new ApiResponse(ResponseCode.Fail, 'Fail', Message.defaultError, error));
//       }

//     })
//   }

//   /**
//    * gets a valid token
//    * @param username
//    * @param password
//    */
//   login(username: string, password: string, successCallback, errorCallback): Promise<ApiResponse<any>> {
//     const self = this;
//     const payload = 'username=' + username + '&password=' + password + '&grant_type=password';

//     this.cookie.deleteCookie('access_token');

//     return self.http.post('token', payload, (resp) => {

//       var tokenResp = resp as TokenResponse;

//       self.cookie.setCookie('access_token', tokenResp.access_token);

//       self.setting.user.username = tokenResp.user_name;
//       self.setting.user.email = tokenResp.email;
//       self.setting.user.name = tokenResp.name_surname;

//       var apiResponse = new ApiResponse<TokenResponse>(ResponseCode.Success, 'Success', '', tokenResp);

//       return successCallback(tokenResp);
//     },
//       (error => {
//         console.log('login failed');

//         if (error.status === 400) // bad req?
//         {
//           return errorCallback(new ApiResponse(ResponseCode.Fail, 'Fail', error.json().error_description, error));
//         }

//         return errorCallback(new ApiResponse(ResponseCode.Fail, 'Fail', Message.defaultError, error));

//       }))
//   }

//   logout() {
//     this.cookie.deleteCookie(this.accessTokenSelector);
//   }

//   isUserAuthorized(): boolean {
//     const self = this;
//     const token = self.cookie.getCookie('access_token');

//     return token != null;
//   }

//   getUserInfo(successCallback: any) {
//     const self = this;
//     return self.http.get('user', '', (resp) => {
//       successCallback(resp);
//     }, (error) => {
//       if (error.status === 400) // bad req?
//       {
//         const apiResponse = new ApiResponse(ResponseCode.Fail, 'Fail', error.json().message, error);
//         console.error(apiResponse);
//       }
//       else {
//         const err = new ApiResponse(ResponseCode.Fail, 'Fail', Message.defaultError, error);
//         console.error(err);
//       }
//     });
//   }

//   changePassword(userId: string, currentPassword: string, newPassword: string,
//     confirmPassword: string, successCallback: any, errorCallback: any) {

//     const self = this;
//     const payload = {
//       'current_password': currentPassword,
//       'new_password': newPassword,
//       'confirm_password': confirmPassword,
//       'user_id': userId
//     };

//     return self.http.post('changePassword', payload, (resp) => {
//       successCallback(resp);
//     }, (error) => {
//       if (error.status === 400) // bad req?
//       {
//         const apiResponse = new ApiResponse(ResponseCode.Fail, 'Fail', error.json().message, error);
//         errorCallback(apiResponse);
//       }
//       else {
//         const err = new ApiResponse(ResponseCode.Fail, 'Fail', Message.defaultError, error);
//         errorCallback(err);
//       }
//     });
//   }

//   editUser(userId: string, nameSurname: string, successCallback: any, errorCallback: any) {

//     const self = this;
//     const payload = {
//       'name_surname': nameSurname,
//       'user_id': userId
//     };

//     return self.http.post('user/edit', payload, (resp) => {
//       successCallback(resp);
//     }, (error) => {
//       if (error.status === 400) // bad req?
//       {
//         const apiResponse = new ApiResponse(ResponseCode.Fail, 'Fail', error.json().message, error);
//         errorCallback(apiResponse);
//       }
//       else {
//         const err = new ApiResponse(ResponseCode.Fail, 'Fail', Message.defaultError, error);
//         errorCallback(err);
//       }
//     });
//   }
// }
