import { Quotes } from './../quotes';
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes=[
    new Quotes(1,'I am Worthy of my Wildest Dream','Insipirational Quote'),
    new Quotes(2,'Know Your Worth','Insipirational Quotes'),
    new Quotes (3, 'Your life is your Magic Wand','Insipirational Quote'),
    new Quotes(4,'Maybe you should eat some make up so that you should be pretty in the inside Too','Funny Quote'),
    new Quotes(5,'My Bestfriend is the one who brings the best in me','Friends Quote'),
    new Quotes (6,'No Frienship is an Accident','Friends Quote'),
    new Quotes(7,'Friendship is essentialy a partnership ','Friend Quote'),
    new Quotes(7,'A Happy Family is But an Earlier heaven','Family Quote'),
    new Quotes(8,'The Family is one of Natures masterpieces','Family Quote'),
    new Quotes(9,'Other Things may change us but family starts and End with us','Family Quote'),
    new Quotes(10,'I almost give a fuck scared the shit out of myself','Funny Quote'),
    new Quotes(11,'I am not lazy i am on Energy saving Mode','Funny Quote'),
     
  ]

  completeQuotes(isComplete,index){
    if (isComplete){
        this.quotes.splice(index,1);
        }
        }
  Details(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }





  constructor() { }

  ngOnInit() {}
  

}
