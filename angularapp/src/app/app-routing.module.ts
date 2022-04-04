import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateBankComponent } from './locker/Bank-Locker/create-bank/create-bank.component';
import { DetailsBankComponent } from './locker/Bank-Locker/details-bank/details-bank.component';
import { ListBankComponent } from './locker/Bank-Locker/list-bank/list-bank.component';
import { UpdateBankComponent } from './locker/Bank-Locker/update-bank/update-bank.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'signin',component:LoginComponent},
  {path:'admin-login',component:AdminComponent},
  {path:'home',component:HomepageComponent},
  {path: 'create-bank',component:CreateBankComponent},
  {path: 'bank-details/:id',component:DetailsBankComponent},
  {path: 'bank-list',component:ListBankComponent},
  {path: 'update-bank/:id',component:UpdateBankComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
