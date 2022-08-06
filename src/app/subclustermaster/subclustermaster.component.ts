import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subclustermaster',
  templateUrl: './subclustermaster.component.html',
  styleUrls: ['./subclustermaster.component.css']
})
export class SubclustermasterComponent implements OnInit {
  value_edit:boolean=false;
  employeename:any;
  designation:any;
  role:any;
  location:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
