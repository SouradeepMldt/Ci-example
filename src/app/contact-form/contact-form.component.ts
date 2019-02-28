import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent  {

  name = new FormControl(''); //create a new instance of the form control to save as a class property.
//Use the constructor of FormControl to set its initial value, which in this case is an empty string. By creating these controls in your component class, you get immediate access to listen for, update, and validate the state of the form input.

/*updateName() {
  this.name.setValue('Nancy');
}*/
updateName()
{
  this.name.setValue('Guddu');//The following example adds a method to the component class to update the value of the control to Guddu using the setValue() method.
}
}