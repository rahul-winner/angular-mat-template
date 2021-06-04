import { Component, Output, EventEmitter } from '@angular/core';
 
@Component({
  selector: 'kat-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent {
  @Output() sidenavClose = new EventEmitter();
 
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
 
}
