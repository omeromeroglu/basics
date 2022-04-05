import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Luis';
  imgURL = "https://picsum.photos/200"
  


  getName() {
    return this.name;
  }

  changeImage(e : KeyboardEvent) {
    this.imgURL = (e.target as HTMLInputElement).value

  }

  logImg(event : string) {
    console.log(event)
  }

}
