# FinGuru_TDXHackahton_TeamSpringForce

# **FinGuru: Your Personalized Financial Guide**

## **Problem Statement:**
In today’s fast-paced financial world, users often struggle to access the right tools and resources that enable them to connect with financial advisors and make informed decisions about their investments. This solution aims to address these issues by providing a platform that helps users:
- Connect with financial advisors easily and efficiently.
- Create diversified portfolios that are tailored to their specific financial goals.
- Provide valuable tools and insights that guide users through the process of portfolio creation and management.

## **Features:**

### **Slack-Based Advisor Collaboration:**
- Advisors are notified in their Slack channel when a meeting is scheduled.
- Advisor assignment is automated based on the user's subscription.
- Meetings between users and advisors are conducted directly via Slack.
- Advisors can update recommendations within Slack, ensuring a smooth and efficient workflow.

### **Experience Site Portal**
- **User Dashboard**: Provides users with a comprehensive view of their portfolio, income, savings, and investments.
- **Task Management**: Track tasks assigned by their financial advisor to stay on top of important activities.
- **Upcoming Meeting**: View scheduled meetings with financial advisors for streamlined communication.
- **Real-time Chat**: Directly chat with a client agent to get personalized financial advice.
- **Navigation**: Easy navigation to record pages or lists of specific items, allowing users to access detailed information about their financial journey.

### **Agent Features (3 different agents)**
- **Recommendation Analysis Agent**:
  - Receives recommendations from the Advisor Agent.
  - Analyzes and validates each suggestion.
  - Creates follow-up tasks based on the recommendations.
  - Assigns tasks to the appropriate users for execution.
  
- **Client Agent**:
  - Provides real-time market insights and trends.
  - Clients can ask for investment guidance, such as “Where should I invest?” or “What are safe options right now?”
  - Supports booking meetings with advisors, with availability and overlap checks.
  - Allows clients to view their financial logs, subscriptions, investments, and assets.
  - Enables clients to update recent transactions or purchases.
  - Offers personalized investment suggestions based on financial profile.
  - Facilitates natural conversation with AI for quick and contextual financial support.
  
- **Advisor Agent**:
  - Retrieve client portfolio summaries.
  - View financial logs.
  - Access investment and asset details.
  - Consolidated view of a client’s financial profile.

### **Omni-Channel Support:**
- Connect with customer support through communication channels for efficient and seamless assistance.

## **Technologies/Platform:**
- **Data Cloud**
- **Slack**
- **Salesforce**
- **Agentforce**
- **Digital Experience**
- **LWC Component**
- **API**
- **Apex**
- **React & Vite**

## **User and Financial Advisor Workflow in Financial Guru**

### **End User Side (Financial Guru):**
(For dynamic site - Go to org, click on 9 dot and search for FinancialGuru and open it.)
(For static - https://gokul-wealth-view.vercel.app/)
1. View portfolio dashboard with income, savings, expenditure pie chart, and health indicator.
2. Track tasks assigned by the financial advisor, with due dates, and mark them as done when completed.
3. View upcoming scheduled meetings with the financial advisor.
4. Chat with the Client Agent for any queries and get immediate assistance.
5. If needed, be redirected to human customer support for more help.
6. Schedule a meeting with the allocated financial advisor.
7. Meeting notifications sent to the advisor’s Slack channel.
8. After the meeting, the advisor provides recommendations.
9. The Recommendation Agent creates tasks based on the advisor’s recommendations, and assigns them to the user.
10. Navigate to specific items using the navigation bar.

### **Financial Advisor Side (Financial Guru):**
(Financial Advisor site Link - https://advisory-task-master.vercel.app/)
1. View total number of clients, assets under management, upcoming meetings, pending tasks, investment allocation, and top clients on the dashboard.
2. Chat with the Advisor Agent for immediate queries and assistance.
3. Retrieve client portfolio summaries, financial logs, investment details, and a consolidated view of the client’s financial profile.
4. Attend meetings with clients and give tailored recommendations.
5. Advisors are notified in their dedicated Slack channels (Diamond Advisor, Gold Advisor, Silver Advisor) when they are assigned clients.
6. Provide recommendations based on client meetings.

## **Future Enhancements:**

### 1. **Dynamic Navigation for Advisor Site:**
Currently, the **Advisor site** is static. We plan to transition it to a **dynamic experience** using **Salesforce Digital Experiences** and **LWC**, similar to the user site. This will enhance the advisor's ability to interact with the platform in a more personalized and flexible way.

### 2. **UI Enhancements for User Site:**
We will focus on improving the **UI/UX** of the **user site** by:
- Refining visual elements for a more polished look.
- Improving accessibility to ensure a seamless experience for all users.
- Ensuring a smoother user experience across different devices, particularly for mobile users.

### 3. **Real-time API Integration:**
Currently, we rely on **historical data** for stocks, real estate, mutual funds, crypto, and gold information. To enhance decision-making and provide users with the latest market insights, we plan to implement **real-time API integration**, allowing us to deliver up-to-date market data. This will enable users to make more informed investment decisions based on the **latest market trends**, **prices**, and **news**.

### 4 If more time permitted, we would have integrated a real-time API to fetch dynamic stock and market prices, providing regular updates to guide users. Additionally, we planned to offer in-depth stock analysis, including book value and trade value insights. 

### 5 We also aimed to connect Zoom links dynamically, so when users have meetings, the transcription would automatically update the financial advice object, creating tasks based on the transcriptions.

### 6 This solution can help any stock broker's platform where instead of mannualy checking stocks and returns user can simply ask the agents for all the inputs




