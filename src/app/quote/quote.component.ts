import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote:Quote[] = [
    new Quote(1, 'All you need is love. But a little chocolate now and then does not hurt', 'Charles M. Schulz','Mariam',1,5 ,new Date(2019,1,12)),
    new Quote(2,'Lord, grant that I might not so much seek to be loved as to love','Francis of Assisi','Joy',0,0,new Date (2017,3,14)),
    new Quote(3,"I like the night Without the dark, we'd never see the stars" ,'Ritu Ghatourey','Rose',3,1, new Date(2019,1,25)),
    new Quote(4,'From now on, ending a sentence with a preposition is something up with which I will not put','Winston Churchill','Sheila',0,6, new Date(2019,11,10) )
  ];

  get sortQuotes() {
    return this.quote.sort((a, b) => {
       return (b.quoteUpVote) as any  - (a.quoteUpVote) as any;
     });
    }

  toggleDetails(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      const toDelete = confirm('Are you sure you want to delete this quote?');

      if (toDelete) {
      this.quote.splice(index, 1);
      }
    }
  }

  upVoteQuote(isUpVoted, index) {
    if (isUpVoted) {
      this.quote[index].quoteUpVote ++;
    }
  }

  downVoteQuote(isDownVoted, index) {
    if (isDownVoted) {
      this.quote[index].quoteDownVote ++;
    }
  }

      addNewQuote(quote){
      let quoteLength = this.quote.length;
      quote.id = quoteLength+1;
      quote.dateCreated = new Date();
      this.quote.push(quote)
    }

  constructor() { }

  ngOnInit() {
  }

};
