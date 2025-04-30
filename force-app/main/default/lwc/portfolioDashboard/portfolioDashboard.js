import { LightningElement, wire } from 'lwc';
import getPortfolioData from '@salesforce/apex/PortfolioDashboardController.getPortfolioData';
import getSavingsBreakdown from '@salesforce/apex/PortfolioDashboardController.getSavingsBreakdown';
import getExpenditureBreakdown from '@salesforce/apex/PortfolioDashboardController.getExpenditureBreakdown';
import getIncomeBreakdown from '@salesforce/apex/PortfolioDashboardController.getIncomeBreakdown';


export default class PortfolioDashboard extends LightningElement {

    chartData = [];
    donutChartStyles = '';
    savingBarStyle = '';
    expenditureBarStyle = '';
    healthMessage = '';

    savingsChartData = [];
    savingChartStyle = '';

    savingsColors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#00A36C', '#F08080'];

    expenditureChartData = [];
    expenditureChartStyle = '';

    expenditureColors = ['#FFB6C1', '#FFD700', '#90EE90', '#20B2AA', '#9370DB', '#FFA07A'];
    
    incomeChartData = [];
    incomeChartStyle = '';


    // Fetch data from the Apex controller
    @wire(getPortfolioData)
    portfolioData({ error, data }) {
        if (data) {
            // Prepare data for the donut chart based on Apex class response
            this.chartData = [
                {
                    label: 'Income',
                    value: data.income,
                    color: '#FF6384'
                },
                {
                    label: 'Saving',
                    value: data.saving,
                    color: '#36A2EB'
                },
                {
                    label: 'Expenditure',
                    value: data.expenditure,
                    color: '#FFCE56'
                },
                {
                    label: 'Invested Amount',
                    value: data.investedAmount,
                    color: '#4BC0C0'
                }
            ];
            this.updateDonutChart();

            // Prepare health bar styles
            const total = data.saving + data.expenditure;
            const savingPercentage = total ? (data.saving / total) * 100 : 0;
            const expenditurePercentage = total ? (data.expenditure / total) * 100 : 0;

            this.savingBarStyle = `width: ${savingPercentage}%; background-color: green; height: 20px; display: inline-block;`;
            this.expenditureBarStyle = `width: ${expenditurePercentage}%; background-color: red; height: 20px; display: inline-block;`;

            // Health message logic
            if (data.saving >= data.expenditure) {
                this.healthMessage = 'Woohoo! Great — your portfolio looks healthy! 😄';
            } else {
                this.healthMessage = 'Hmm... time to review your expenses. Keep saving! 😟';
            }
        } else if (error) {
            console.error('Error fetching data', error);
        }
    }

    @wire(getSavingsBreakdown)
    savingsBreakdown({ error, data }) {
        if (data) {
            this.savingsChartData = data.map((item, index) => {
                return {
                    label: item.label,
                    percentage: Number(item.percentage).toFixed(2),
                    value: item.value,
                    color: this.savingsColors[index % this.savingsColors.length],
                    style: ''
                };
            });
            
    
            // Use existing percentages to build conic gradient
            let startAngle = 0;
            const gradients = this.savingsChartData.map(item => {
                const endAngle = startAngle + item.percentage * 3.6;
                const gradient = `${item.color} ${startAngle}deg ${endAngle}deg`;
                startAngle = endAngle;
                item.style = `background-color: ${item.color};`;
                return gradient;
            });
    
            this.savingChartStyle = `background: conic-gradient(${gradients.join(', ')})`;
        } else if (error) {
            console.error('Error fetching savings breakdown', error);
        }
    }
    

    @wire(getExpenditureBreakdown)
    expenditureBreakdown({ error, data }) {
        if (data) {
            this.expenditureChartData = data.map((item, index) => {
                return {
                    label: item.label,
                    percentage: Number(item.percentage).toFixed(2),
                    value: item.value,
                    color: this.expenditureColors[index % this.expenditureColors.length],
                    style: ''
                };
            });

            let startAngle = 0;
            const gradients = this.expenditureChartData.map(item => {
                const endAngle = startAngle + item.percentage * 3.6;
                const gradient = `${item.color} ${startAngle}deg ${endAngle}deg`;
                startAngle = endAngle;
                item.style = `background-color: ${item.color};`;
                return gradient;
            });

            this.expenditureChartStyle = `background: conic-gradient(${gradients.join(', ')})`;
        } else if (error) {
            console.error('Error fetching expenditure breakdown', error);
        }
    }

    @wire(getIncomeBreakdown)
incomeBreakdown({ error, data }) {
    if (data) {
        this.incomeChartData = data.map((item, index) => {
            return {
                label: item.label,
                percentage: Number(item.percentage).toFixed(2),
                value: item.value,
                color: this.savingsColors[index % this.savingsColors.length], // reuse colors
                style: ''
            };
        });

        let startAngle = 0;
        const gradients = this.incomeChartData.map(item => {
            const endAngle = startAngle + item.percentage * 3.6;
            const gradient = `${item.color} ${startAngle}deg ${endAngle}deg`;
            startAngle = endAngle;
            item.style = `background-color: ${item.color};`;
            return gradient;
        });

        this.incomeChartStyle = `background: conic-gradient(${gradients.join(', ')})`;
    } else if (error) {
        console.error('Error fetching income breakdown', error);
    }
}
    
    updateDonutChart() {
        const total = this.chartData.reduce((sum, data) => sum + data.value, 0);
        let startAngle = 0;
        const gradients = this.chartData.map(data => {
            const percentage = (data.value / total) * 100;
            const endAngle = startAngle + percentage * 3.6;
            const gradient = `${data.color} ${startAngle}deg ${endAngle}deg`;
            startAngle = endAngle;
            data.percentage = percentage.toFixed(2);
            data.style = `background-color: ${data.color};`;
            return gradient;
        });

        this.donutChartStyles = `background: conic-gradient(${gradients.join(', ')})`;
    }
}