import { Timeouts } from "../../Quotes/node_modules/@types/selenium-webdriver";

export class Quotes {
    public  showDescription:Boolean;

    constructor(public id:Number, public name:string, public Person:string,public Votes:Number,public DurationTime:Date){
        this.showDescription=false
    }
}
