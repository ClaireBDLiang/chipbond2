import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      people: this.fb.array([
        this.fb.group({
          name: ['Will', [Validators.required, Validators.minLength(2)]],
          tel: ['0988-888-888', [Validators.pattern(/\d{4}-\d{3}-\d{3}/)]]
        }),
        this.fb.group({
          name: ['John', [Validators.required, Validators.minLength(2)]],
          tel: ['0944-444-444', [Validators.pattern(/\d{4}-\d{3}-\d{3}/)]]
        })
      ])
    });

  }

  resetForm() {
    this.form.reset({
      people: [
        {
          name: 'Will',
          tel: '0911-222-333'
        },
        {
          name: 'John',
          tel: '0922-444-333'
        }
      ]
    })
  }

  addPerson() {
    var arr = this.form.get('people') as FormArray;
    arr.push(this.fb.group({
      name: ['Default ' + (arr.length + 1), [Validators.required, Validators.minLength(2)]],
      tel: ['', [Validators.pattern(/\d{4}-\d{3}-\d{3}/)]]
    }));
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
