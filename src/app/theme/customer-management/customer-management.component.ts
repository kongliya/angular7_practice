import {Component, OnInit} from '@angular/core';
import { Service } from '../../services/service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.scss']
})
export class CustomerManagementComponent implements OnInit {
    constructor(
      private servers: Service,
    ){
   }

  ngOnInit() {
    // http://dev.helloparkin.com:58090/api3/gy/order/getList
    this.servers.getLists().then(res=>{
      console.log(res,"请求到的数据")
    })
     
    //  HttpClient.get('/api/******', res => {
     
    //    console.log('data', res);
    //  }, httpOptions.headers.append('Authorization', this.token));
  }

}
