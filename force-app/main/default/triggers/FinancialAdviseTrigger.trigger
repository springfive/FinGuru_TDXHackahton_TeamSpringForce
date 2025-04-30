trigger FinancialAdviseTrigger on Financial_Advices__c (before insert, before update) {
    if (Trigger.isBefore) {
        if (Trigger.isInsert || Trigger.isUpdate) {
            // Check if 'Recommendation__c' is changed in update scenarios
            if (Trigger.isUpdate) {
                for (Financial_Advices__c newRecord : Trigger.new) {
                    Financial_Advices__c oldRecord = Trigger.oldMap.get(newRecord.Id);

                    // Check if 'Recommendation__c' is changed
                    if (newRecord.Reccommendation__c != oldRecord.Reccommendation__c) {
                        // Enqueue the job to process the agent response asynchronously
                        System.enqueueJob(new AgentResponseQueueable(newRecord.Id));
                    }
                }
            }
        }
    }
}