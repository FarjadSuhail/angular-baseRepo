import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login/services/login.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';


const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        // canActivate: [LoginGuard],
        component: LoginComponent,
      },
      {
        path: 'register',
        // canActivate: [LoginGuard],
        component: SignupComponent,
        data: { animation: 'isRight' }
      },
    ]
  }
];


@NgModule({
  declarations: [AuthComponent, SignupComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    // RouterModule,
    MatCardModule,
    MatMenuModule,
    MatSidenavModule,
    MatButtonModule,
    // MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild(routes),

  ],
  providers: [
    LoginService,
  ],
})
export class AuthModule { }
