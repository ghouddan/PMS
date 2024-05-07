import { Injectable } from '@angular/core';
import { UserData } from '../../shared/models/Users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: UserData[] = [
    {
      id: 1,
      nom: 'mohammed',
      prenom: 'ghouddan',
      fonction: 'CHP',
      email: 'exemple@example.com',
      tele: '123456749',
      age: 30,
      dateDebut: new Date('2020-01-01'),
      salaire: 50000,
      photo: 'john-doe.jpg',
      password: 'password123' 
    },
    {
      id: 2,
      nom: 'aymane',
      prenom: 'John',
      fonction: 'CHU',
      email: 'exemple01@example.com',
      tele: '123456782',
      age: 30,
      dateDebut: new Date('2020-01-01'),
      salaire: 50000,
      photo: 'john-doe.jpg',
      password: 'password12345' 
    },
    {
      id: 3,
      nom: 'aymane',
      prenom: 'John',
      fonction: 'CHA',
      email: 'exemple02@example.com',
      tele: '123456789',
      age: 30,
      dateDebut: new Date('2020-01-01'),
      salaire: 50000,
      photo: 'john-doe.jpg',
      password: 'password098' 
    },
  ];

  currentUser: UserData | null = null;

  constructor() { 
   
  }
  login(login: string, password: string): UserData | undefined {
    // Find user with matching login (email or username)
    const user = this.users.find(user => user.email === login || user.tele === login);
    // Check if user exists and password is correct
    if (user && user.password === password) {
      this.currentUser = user;
      return user; // Return user if authentication is successful
    }
    return undefined; // Return undefined if authentication fails
  }

  getUserById(id: number): UserData | undefined {
    return this.users.find(user => user.id === id);
  }

 
}
