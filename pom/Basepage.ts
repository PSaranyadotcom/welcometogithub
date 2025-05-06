import {BrowserContext, Page} from "@playwright/test"
import { join } from "path";

export class BasePage{
    context: BrowserContext;
    page: Page;

constructor(page: Page, context: BrowserContext){
this.context=context;
this.page=page;
}

public async screenshot(name: string){
 return await this.page.screenshot({ path: join("screenshots", name+".png")})
}

public async selector(name: string){
    return await this.page.waitForSelector(name, {timeout:5000})
}

public async reload(){
    await this.page.reload();
}

public async istextvisisble(text: string){
    return await this.page.getByText(text).isVisible()
}
}