import { Quotes } from './../quotes';
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes=[
    new Quotes(1,'Be in love with your life Every minute','Jack Kerouac','Tracy',new Date(1999,3,20)),
    new Quotes(2,'Know Your Worth','Hart Kevin','Ray',new Date(1999,4,12) ),
    new Quotes (3, 'Your life is your Magic Wand','Dalai Lama','Ronny',new Date(1999,7,12)),
    new Quotes(4,'My Bestfriend is the one who brings the best in me','Steve Martins','Qy',new Date(1999,8,19)),
    new Quotes (5,'No Frienship is an Accident','Milton Beele','Enill',new Date(1999,1,11)),
    new Quotes(6,'I almost give a fuck scared the shit out of myself','George Burns','Burn',new Date(1999,3,10)),
    new Quotes(7,'I am not lazy i am on Energy saving Mode','Thomas','Milli',new Date(1999,6,18)),

  ]

  DeleteQuotes(isComplete,index){
    if (isComplete){
      let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].quote}`)

    if (isComplete){
        this.quotes.splice(index,1);
        
        }
        }
      }


  Details( index){
    this.quotes[index].showQuote = !this.quotes[index].showQuote;
  }
  Upvote(i){
    this.quotes[i].Upvote +=1;
  }
  Downvote(i){
    this.quotes[i].Downvote -=1;
  }

  addNewQuote(quote){
    let quoteLength =this.quotes.length;
    quote.id =quoteLength+1;
    quote.DurationTime= new Date(quote.DurationTime)
    this.quotes.push(quote)
  }

  constructor() { }


  ngOnInit() { }
}
