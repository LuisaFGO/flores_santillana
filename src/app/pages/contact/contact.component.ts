import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from 'src/app/services/form.service';
import { MessageWspComponent } from '../../shared/message-wsp/message-wsp.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { NgIf } from '@angular/common';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
    standalone: true,
    imports: [
        NavbarComponent,
        NgIf,
        ReactiveFormsModule,
        FooterComponent,
        MessageWspComponent,
    ],
})
export class ContactComponent implements OnInit {
  formContact: FormGroup;
  public successMessage: string = '';
  public errorMessage: string = '';

  logo = 'assets/logos/logo_negro.png';

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {
    this.formContact = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      terms: [false, Validators.requiredTrue],
    });
  }

  ngOnInit(): void {}

  clearMessageAfterTimeout(
    messageVariable: 'successMessage' | 'errorMessage',
    timeout: number
  ) {
    setTimeout(() => {
      if (messageVariable === 'successMessage') {
        this.successMessage = '';
      } else if (messageVariable === 'errorMessage') {
        this.errorMessage = '';
      }
    }, timeout);
  }

  submitForm() {
    if (this.formContact.valid) {
      this.apiService.submitForm(this.formContact.value).subscribe({
        next: (response) => {
          this.successMessage = response;
          this.clearMessageAfterTimeout('successMessage', 4000);
          this.formContact.reset();
        },
        error: (error) => {
          this.errorMessage = 'Error sending email. Please try again later.';
          this.clearMessageAfterTimeout('successMessage', 4000);
        },
      });
    }
  }
}
