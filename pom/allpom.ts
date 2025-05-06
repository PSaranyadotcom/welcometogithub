import { BrowserContext, Page } from "playwright";
import { BasePage } from "./Basepage";

export class AllPom{
    basepage:BasePage;
    constructor(page:Page, context:BrowserContext){
     this.basepage=new BasePage(page,context)
    }
}