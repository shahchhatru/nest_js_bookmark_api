import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService{
   signin(){
        return {
            'msg':'I have signed in'
        }
   }

   signup(){
        return{
            'msg':'I haved signed up'
        }
   }
}