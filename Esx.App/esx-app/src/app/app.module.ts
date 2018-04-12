import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MasterPage } from './pages/master/master.page';
import { FormComponent,FormDialog } from './components/form/form.component';

import {MatToolbarModule,
        MatInputModule,
        MatButtonModule,
        MatGridListModule,
        MatDialogModule } 
from '@angular/material';

@NgModule({
  declarations: [ MasterPage, FormComponent, FormDialog ],
  entryComponents: [FormComponent, FormDialog],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [MasterPage]
})
export class AppModule { }
