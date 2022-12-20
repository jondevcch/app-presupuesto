import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sideNavList',
  templateUrl: './sideNavList.component.html',
  styleUrls: ['./sideNavList.component.css']
})
export class SideNavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
}