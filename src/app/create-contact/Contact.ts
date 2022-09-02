import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export class Contacts{
    firstName:string    =   "";
    lastName:string     =   "";
    phoneNo:number      =   0;
    constructor(fnam:string,lnam:string,pno:number){
        this.firstName = fnam;
        this.lastName  = lnam;
        this.phoneNo   = pno;
    }
}