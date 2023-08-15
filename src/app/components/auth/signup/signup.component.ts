import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonHelper } from '../../../../utilities/common.helper';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  public phide: boolean = true;
  registerPayload: any = []
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.createForm()
  }

  public createForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  public isControlHasError(
    controlName: string,
    validationType: string
  ): boolean {
    const control = this.registerForm.controls[controlName];
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

  public submit(): void {
    this.markFormsTouched(this.registerForm);
    if (this.registerForm.valid) {
      this.loading = true;
      this.registerPayload = {
        email: this.registerForm.controls.email.value,
        password: this.registerForm.controls.password.value,
        lastName: this.registerForm.controls.lastName.value,
        firstName: this.registerForm.controls.firstName.value,
      };

      this.router.navigate(["auth/login"]);
      this.cdr.detectChanges();

      //mock service implementation
      // this.sharedServices.signupUser(this.loginPayload, userDetails).subscribe(
      //   (res) => {
      //     if (res == null) {
      //       this.cdr.detectChanges();
      //     } else if (
      //       res.statusCode == HEC_CONSTANTS.HTTP_RESPONSE.OK
      //     ) {
      //
      //             this.router.navigate(["auth/login"]);
      //             this.cdr.detectChanges();
      //           } else if (response.statusDescription) {
      //             console.log(
      //               "response",
      //               response.statusDescription
      //             );
      //             this.cdr.detectChanges();
      //           } else {
      //             this.cdr.detectChanges();
      //           }
      //         });
      //     }
      //     else {
      //       this.loading = false;
      //       this.cdr.detectChanges();
      //     }
      //   },
      //   (err) => {
      //     this.loading = false;
      //     this.cdr.detectChanges();
      //   }
      // );
    }
  }

}
