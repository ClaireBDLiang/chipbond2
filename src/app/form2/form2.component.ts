import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      name: ['Will', [Validators.required, Validators.minLength(2)]],
      tel: ['0988-888-888', [Validators.pattern(/\d{4}-\d{3}-\d{3}/)]]
    });

  }

  doSubmit() {
    console.log(this.form.value);
    if (this.form.invalid) {
      alert('表單因為還有問題，所以尚未送出！');
    }
    // TODO: Submit form!
  }

  ngOnInit() {
  }

}
