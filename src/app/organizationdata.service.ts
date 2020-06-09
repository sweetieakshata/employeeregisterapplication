import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrganizationdataService {
  redirectURL: any;
  currentUser: { user_email: string; password: string; isAdmin: boolean; };
  _router: any;

  constructor(private http:HttpClient) { }

 url1:string="assets/JsonFiles/Registration.json";
url2:string='assets/JsonFiles/empdetails.json';

getAllRegistrationInfo() {
    return this.http.get(this.url1);
  }
  getAllEmployeeInfo(){
    return this.http.get(this.url2);
  }
 
 login(user_email: string, user_password: string) {
  if (user_email == "akshata@gmail.com" && user_password == "1234") {
    this.currentUser = {
      user_email: user_email,
      password: user_password,
      isAdmin: true
    };
    return;
  }
  this.currentUser = {
    user_email: user_email,
    password: user_password,
    isAdmin: false
  };
}
logout() {
  this.currentUser = null;
  this.redirectURL = "";
  this._router.navigate(["/home"]);
}
get isLoggedIn(): boolean {
  return !!this.currentUser;
}


}

