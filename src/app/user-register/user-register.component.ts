import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { UserService } from '../services/user.service';
@Component({
  selector: 'user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  error: string = '';
  model: any = {};

  constructor(private router: Router, private service: UserService) {}

  ngOnInit(): void {}

  saveUser(form: NgForm) {
    const user = {
      id: '1',
      name: this.model.name,
      email: this.model.email,
      phone: this.model.phone,
      password: this.model.password,
      photo: this.model.photo,
    };

    if (form.valid) {
      this.service.createUser(user).subscribe((data) => {
        alert('Kullanıcı Oluşturuldu');
        this.router.navigate(['/']);
      });
    } else {
      this.error = 'Formu kontrol ediniz !';
    }
  }
}
