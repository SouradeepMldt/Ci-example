import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';//Import the FormArray class from @angular/forms to use for type information.
//import { MustMatch } from './_helpers/must-match.validator';
@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  submitted = false;
  states=['Andra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka','Kerala','Madya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Orissa','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telagana','Tripura','Uttaranchal','Uttar Pradesh','West Bengal']
 /* profileForm= new FormGroup({   //Create a property in the component class named profileForm and set the property to a new form group instance. To initialize the form group, provide the constructor with an object of named keys mapped to their control.
    firstName: new FormControl(''),//For the profile form, add two form control instances with the names firstName and lastName.
    lastName: new FormControl(''),
    emailId: new FormControl(''),
    phoneNo: new FormControl(''),
  address : new FormGroup({
    street: new FormControl(''),
    city:new FormControl(''),
    state:new FormControl(''),
    zipCode:new FormControl('')
  })  
  });
  onSubmit(){
    console.warn(this.profileForm.value);//ollowing example uses console.warn to log a message to the browser console.
  
  }
  updateProfile() {
    
        this.profileForm.patchValue({
          firstName: 'Souradeep',
          lastName: 'Misra',
          address:{
            state:'West Bengal'
          }

      
        });
      }*/
    //Creating form control instances manually can become repetitive when
    // dealing with multiple forms. The FormBuilder service provides convenient methods for generating controls.

     //The FormBuilder service is an injectable provider that is provided with the reactive forms module.
     // Inject this dependency by adding it to the component constructor.
    //The FormBuilder service has three methods: control(), group(), and array(). These are factory methods for generating instances in your component classes including form controls, form groups, and form arrays.

    /* constructor(private fb: FormBuilder) { }

     profileForm=this.fb.group({
      firstName:['', Validators.required],
      lastName: ['',Validators.required],
      emailId: ['',Validators.required],
      phoneNo: ['',Validators.required],
    address : this.fb.group({
      street: ['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      zipCode:['',Validators.required]
    })  
    });*/

    //
    constructor(private fb: FormBuilder) { }
    profileForm = this.fb.group({
      firstName: ['', Validators.compose( [Validators.required,Validators.minLength(4)])],
     // firstName: ['', Validators.required, Validators.minLength(4)],
      lastName: ['', Validators.compose( [Validators.required,Validators.minLength(4)])],
      emailId: ['',  Validators.compose( [Validators.required,Validators.email])],
      phoneNo: ['',Validators.compose( [Validators.required,Validators.minLength(10),Validators.maxLength(13)])],
     // emailId: ['',Validators.required, Validators.email],
      //reEmailId:['',Validators.required],
      //phoneNo: ['',Validators.required,Validators.minLength(10), Validators.maxLength(13)],
      //rePnoneNo:['',Validators.required],
      gender:['',Validators.required],
     
    
      address: this.fb.group({
        street: ['',Validators.required],
        city: ['',Validators.required],
        state: [''],
        zipCode: ['',Validators.compose( [Validators.required,Validators.minLength(4),Validators.maxLength(4)])]
      }),
      
      
      aliases: this.fb.array([    //You can initialize a form array with any number of controls, from zero to many, by defining them in an array. Add an aliases property to the form group instance for profileForm to define the form array.
        this.fb.control('')
      ]),
     
    });
   
    addAlias() {
      this.aliases.push(this.fb.control(''));
    }
    get aliases() {
      return this.profileForm.get('aliases') as FormArray;
    }
   get firstName() { 
      return this.profileForm.get('firstName'); 
    }
    get lastName() { 
      return this.profileForm.get('lastName'); 
    }
    get emailId() { 
      return this.profileForm.get('emailId'); 
    }
    get phoneNo() { 
      return this.profileForm.get('phoneNo'); 
    }
    
    
   

    updateProfile() {
    
      this.profileForm.patchValue({
        firstName: 'Souradeep',
        lastName: 'Misra',
        address:{
          state:'West Bengal'
        }
      })
    }
    onSubmit(){
      console.warn(this.profileForm.value);
      this.submitted = true;
      if(this.profileForm.invalid){
        return;
      }
      alert('SUCCESS!! :-)')
    }
    
}
