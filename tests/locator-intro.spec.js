import { test } from "@playwright/test";

test("Simple google test", async({page}) => {
    //test codes
    await page.goto("https://www.google.com");
    await page.waitForTimeout(3000);

    let searchBox = page.locator("//textarea[@class='gLFyf']");

    await searchBox.type("Cydeo");
    //await searchBox.fill("Cydeo");

    await page.waitForTimeout(3000);

    await searchBox.press("Enter");
    
    await page.waitForTimeout(3000);


});
/*
<textarea class="gLFyf" aria-controls="Alh6id" aria-owns="Alh6id" autofocus="" title="Search" 
value="" aria-label="Search" placeholder="" aria-autocomplete="both" aria-expanded="false" 
aria-haspopup="false" autocapitalize="off" autocomplete="off" autocorrect="off" id="APjFqb" 
maxlength="2048" name="q" role="combobox" rows="1" spellcheck="false" jsaction="paste:puy29d" 
data-ved="0ahUKEwihm63-ia2MAxWYIjQIHTJlBPcQ39UDCAY"></textarea>
*/
//

//textarea[@class='gLFyf']
