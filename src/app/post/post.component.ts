import { Component ,Input ,EventEmitter , Output, OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges,DoCheck,AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit {

  @Input("img") postImg=""
  @Output() imgSelected = new EventEmitter<string>()

  constructor() { 
    console.log ( "constructor" )
  }

  ngOnInit() {
    console.log ( "ngOnInit" )
  }
  ngOnChanges() {
    console.log ( "ngOnChanges" )
  }
  ngDoCheck() {
    console.log ( "ngDoCheck" )
  }
  ngAfterContentChecked() {
    console.log ( "ngAfterContentChecked" )
  }
  ngAfterContentInit() {
    console.log ( "ngAfterContentInit" )
  }
  ngAfterViewChecked() {
    console.log ( "ngAfterViewChecked" )
  }
  ngAfterViewInit() {
    console.log ( "ngAfterViewInit" )
  }
  ngOnDestroy() {
    console.log ( "ngOnDestroy" )
  }
  
}

