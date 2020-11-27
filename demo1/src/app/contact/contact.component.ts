import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

interface User {
  mail: string;
  password: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  model: User;
  form: FormGroup;
  emailValidators = [Validators.required, Validators.pattern(/^a.*@.*\.vn$/), Validators.minLength(7)];

  constructor(private router: Router, private location: Location, private fb: FormBuilder) {
    this.form = fb.group({ // new FormGroup
      email: ['username', this.emailValidators], // new FormControl
      password: ['password', [Validators.required]],
      tags: fb.array([
        fb.control('a', [Validators.minLength(3)]), // add them
        fb.control('b', [Validators.minLength(3)]),
        fb.control('c', [Validators.minLength(3)]),
      ])
    });

    // formGroup => 2 email, password
  }

  ngOnInit() {
  }

  navigateToUser() {
    // ??
    this.router.navigateByUrl('/user');
  }

  goBack() {
    this.location.back();
  }

  onSubmit() {
    console.log(this.form);
  }

  onClick() {
    (this.form.controls.tags as FormArray).push(this.fb.control('', [Validators.minLength(3)]));
  }

}
