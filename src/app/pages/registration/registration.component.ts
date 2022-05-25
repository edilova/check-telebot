import { Component, OnInit } from '@angular/core';
import { AppService } from "../../app.services";
import { Profile } from "../../interfaces/Profile";
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  formErrors = {
    'telephone': ''
  };
  validationMessages = {
    'telephone': {
      'required': 'Phone is required',
      'emailDomain': 'Phone domain should be +7 777 123 45 67'
    }
  }

  profile: Profile[] = [];
  language: string | undefined;
  name: string | undefined;
  telephone: string | undefined;

  constructor(
    private appService: AppService,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      chart_id: ['1'],
      username: [''],
      name: ['', [Validators.required]],
      telephone: ['', [Validators.required]],
      language_code: ['', [Validators.required]],
      limit: ['',],
      reg_date: [''],
      is_banned: [''],
    })
    this.registrationForm.valueChanges.subscribe((data)=> {
      this.phoneValidationErrors(this.registrationForm);
    })
  }

  phoneValidationErrors(group: FormGroup = this.registrationForm):void {
    Object.keys(group.controls).forEach((key: string)=>{
      const abstractControl = group.get(key);

      if (abstractControl instanceof FormGroup) {
        this.phoneValidationErrors(abstractControl);
      } else {
        // @ts-ignore
        this.formErrors[key] = '';
        if ( abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)){
          // @ts-ignore
          const messages = this.validationMessages[key];
          for (const errorkey in abstractControl.errors) {
            // @ts-ignore
            this.formErrors[key] += messages[errorkey]
          }
        }
      }
    })
  }

  submit(registrationForm: any) {
    console.log('registrationForm', registrationForm);
    this.appService.registration(registrationForm).subscribe(()=>{
      console.warn();
    });
  }
}
