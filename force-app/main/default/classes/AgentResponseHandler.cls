public class AgentResponseHandler {

    // Method to invoke AI Agent and handle the response
    public static void invokeAgentFromApex(Financial_Advices__c financialAdvise) {
        try {
            // Create the custom action to invoke the agent
            Invocable.Action action = Invocable.Action.createCustomAction(
                'generateAiAgentResponse', 
                'Email_Summary_Agent' // Replace with your agent's API Name
            );
            
            // Extract the rich text and convert it to plain text
            String richText = financialAdvise.Reccommendation__c;
            String plainText = 'Send Email Summary of this content' + richText.replaceAll('<[^>]*>', ''); // Remove HTML tags
            
            // Set the user message for the agent
            action.setInvocationParameter('userMessage', plainText);
            
            // Invoke the agent and get the results
            List<Invocable.Action.Result> results = action.invoke();
            
            // Query the related Financial Advice details
            List<Financial_Advices__c> clientFA = [SELECT Id, Name, Portfolio__r.Client__r.Email, Advisor__r.Email 
                                                   FROM Financial_Advices__c WHERE Id = :financialAdvise.Id];
            
            if (!results.isEmpty()) {
                Invocable.Action.Result result = results[0];
                
                if (result.isSuccess()) {
                    // If the agent successfully returned a response
                    String agentResponse = (String) result.getOutputParameters().get('agentResponse');
                    System.debug('Agent Response: ' + agentResponse);
                    
                    // Parse the agent's response
                    Map<String, Object> parsedResponse = (Map<String, Object>) JSON.deserializeUntyped(agentResponse);
                    //processAgentValue(agentResponse, clientFA);
                    if (parsedResponse.containsKey('value')) {
                        String value = (String) parsedResponse.get('value');
                        processAgentValue(value, clientFA);
                    }
                } else {
                    // Handle any errors from the agent response
                    System.debug('Error: ' + result.getErrors());
                }
            }
        } catch (Exception e) {
            // Handle any exceptions in the process
            System.debug('Exception: ' + e.getMessage() + ' at ' + e.getLineNumber());
        }
    }

    // Method to process the agent's response and take actions (e.g., create tasks, send emails)
    private static void processAgentValue(String value, List<Financial_Advices__c> clientFA) {
        // Example: You could decide to create a task or send an email based on the agent's response
        if (value != null) {
            // Create a task based on the agent's response
            String taskDescription = 'Follow-up on action recommended by the agent: ' + value;
            createTask(taskDescription);
            
            // Send an email notification based on the agent's response
            if (!clientFA.isEmpty()) {
                Financial_Advices__c advice = clientFA[0];
                String clientEmail = advice.Portfolio__r.Client__r.Email;
                String advisorEmail = advice.Advisor__r.Email;
                
                String emailSubject = 'Agent Suggested Action - Financial Advice Update';
                String emailBody = 'The agent suggested the following action: ' + value;
                
                sendEmail(clientEmail, emailSubject, emailBody); // Send to client
                sendEmail(advisorEmail, emailSubject, emailBody); // Send to advisor
            }
        }
    }
    
    // Method to create a task based on the description provided
    private static void createTask(String description) {
        Task t = new Task();
        t.Subject = 'Agent Task';
        t.Description = description;
        t.Priority = 'Normal';
        t.Status = 'Not Started';
        t.OwnerId = UserInfo.getUserId(); // Assign to current user (or replace if needed)
        insert t;
        
        System.debug('Task created with description: ' + description);
    }
    
    // Method to send an email
    private static void sendEmail(String toAddress, String subject, String body) {
        Messaging.SingleEmailMessage email = new Messaging.SingleEmailMessage();
        email.setToAddresses(new String[] { toAddress });
        email.setSubject(subject);
        email.setPlainTextBody(body);
        Messaging.sendEmail(new Messaging.SingleEmailMessage[] { email });
        
        System.debug('Email sent to: ' + toAddress);
    }
}