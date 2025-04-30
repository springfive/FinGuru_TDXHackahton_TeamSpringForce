public class AgentResponseQueueable implements Queueable {

    private Id financialAdviseId;

    public AgentResponseQueueable(Id financialAdviseId) {
        this.financialAdviseId = financialAdviseId;
    }

    public void execute(QueueableContext context) {
        // Retrieve the Financial Advice record
        Financial_Advices__c financialAdvise = [SELECT Id, Reccommendation__c FROM Financial_Advices__c WHERE Id = :financialAdviseId LIMIT 1];
        
        // Invoke the agent and process the response
        AgentResponseHandler.invokeAgentFromApex(financialAdvise);
    }
}