import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote:Quote[] = [
    new Quote(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son', new Date(2019,10,12)),
    new Quote(2,'Buy Cookies','I have to buy cookies for the parrot',new Date (2020,3,14)),
  ]

  toggleDetails(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }

  deleteQuote(isComplete,index){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].name}?`)

      if(toDelete){
      this.quote.splice(index,1);
    }
  }
}
  constructor() { }

  ngOnInit() {
  }

}
