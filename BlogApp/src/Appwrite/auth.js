import conf from '../conf.js'
import {Client, Account, ID} from "appwrite";

export class AuthService {
    client  = new client();
    account; 

    constructor(){
        this.client
          .setEndpoint(conf.appwriteUrl)
          .setProject(conf.appwriteProjectId);
          this.account = new Account(this.client);
    }

    async createAccount({email, passsword, name}){
        try{
           const userAccount = await this.account.create(ID.unique(), email, passsword, name);
           if(userAccount){
            // call another mathod
           }else{
            return userAccount;
           }
        }catch(error){
            throw error;
        }
    }

    async login({email, password}){
    try{
        return await this.account.createEmailPasswordSession(email, password);

    }catch(error){
        throw error;
    }
    }  

    async getCurrentUser(){
        try{
             return await this.account.get();

        }catch(error){
            console.log("appwrite service: error", error)
        }

        return null ;
    }

    async logout(){
        try{
          await this.account.deleteSessions();
        }catch(error){
            console.log("Appwrite service:: logout error", error);
        }
    }
}

const authService = new AuthService();

export default AuthService;