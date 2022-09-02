import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../model/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  baseUrl:string = 'http://localhost:3000/contact';
  constructor(private http:HttpClient) { } 
  
  createUser(contact: Contact) { 
    return this.http.post(this.baseUrl, contact); 
  }
  // Get All Users
  getUsers(){ 
    return this.http.get<Contact[]>(this.baseUrl); 
  }

  // Get User By Id 
  getUserById(id: number){ 
    return this.http.get<Contact>(this.baseUrl+'/'+id);
  }
  // Modify User
  updateUser(contact: Contact) { 
    return this.http.put(this.baseUrl + '/' + contact.id, contact); 
  }
  
  // Delete User 
  deleteUser(id: number) { 
    return this.http.delete(this.baseUrl + '/' + id); 
  }
}
