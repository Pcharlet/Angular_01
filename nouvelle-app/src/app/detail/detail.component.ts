import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  alea = Math.random();

  @Input() nomPersonne;


  constructor() {}
  ngOnInit() {}

}
