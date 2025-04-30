import { LightningElement } from 'lwc';
import communityBaseUrl from '@salesforce/community/basePath';


export default class Navigation extends LightningElement {
    recordId = 'a0ONS000007lw692AA';   
    recordName = 'Aswin'; 
    portfolioLink = '';

    connectedCallback() {
        this.setPortfolioLink();  // Set the portfolio link when the component is loaded
    }
        // Construct the portfolio link with recordId and recordName
    setPortfolioLink() {
            this.portfolioLink = `${communityBaseUrl}/portfolio/${this.recordId}/${this.recordName}`;
    }
}