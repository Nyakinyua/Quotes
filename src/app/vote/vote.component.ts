import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {



  @Input() quote: Quote;
  @Output() isUpVoted = new EventEmitter<boolean>();
  @Output() isDownVoted = new EventEmitter<boolean>();

  quoteUpVote(upvote: boolean) {
    this.isUpVoted.emit(upvote);
  }

  quoteDownVote(downvote: boolean) {
    this.isDownVoted.emit(downvote);
  }

  
  constructor() { }

  ngOnInit() {
  }

}
