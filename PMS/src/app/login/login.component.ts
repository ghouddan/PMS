import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/users/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  login : string ="";
  password : string = "";
  constructor(private userService: UserService, private router:Router){}

  _login():void{
    const user = this.userService.login(this.login, this.password);
    if (user){
      alert("User logged in");
      if (user.fonction == "CHP"){
        this.userService.currentUser = user;
        this.router.navigate(['/home']);
      }
      else if (user.fonction == "CHU"){
          this.router.navigate(['/fact/1']);
      }
      else{
        this.router.navigate(['atelier']);
      }
    }else{
      alert('Wrong username or password');
    }
    

  }
}
