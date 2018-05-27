import { Quotes } from './../quotes';
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes=[
    new Quotes(1,'Be in love with your life.Every minute','Jack Kerouac',34),
    new Quotes(2,'Know Your Worth','Hart Kevin',45),
    new Quotes (3, 'Your life is your Magic Wand','Dalai Lama',23),
    new Quotes(4,'My Bestfriend is the one who brings the best in me','Steve Martins',89),
    new Quotes (5,'No Frienship is an Accident','Milton Beele',98),
    new Quotes(6,'I almost give a fuck scared the shit out of myself','George Burns',19),
    new Quotes(7,'I am not lazy i am on Energy saving Mode','Thomas  Sowel',12),
     
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
    

  ngOnInit() { }
}
