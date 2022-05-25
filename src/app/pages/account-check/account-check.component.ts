import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-account-check',
  templateUrl: './account-check.component.html',
  styleUrls: ['./account-check.component.css']
})
export class AccountCheckComponent implements OnInit {
  showExample: boolean = false;
  linkForm: FormGroup;
  formErrors = {
    'url': ''
  };
  validationMessages = {
    'url': {
      'required': 'Link is required',
      'wrong': 'Link is incorrect'
    }
  }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    const urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    this.linkForm = this.fb.group({
      url: ['', [Validators.required, Validators.pattern(urlRegex)]]
    })
  }

}
