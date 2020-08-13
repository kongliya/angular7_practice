import {Component, OnInit} from '@angular/core';
import { Service } from '../../services/service'

@Component({
  selector: 'customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.scss']
})
export class CustomerManagementComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    console.log(Service)
  }

}
