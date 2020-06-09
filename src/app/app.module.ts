import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { routing } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { GrowlModule } from 'primeng/growl';
import { MessageService } from 'primeng/components/common/messageservice';
import {DialogModule} from 'primeng/dialog';
import { LoginComponent } from './login/login.component';
import { DefaultComponent } from './default/default.component';
import { EmployeedataComponent } from './employeedata/employeedata.component';
import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    LoginComponent,
    DefaultComponent,
    EmployeedataComponent,
    
   ],

  imports: [
    BrowserModule,
    routing,
    FormsModule,
    NgbModule,
    GrowlModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    DialogModule,
    AccordionModule,
    TableModule,
    ConfirmDialogModule
   ],

  providers: [MessageService,ConfirmationService],     //MessageService
  bootstrap: [AppComponent]
})
export class AppModule { }
