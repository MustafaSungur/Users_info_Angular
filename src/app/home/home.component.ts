import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  loading: boolean = true;
  users: User[] = [];

  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.service.getUsers().subscribe((data) => {
      this.users = data;
      this.loading = false;
    });
  }

  deleteUser(id: string) {
    let cnf = confirm('Kullanıcı Silinsin mi ?');
    if (cnf) {
      this.service.deleteUser(id).subscribe((dt) => console.log(dt));
      alert('Kullanıcı Silindi');
      window.location.reload();
    } else {
      return;
    }
  }
  deleteAll() {
    let cnf = confirm('TÜM KULLANICILAR SİLİNECEK !');
    if (cnf) {
      this.service.deleteAllUser().subscribe((dt) => console.log(dt));
      alert('TÜM KULLANICILAR SİLİNDİ');
      window.location.reload();
    } else {
      return;
    }
  }
}
