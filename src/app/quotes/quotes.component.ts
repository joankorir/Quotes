import { Quotes } from './../quotes';
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes=[
    new Quotes(1,'Be in love with your life.Every minute','Jack Kerouac',34new Date(1999,3,20)),
    new Quotes(2,'Know Your Worth','Hart Kevin',4new Date(1999,4,12)),
    new Quotes (3, 'Your life is your Magic Wand','Dalai Lama',23new Date(1999,7,12)),
    new Quotes(4,'My Bestfriend is the one who brings the best in me','Steve Martins',89new Date(1999,8,19)),
    new Quotes (5,'No Frienship is an Accident','Milton Beele',98new Date(1999,1,11)),
    new Quotes(6,'I almost give a fuck scared the shit out of myself','George Burns',19new Date(1999,3,10)),
    new Quotes(7,'I am not lazy i am on Energy saving Mode','Thomas  Sowel',12new Date(1999,6,18)),

  ]

  DeleteQuotes(isComplete,index){
    if (isComplete){
      let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

    if (isComplete){
        this.quotes.splice(index,1);
        }
        }
      }
      ddNewQuote(goal){
        let quoteLength = this.quote.length;
        quote.id=goalLength+1;
        quote.completeDate = new Date(quote).completeDate)
        this.quotes.push(quote)



  Details(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }





  constructor() { }


  ngOnInit() { }
}
