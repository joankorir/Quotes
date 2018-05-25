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
    new Quotes(4,'Maybe you should eat some make up so that you should be pretty in the inside Too'),
    new Quotes(5,'My Bestfriend is the one who brings the best in me'),
    new Quotes (6,'No Frienship is an Accident'),
    new Quotes(7,'Friendship is essentialy a partnership '),
    new Quotes(7,'A Happy Family is But an Earlier heaven'),
    new Quotes(8,'The Family is one of Natures masterpieces'),
    new Quotes(9,'Other Things may change us but family starts and End with us'),
    new Quotes(10,'I almost give a fuck scared the shit out of myself'),
    new Quotes(11,'I am not lazy i am on Energy saving Mode')
     
  ];

  constructor(){
    
    
  }
}
