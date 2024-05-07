import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { UserService } from '../services/users/user.service';
import { RouterLink, Router, NavigationEnd,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  
  constructor(private route : ActivatedRoute, private userServie : UserService, private router: Router){}

  
  getUserName(): string {
    // Retrieve user details from service and return name
    return this.userServie.currentUser ? this.userServie.currentUser.nom : '';
  };
  getProfition(): string{
    return this.userServie.currentUser ? this.userServie.currentUser.fonction : '';
  }
  logout():void{
    
  }
  choix: { [key: string]: string } = {
    "home": "line",
    "fact": "line",
    "atelier": "line",
    "machine": "line"
    };
    currentUrl : string = 'home';
    finalComponent: string = 'home';
  
    ngOnInit() {
      this.currentUrl = this.router.url;
      // url i got: /usines
  
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.currentUrl = event.urlAfterRedirects || '/';
          this.currentComponent();
        }
      });
  
      this.currentComponent();
      this.choix[this.finalComponent] = "line selected";
    }
  
    currentComponent() {
      if(this.currentUrl === '/'){
        this.finalComponent = "home";
      }
      else{  
  
        let index = this.currentUrl.indexOf('/');
        let component = this.currentUrl.slice(1);
        
        let secondSlashIndex = component.indexOf('/', index + 1);
        if (secondSlashIndex > 0) {
          component = component.slice(0, secondSlashIndex);
        }
      
        this.finalComponent = component;
      }
    }
}
