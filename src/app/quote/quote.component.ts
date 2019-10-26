import { Component, OnInit, } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


  quotes: Quotes[] = [

    new Quotes(1, 'Humor', 'Women and cats will do as they please, and men and dogs should relax and get used to the idea', 'Robert A. Heinlein', 'Garrison Keillor', 0, 0, new Date(2013, 3, 3)),
    new Quotes(2, 'Humor', 'Anyone who thinks sitting in church can make you a Christian must also think that sitting in a garage can make you a car', 'Garrison Keillor', 'Nyakinyua', 0, 0, new Date(2011, 5, 2)),
    new Quotes(2, 'Creativity', 'To invent… is to choose', 'Henri Poincaré', 'Robert Frost', 0, 0, new Date(2012, 4, 1)),
    new Quotes(2, 'Creativity', 'To invent… is to choose', 'Henri Poincaré', 'Robert Frost', 0, 0, new Date(2016, 3, 1)),
    new Quotes(2, 'Creativity', 'To invent… is to choose', 'Henri Poincaré', 'Robert Frost', 0, 0, new Date(2015, 5, 2)),
    new Quotes(2, 'Creativity', 'To invent… is to choose', 'Henri Poincaré', 'Robert Frost', 0, 0, new Date(2014, 7, 3)),
    new Quotes(2, 'Creativity', 'To invent… is to choose', 'Henri Poincaré', 'Robert Frost', 0, 0, new Date(2016, 6, 6)),
    new Quotes(2, 'Creativity', 'To invent… is to choose', 'Henri Poincaré', 'Robert Frost', 0, 0, new Date(2017, 9, 9)),
    new Quotes(2, 'Creativity', 'To invent… is to choose', 'Henri Poincaré', 'Robert Frost', 0, 0, new Date(2019, 10, 8)),

  ];

  toggleDetails(index) {
    this.quotes[index].showQuotes = !this.quotes[index].showQuotes;
  }

  deleteQuotes(isComplete, index) {
    if (isComplete) {
      const toDelete = confirm('Are you sure you want to delete this goal?');

      if (toDelete) {
      this.quotes.splice(index, 1);
      }
    }
  }
  upvoteQuote(isUpVoted, index) {
    if (isUpVoted) {
      this.quotes[index].quoteUpVote ++;
    }
  }
  downvoteQuote(isDownVoted, index) {
    if (isDownVoted) {
      this.quotes[index].quotedownvote ++;
    }
  }
  addNewQuote(quote) {
    const quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.dateCreated = new Date();
    this.quotes.push(quote);
  }
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return (b.quoteUpVote) as any  - (a.quoteUpVote) as any;
    });
  }
  constructor() { }

  ngOnInit() {
  }

}
