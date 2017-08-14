import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnDestroy {
  private id: number;
  private subscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.params
      .subscribe(params=>this.id=params['id']);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
