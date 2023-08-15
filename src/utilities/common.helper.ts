// import * as moment from 'moment';


export class CommonHelper {

  constructor() { }

  /*
   Mark from controls state is touched
   @param: formGroup: FormGroup | NgForm
*/
  static markFormGroupTouched = (formGroup) => {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        CommonHelper.markFormGroupTouched(control);
      }
    });
  };
}
