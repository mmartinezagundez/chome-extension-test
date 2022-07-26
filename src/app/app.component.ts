import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chome-extension-test';
  url = "";
  isBusy: boolean = false;

  ngOnInit(): void {
    
    
    
  }

  async getURL ()
  {
    
    console.log("click!");
    
    const tabs = await chrome.tabs.query({active: true, currentWindow: true});
    console.log(tabs[0].url);

    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id! },
      func: () => {
        console.log("updateBackgroundColor");
        document.body.style.backgroundColor = "#FF0000";
        
      },
      args: []
    });

    // if (tabs[0].url) {
    //   this.url = tabs[0].url;
    // }
    
    
  }

  
}

const updateBackgroundColor = () => { 
  console.log("updateBackgroundColor");
  
  document.body.style.backgroundColor = "#FF0000";
};