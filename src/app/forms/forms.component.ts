import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  type: string;

  data: any = {
    name: 'Will',
    habbit: []
  };

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  doSubmit(form: NgForm) {
    console.log(form.value);
    if (form.invalid) {
      alert('表單因為還有問題，所以尚未送出！');
    }
    // TODO: Submit form!
  }

  ngOnInit() {
    // this.type = this.route.snapshot.params["type"];

    this.route.params.subscribe( (v) => {
      this.type = v["type"];
    })
  }

}
