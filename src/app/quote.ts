  export class Quote {
        showDescription: boolean;

        constructor( public id:number,
                     public name: string, 
                     public QuoteText:string,
                     public author:string,
                     public quoteSubmitter:string, 
                     public upVote: number=0,
                     public downVote: number=0,

                     public dateCreated:Date) {

        this.showDescription= false;


        }
    }
// export class Quote {
//     showDescription: boolean;
//     constructor(
//         public id: number,
//         public name: string,
//         public description: string,
//         public dateCreated: Date, ) {
//         this.showDescription = false;
//     }
// }

