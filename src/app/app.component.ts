import { Component } from '@angular/core';
import {Quotes} from './quotes'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes=[
    new Quotes(1,'I am Worthy of my Wildest Dream'),
    new Quotes(2,'Know Your Worth'),
    new Quotes (3, 'Your life is your Magic Wand'),
    new Quotes(4,'A friend is the one who knows you and loves you just the same'),
    new Quotes(5,'My Bestfriend is the one who brings the best in me'),
    new Quotes (6,'No Frienship is an Accident'),
    new Quotes(7,'Friendship is essentialy a partnership. ')
     
  ];

  constructor(){
    
    
  }
}
