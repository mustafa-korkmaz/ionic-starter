export class TokenResponse {
    constructor(
        public access_token: string, 
        public user_name: string, 
        public email: string, 
        public name_surname: string) { }
}