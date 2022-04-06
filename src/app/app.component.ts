import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'omer omeroglu';
  imgURL = "https://picsum.photos/200"
  images = [
    "https://picsum.photos/200",
    "https://picsum.photos/201",
    "https://picsum.photos/202"
  ]
  currentDate = new Date()
  cost = 2000
  temprature = 25.3
  blueClass = false
  fontSize = 16


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
