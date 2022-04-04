import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from'@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CreateBankComponent } from './locker/Bank-Locker/create-bank/create-bank.component';
import { DetailsBankComponent } from './locker/Bank-Locker/details-bank/details-bank.component';
import { ListBankComponent } from './locker/Bank-Locker/list-bank/list-bank.component';
import { UpdateBankComponent } from './locker/Bank-Locker/update-bank/update-bank.component';
import { CreateEmployeeComponent } from './locker/credential/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './locker/credential/employee-details/employee-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    HomepageComponent,
    CreateBankComponent,
    DetailsBankComponent,
    ListBankComponent,
    UpdateBankComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    // LoginComponent,
    // RegisterComponent,
    // AdminComponent,
    // AdminloginComponent,
    // HomepageComponent,
    // BankLockerComponent,
    // CreateBankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// rm -rf node_modules