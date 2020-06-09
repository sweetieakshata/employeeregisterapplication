import { Component, OnInit } from '@angular/core';
import { OrganizationdataService } from '../organizationdata.service';
import { MessageService, Message } from "primeng/api";
import { HttpClient } from '@angular/common/http';

import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  colorData: any;
  email:string;
  password:string;

  displayModal: boolean;
 
 registrationForm: FormGroup;
 
  msgs: Message[] = [];
  Registrationdata: any[];
  newregistrationdata: any[];
  
  constructor(private _userdata:OrganizationdataService,
              private http: HttpClient,
              private fb: FormBuilder,
              private messageService: MessageService){
    this.colorData = [{
      bgColor:'#ffffff',
      fgColor:'#000000'
    },{
      bgColor:'#c6ae71',
      fgColor:'#182618'
    },{
      bgColor:'#937427',
      fgColor:'#c7e0c7'
    },{
      bgColor:'#4c3e1d',
      fgColor:'#c7e0c7'
    },
  ]
  }
   ngOnInit() {
    this.getFormControls();
    this. getRegistration();
  }

  getFormControls() {
    this.registrationForm = this.fb.group({
      Id: [null],
      FirstName: new FormControl(null, [Validators.required]),
      LastName: new FormControl(null,[Validators.required]),
      UserName: new FormControl(null,[Validators.required]),
      PassWord: new FormControl(null,[Validators.required])
   
    });

    
  }
  showModalDialog() {
        this.displayModal = true;
        this.registrationForm.controls.FirstName.reset();
        this.registrationForm.controls.LastName.reset();
        this.registrationForm.controls.UserName.reset();
        this.registrationForm.controls.PassWord.reset();
    }
   

     closeRegmodal() {
         this.displayModal = false;
       }

     

  saveRegister(){
    
    if(this.registrationForm.value.FirstName === null){
    this.messageService.add({severity:'error', summary: 'Error Message', detail:'FirstName Is Required'});
    return;
  }
  else if(this.registrationForm.value.LastName === null){
    this.messageService.add({severity:'error', summary: 'Error Message', detail:'LastName Is Required'});
    return;
    }

    else if(this.registrationForm.value.UserName === null){
    this.messageService.add({severity:'error', summary: 'Error Message', detail:'UserName Is Required'});
    return;
    }
    else if(this.registrationForm.value.PassWord === null){
    this.messageService.add({severity:'error', summary: 'Error Message', detail:'Password Is Required'});
    return;
    }
    else {
          this.newregistrationdata = [];
          this.newregistrationdata.push(this.registrationForm.value);
          console.log('new',this.newregistrationdata);
           this.messageService.add({
          severity: 'success',
          summary: 'Success Message',
          detail: 'Added Sucessfully'
        });
        
        }
          this.displayModal = false;
  
}

 getRegistration(){
    this._userdata.getAllRegistrationInfo().subscribe(
      (data: any[]) => {
        this.Registrationdata = data;
        console.log('info',this.Registrationdata);
      }
    );

  }
  
  
  onLogOut(){
    this._userdata.logout();
  }
  isLoggedIn(){
    return this._userdata.isLoggedIn;
  }

  

  }



