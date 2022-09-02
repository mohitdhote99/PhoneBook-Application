import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {first} from 'rxjs/operators';
import { Contact } from '../model/contact.model';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {
  
  contact!: Contact;
  editForm!: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder,private router: Router, private contactservice: ContactService) { }
  
  ngOnInit(): void {
    
    if(localStorage.getItem("username") != null){
      let userId = localStorage.getItem("editUserId");
      if(!userId) { 
        alert("user not found");
        this.router.navigate(['/contact']);
        return;
      }

      this.editForm = this.formBuilder.group({ 
        id: [], 
        phoneNo: ['', Validators.required], 
        firstName: ['', Validators.required], 
        lastName: ['', Validators.required]
      });

      this.contactservice.getUserById(+userId).subscribe( data => {
        this.editForm.setValue(data);
      });

    }

 
  }

  onSubmit() { 
    this.submitted = true;
    this.contactservice.updateUser(this.editForm.value).pipe(first()).subscribe(data => { 
      this.router.navigate(['/contact']); 
    }, 
    error => { 
      alert(error); 
    });
  }

}
