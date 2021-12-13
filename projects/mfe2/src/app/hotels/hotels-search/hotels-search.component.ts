import { HttpClient } from '@angular/common/http';
import {Component, ViewChild, ViewContainerRef, Inject, Injector, ComponentFactoryResolver, OnInit} from '@angular/core';
import { AuthLibService } from 'auth-lib';


@Component({
  selector: 'app-hotels-search',
  templateUrl: './hotels-search.component.html'
})
export class HotelsSearchComponent {

  constructor(private authLibService: AuthLibService) {
    this.authLibService.echo('HotelsSearchComponent');
  }
}
