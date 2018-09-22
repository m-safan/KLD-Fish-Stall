import { Component, OnInit } from '@angular/core';
import { SharedModelService } from '../shared-model.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  _sharedModel: SharedModelService;
  isExpanded = false;

  constructor(sharedModel: SharedModelService) {
    this._sharedModel = sharedModel;
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit(): void {
  }
}
