import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  formContact: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formContact = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      terms: [false, Validators.requiredTrue],
    });
  }

  ngOnInit(): void {}

  submitForm() {
    if (this.formContact.valid) {
      console.log(this.formContact.value);
    }
  }
}
