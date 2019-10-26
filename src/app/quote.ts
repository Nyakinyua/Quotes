//   export class Quote {
//         showQuotes: boolean;
    
//         constructor( public id:number,
//                      public name: string, 
//                      public QuoteText:string,
//                      public author:string,
//                      public quoteSubmitter:string, 
//                      public quoteUpVote:number=0, 
//                      public quotedownvote: number=0,
//                      public dateCreated:Date) {
       
//         this.showQuotes= false;
        
    
//         }
//     }
   export class Quote {
       showDescription:boolean;
       constructor(
      public id:number,
     public name:string,
      public description:string,
      public dateCreated:Date,){
          this.showDescription=false;
      }
   } 

