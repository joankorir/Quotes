//import { Timeouts } from "../../Quotes/node_modules/@types/selenium-webdriver";////

export class Quotes {
    public showQuote:Boolean;
    public Upvote:number;
    public Downvote:number;

    constructor(public id:Number, public quote:string, public author:string,public publisher:string,public DurationTime:Date){
        this.showQuote=false;
        this.Upvote =0;
        this.Downvote=0;
    }
}
