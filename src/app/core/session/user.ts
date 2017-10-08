export class User {
    public user_id: string;
    public user_name: string;
    public email: string;
    public image_url: string;
    public phone_number: string;
    public joined_at: Date;
    public name_surname: string;
    constructor() { }
}

/*
user_id": "722b73f3-9ce6-4a9a-b1b1-6bfdc8ab951c",
"user_name": "mute",
"name_surname": null,
"image_url": null,
"email": "m.korkmaz@outlook.com",
"phone_number": null,
"claims":[
{
"type": "AspNet.Identity.SecurityStamp",
"value": "0ffe0111-b2ca-4213-afaf-cf3ebcdad994"
}
],
"joined_at": "0001-01-01T00:00:00"
*/