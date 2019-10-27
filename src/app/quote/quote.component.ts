import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote:Quote[] = [
    new Quote(1, 'All you need is love. But a little chocolate now and then does not hurt', 'Charles M. Schulz','new','one',0,0 ,new Date(2019,10,12)),
    new Quote(2,'Lord, grant that I might not so much seek to be loved as to love','Francis of Assisi','me', 'you',0,0,new Date (2017,3,14)),
    new Quote(3,"I like the night Without the dark, we'd never see the stars" ,'Ritu Ghatourey','Rose','stomp',0,0, new Date(2019,10,25)),
    new Quote(4,'From now on, ending a sentence with a preposition is something up with which I will not put','Winston Churchill','Sheila','Alicia',0,0, new Date(2019,12,10) )
  ];

   

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

  upvoteQuote(isUpVoted, index) {
    if (isUpVoted) {
      this.quote[index].quoteUpVote ++;
    }
  }

  downvoteQuote(isDownVoted, index) {
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

    // get sortQuotes() {
    //   return this.quote.sort((a, b) => {
    //     return (b.quoteUpVote) as any  - (a.quoteUpVote) as any;
    //   })
  constructor() { }

  ngOnInit() {
  }

};
