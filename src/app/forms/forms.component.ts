import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  type: string;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // this.type = this.route.snapshot.params["type"];

    this.route.params.subscribe( (v) => {
      this.type = v["type"];
    })
  }

}
