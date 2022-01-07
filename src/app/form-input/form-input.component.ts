import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css'],
})
export class FormInputComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @ViewChild('f') inputForm!: NgForm;
  onSubmit() {
    console.log(this.inputForm.value);
  }
}
