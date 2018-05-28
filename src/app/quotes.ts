//import { Timeouts } from "../../Quotes/node_modules/@types/selenium-webdriver";////

export class Quotes {
    public  showDescription:Boolean;
    public Upvote:number;
    public Downvote:number;

    constructor(public id:Number, public Quote:string, public Author:string,public submitter:string,public DurationTime:Date){
        this.showDescription=false
        this.Upvote =0;
        this.Downvote=0;
    }
}
