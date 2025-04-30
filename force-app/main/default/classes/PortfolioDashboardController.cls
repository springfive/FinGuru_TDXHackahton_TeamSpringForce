// File: PortfolioDashboardController.cls
public without sharing class PortfolioDashboardController {
    @AuraEnabled(cacheable=true)
    public static PortfolioDashboardData getPortfolioData() {
        // Assuming we are fetching the first record for now
        Portfolio__c portfolio = [
            SELECT Income__c, Saving__c, Expenditure__c, Invested_Amount__c, Advisor__c, Advisor__r.Name
            FROM Portfolio__c
            LIMIT 1
        ];

        return new PortfolioDashboardData(
            portfolio.Income__c,
            portfolio.Saving__c,
            portfolio.Expenditure__c,
            portfolio.Invested_Amount__c,
            portfolio.Advisor__r.Name
        );
    }
    
        @AuraEnabled(cacheable=true)
    public static List<ChartSegment> getSavingsBreakdown() {
        List<AggregateResult> groupedResults = [
            SELECT Sub_Type__c subType, SUM(Amount__c) totalAmount
            FROM Financial_Logs__c
            WHERE Type__c = 'Saving'
            GROUP BY Sub_Type__c
        ];

        Decimal total = 0;
        for (AggregateResult ar : groupedResults) {
            total += (Decimal)ar.get('totalAmount');
        }

        List<ChartSegment> segments = new List<ChartSegment>();
        for (AggregateResult ar : groupedResults) {
            Decimal value = (Decimal)ar.get('totalAmount');
            Decimal percentage = total > 0 ? (value / total) * 100 : 0;
            segments.add(new ChartSegment(
                (String)ar.get('subType'),
                value,
                percentage
            ));
        }
        return segments;
    }
    
    @AuraEnabled(cacheable=true)
public static List<ChartSegment> getExpenditureBreakdown() {
    List<AggregateResult> groupedResults = [
        SELECT Sub_Type__c subType, SUM(Amount__c) totalAmount
        FROM Financial_Logs__c
        WHERE Type__c = 'Expenditure'
        GROUP BY Sub_Type__c
    ];

    Decimal total = 0;
    for (AggregateResult ar : groupedResults) {
        total += (Decimal)ar.get('totalAmount');
    }

    List<ChartSegment> segments = new List<ChartSegment>();
    for (AggregateResult ar : groupedResults) {
        Decimal value = (Decimal)ar.get('totalAmount');
        Decimal percentage = total > 0 ? (value / total) * 100 : 0;
        segments.add(new ChartSegment(
            (String)ar.get('subType'),
            value,
            percentage
        ));
    }
    return segments;
}
    
    @AuraEnabled(cacheable=true)
public static List<ChartSegment> getIncomeBreakdown() {
    List<AggregateResult> groupedResults = [
        SELECT Sub_Type__c subType, SUM(Amount__c) totalAmount
        FROM Financial_Logs__c
        WHERE Type__c = 'Income' 
        GROUP BY Sub_Type__c
    ];

    Decimal total = 0;
    for (AggregateResult ar : groupedResults) {
        total += (Decimal)ar.get('totalAmount');
    }

    List<ChartSegment> segments = new List<ChartSegment>();
    for (AggregateResult ar : groupedResults) {
        Decimal value = (Decimal)ar.get('totalAmount');
        Decimal percentage = total > 0 ? (value / total) * 100 : 0;
        segments.add(new ChartSegment(
            (String)ar.get('subType'),
            value,
            percentage
        ));
    }
    return segments;
}



    public class PortfolioDashboardData {
        @AuraEnabled public Decimal income { get; set; }
        @AuraEnabled public Decimal saving { get; set; }
        @AuraEnabled public Decimal expenditure { get; set; }
        @AuraEnabled public Decimal investedAmount { get; set; }
        @AuraEnabled public String advisorName { get; set; }

        public PortfolioDashboardData(Decimal income, Decimal saving, Decimal expenditure, Decimal investedAmount, String advisorName) {
            this.income = income;
            this.saving = saving;
            this.expenditure = expenditure;
            this.investedAmount = investedAmount;
            this.advisorName = advisorName;
        }
    }
        public class ChartSegment {
        @AuraEnabled public String label { get; set; }
        @AuraEnabled public Decimal value { get; set; }
        @AuraEnabled public Decimal percentage { get; set; }

        public ChartSegment(String label, Decimal value, Decimal percentage) {
            this.label = label;
            this.value = value;
            this.percentage = percentage;
        }
    }
}