import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';
@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {
  addForm!: FormGroup;
  submitted!: boolean;
  constructor(private formBuilder: FormBuilder, private router: Router, private contactservice: ContactService) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({ 
      id:[], 
      firstName: ['', Validators.required], 
      lastName:['', Validators.required], 
      phoneNo: ['', Validators.required] 
    }); 
  }
  
  onSubmit() {
    
    this.submitted = true;
    if(this.addForm.invalid){
      return; 
    }

    this.contactservice.createUser(this.addForm.value).subscribe( () => { 
      this.router.navigate(['/contact']);
    });

  }

}
