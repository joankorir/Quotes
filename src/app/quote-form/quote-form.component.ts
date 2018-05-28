import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuotes=new Quotes(0,"","",new Date());
  @Output() addQuote=new EventEmitter<Quote>();

    submitQuote(){
        this.addQuote.emit(this.newQuote);
    }

  constructor() { }

  ngOnInit() {
  }

}
