export class Quotes {
    showQuotes: boolean;

    constructor( public id:number,
                 public name: string, 
                 public QuoteText:string,
                 public author:string,
                 public quoteSubmitter:string, 
                 public quoteUpVote:number=0, 
                 public quotedownvote: number=0,
                 public dateCreated:Date) {
   
    this.showQuotes= false;
    

    }
}
