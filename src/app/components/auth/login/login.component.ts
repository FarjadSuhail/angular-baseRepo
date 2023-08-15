import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonHelper } from '../../../../utilities/common.helper';
// import { encrypt } from '../../utilities/utilityFunctions';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public phide: boolean = true;
  public loginForm: FormGroup;
  loginPayload: { username: any; password: any; };
  loading: boolean;
  constructor(
    // private router: Router,
    private router: Router,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,) { }

  ngOnInit(): void {
    this.createForm();
  }

  public createForm() {
    this.loginForm = this.fb.group({
      email: [
        "",
        Validators.compose([
          Validators.required,
          Validators.maxLength(50),
        ]),
      ],
      password: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
        ]),
      ],
    });
  }
  public isControlHasError(
    controlName: string,
    validationType: string
  ): boolean {
    const control = this.loginForm.controls[controlName];
    if (!control) {
      return false;
    }
    const result =
      control.hasError(validationType) &&
      (control.dirty || control.touched);
    return result;
  }

  public markFormsTouched(form): void {
    CommonHelper.markFormGroupTouched(form);
  }

  public submitLogin(): void {
    this.markFormsTouched(this.loginForm);
    if (this.loginForm.valid) {
      this.loading = true;
      this.loginPayload = {
        username: this.loginForm.controls.email.value,
        password: this.loginForm.controls.password.value,
      };

      this.router.navigate(["dashboard"]);
      this.cdr.detectChanges();

      //mock service implementation for login
      //   this.loginService
      //     .authenticate(payload)
      //     .subscribe((response) => {
      //       if (response && response.token) {
      //         localStorage.setItem(
      //           environment.JWT,
      //           response.token
      //         );
      //         localStorage.setItem(
      //           "springProfileId",
      //           response.profileId
      //         );

      //         this.cdr.detectChanges();
      //         let data = encrypt(
      //           JSON.stringify(res.data)
      //         );
      //         this.loading = false;
      //         localStorage.setItem(
      //           "esp-profile-details",
      //           data
      //         );
      //         this.cdr.detectChanges();
      //         localStorage.removeItem("loginDetails");

      //         this.router.navigate(["dashboard"]);
      //         this.cdr.detectChanges();

      //       } else if (response.statusDescription) {
      //         console.log(
      //           "response",
      //           response.statusDescription
      //         );
      //         this.cdr.detectChanges();
      //       } else {
      //         this.cdr.detectChanges();
      //       }
      //     });
      // }
      // else {
      //   this.loading = false;
      //   this.cdr.detectChanges();
      // }

    } else {
      console.log('invalid form');
    }
  }

  public goToSignup() {
    this.router.navigate(["auth/register"])
  }

}
