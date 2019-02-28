import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ProfileEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,                               // <========== Add this line!
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
