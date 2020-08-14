import {Component, OnInit} from '@angular/core';
import { Service } from '../../services/service'
import { Router } from '@angular/router';

@Component({
  selector: 'customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.scss']
})
export class CustomerManagementComponent implements OnInit {
    constructor(
      private servers: Service,
      private router: Router,
    ){ }

    data: Array<any> = [];

  ngOnInit() {
    // http://dev.helloparkin.com:58090/api3/gy/order/getList
    this.servers.getLists({}).then(res=>{
      this.data = JSON.parse(res.text()).data;
      console.log(this.data)

    })
     
  }
  add() {
    console.log('add')
  }
  edit() {
    console.log('edit')
  }
  preview() {
    console.log('preview');
    this.router.navigate(['/customer-detail']);

  }
  delete() {
    console.log('delete')
  }
}
