import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  doLogin() {
    localStorage.setItem('token', '123');

    if (this.route.snapshot.queryParams['returnUrl']) {
      this.router.navigateByUrl(this.route.snapshot.queryParams['returnUrl']);
    } else {
      this.router.navigateByUrl('/');
    }
  }

}
