import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class AuthService{

    token : string;

    constructor(private httpClient : HttpClient){}

    userLogin(userDetails){
        return this.httpClient.post(
            'https://www.gogifters.com/api/login_auth.php', 
            userDetails,
            {
                responseType: 'text',
                headers: new HttpHeaders().append('Content-Type', 'application/json')
            }
        )
        .subscribe(
            (data) => {
                this.token = data;
                // console.log(this.token);
            }
        )
    }

    isAutheticated(){
        return this.token != null;
    }



}