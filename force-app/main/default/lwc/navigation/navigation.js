import { LightningElement } from 'lwc';
import communityBaseUrl from '@salesforce/community/basePath';


export default class Navigation extends LightningElement {
    recordId = 'a0ONS000007lw692AA';   
    recordName = 'Aswin Visveswar'; 
    portfolioLink = '';

    homePageUrl = `${communityBaseUrl}`;

        // Hardcoded API Name for Task object and filterName (you can adjust filter as needed)
        objectApiName = 'Task';  // Hardcoded object API name for Task
        filterName = 'all';  // You can dynamically change this based on conditions, or hardcode 'all', 'open', etc.
    

    taskLink = '';

    
    connectedCallback() {
        this.setPortfolioLink();  // Set the portfolio link when the component is loaded
        this.setTaskLink();  // Set the task link dynamically
    }
        // Construct the portfolio link with recordId and recordName
    setPortfolioLink() {
            this.portfolioLink = `${communityBaseUrl}/portfolio/${this.recordId}/${this.recordName}`;
    }

    // Construct the task link with hardcoded objectApiName and filterName
    setTaskLink() {
        this.taskLink = `${communityBaseUrl}/task/${this.objectApiName}/${this.filterName}`;
    }



}