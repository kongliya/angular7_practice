import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  detail: Object;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.detail = params;
      console.log(this.detail)
    });
  }

}
