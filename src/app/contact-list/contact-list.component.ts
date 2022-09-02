import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../model/contact.model';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contact!: Contact[];
  constructor(private router: Router, private contactservice: ContactService) {}

  ngOnInit(): void {
    // if(localStorage.getItem("editUserId")!= null){
      this.contactservice.getUsers().subscribe(data=> { this.contact = data; });
    // }
  }

  editUser(contact: Contact): void { 
    localStorage.removeItem("editUserId"); 
    localStorage.setItem("editUserId", contact.id.toString());
    this.router.navigate(['update']);
  }; 


      // Delete User 
    deleteUser(user: Contact): void { 
      let result = confirm('Do you want to delete the user?') 
      if(result) 
      { 
        this.contactservice.deleteUser(user.id) 
          .subscribe( data => { 
            this.contact = this.contact.filter(u => u !== user); 
          });
        }
    };


}
