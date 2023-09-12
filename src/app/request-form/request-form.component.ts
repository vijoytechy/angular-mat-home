import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Add this line
@Component({
  selector: 'app-request-form',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    ReactiveFormsModule,


  ],
  styleUrls: ['./request-form.component.scss'],
  template: `
<div class="container">
  <h2>Passport Information</h2>
  <form [formGroup]="form" (ngSubmit)="onSubmit()">
    <mat-form-field>
      <input matInput formControlName="name" placeholder="Full Name" required>
    </mat-form-field>

    <mat-form-field>
      <input matInput [matDatepicker]="picker" formControlName="dob" placeholder="Date of Birth" required>
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>

    <mat-form-field>
      <input matInput formControlName="passportNo" placeholder="Passport Number" required>
    </mat-form-field>

    <button mat-raised-button color="primary" type="submit">Submit</button>
  </form>
</div>

`,

})
export class RequestFormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      dob: [null, Validators.required],
      passportNo: ['', Validators.required],
    });
  }
  ngOnInit(): void {

  }

  onSubmit() {
    if (this.form.valid) {
      // Process the form data here (e.g., send it to a server)
      console.log(this.form.value);
    }
  }
}