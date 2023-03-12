import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url =
    'https://userinfo-e29d7-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(private http: HttpClient) {}

  createUser(user: User) {
    return this.http.post<User>(this.url + 'users.json', user);
  }

  getUsers() {
    return this.http.get<User[]>(this.url + 'users.json').pipe(
      map((dt) => {
        let users: User[] = [];
        for (let user in dt) {
          users.push({ ...dt[user], id: user });
        }
        return users;
      })
    );
  }

  deleteUser(id: String) {
    return this.http.delete(this.url + 'users/' + id + '.json');
  }
  deleteAllUser() {
    return this.http.delete(this.url + 'users' + '.json');
  }
}
