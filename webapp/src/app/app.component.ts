import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { ISubscription } from 'rxjs/Subscription';
import { error } from 'util';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  private data: Product[];
  private syncData: ISubscription;

  constructor(private appService: AppService){

  }

  ngOnInit() {
    this.load();
  }
 
  load(){
    let self = this;

    this.syncData = this.appService.get()
        .subscribe(res => {
          self.data = res;
        },
        error => {
          console.log(error)
        })
  }

}
