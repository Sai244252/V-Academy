import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//   title = 'V-Academy';
    compName:string ='home';
    Clicked(comp){
        this.compName = comp;
    }
    
}
