import { Component, OnInit } from '@angular/core';
import { OrganizationdataService } from '../organizationdata.service';
import { HttpClient } from '@angular/common/http';
import { ConfirmationService, MessageService, Message } from "primeng/api";

@Component({
  selector: 'app-employeedata',
  templateUrl: './employeedata.component.html',
  styleUrls: ['./employeedata.component.css']
})
export class EmployeedataComponent implements OnInit {
    cols: any[];
    rows = 10;
    employeedetails: any[];

  constructor(private http: HttpClient,
              private _data: OrganizationdataService,
               private confirmationService: ConfirmationService, 
               private messageService: MessageService
) { }

  ngOnInit() {
    this.getEmployeeInfo();
  }
  getEmployeeInfo(){
    this._data.getAllEmployeeInfo().subscribe(
      (data: any[]) => {
        this.employeedetails = data;
        console.log('empinfo',this.employeedetails);
      },
      error => {alert('error');}

    );

  }
  deleteEmpInfo(item, Id) {
    this.employeedetails.splice(Id, 1);
  }
  confirmDelete(item,Id: number) {
   
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteEmpInfo(item,Id);
        
      },
      reject: () => {
       
      }
    });
  }


}

