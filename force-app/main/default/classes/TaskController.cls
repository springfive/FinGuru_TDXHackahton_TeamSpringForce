public with sharing class TaskController {
    @AuraEnabled(cacheable=true)
    public static List<Task> getAllTasks() {
         return [SELECT Id, Subject, Description, ActivityDate FROM Task WHERE Status != 'Completed' ORDER BY ActivityDate ASC];
    }
    
    @AuraEnabled(cacheable=true)
public static List<Financial_Advices__c> getUpcomingMeetings() {
    DateTime now = System.now();
    return [
        SELECT Id, Name, Advice_Date_Time__c, Reccommendation__c
        FROM Financial_Advices__c
        WHERE Advice_Date_Time__c > :now
        ORDER BY Advice_Date_Time__c ASC
    ];
}

}