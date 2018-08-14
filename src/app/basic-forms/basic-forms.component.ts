import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-forms',
  templateUrl: './basic-forms.component.html',
  styleUrls: ['./basic-forms.component.css']
})
export class BasicFormsComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    })
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if(this.registerForm.invalid){
      return;
    }
    alert(`Success!!\n\n ${JSON.stringify(this.registerForm.value)}`);
  }

}
