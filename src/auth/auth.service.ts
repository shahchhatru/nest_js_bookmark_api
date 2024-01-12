import { Injectable } from "@nestjs/common";
import * as argon from "argon2";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";

@Injectable({})
export class AuthService{
    constructor(private prisma:PrismaService){

    }
   async signin(){
        return {
            'msg':'I have signed in'
        }
   }

   async signup(dto:AuthDto){
    //let's create hash 
    const hash= await argon.hash(dto.password);
    // create user to db
    const user=await this.prisma.user.create({
        data:{
            email:dto.email,
            hash:hash
        },
        select:{
            id:true,
            email:true,
            createdAt:true,
        }
    })

    //return the saved user
        return user;
   }
}