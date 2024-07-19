Ai Assistant Siri
Ai Assistant Siri is an open-source web application designed to enhance productivity by integrating with multiple services such as Trello, Notion, Google Calendar, and Pinecone. This application allows users to manage tasks and events seamlessly across different platforms through a unified interface.

Features
Trello Integration: Create and manage Trello boards via API.
Notion Integration: Generate and manage Notion templates.
Google Calendar Integration: Add and organize events in Google Calendar.
Pinecone Integration: Store and query vector embeddings for advanced applications.
Getting Started
Follow these steps to set up and run Ai Assistant Siri on your local machine.

Prerequisites
Node.js: Ensure you have Node.js installed. You can download it from nodejs.org.
Installation
Clone the Repository

Open your terminal and clone the repository using Git:

bash
Copy code
git clone https://github.com/Devjosef/Ai-Assistant-Siri.git
Navigate to the Project Directory

Change into the project directory:

bash
Copy code
cd Ai-Assistant-Siri
Install Dependencies

Install the necessary Node.js packages:

bash
Copy code
npm install
Set Up Environment Variables

Create a .env file in the root directory of the project. This file will store your API keys and configuration settings. Use the following template and replace the placeholders with your actual keys:

env
Copy code
OPENAI_API_KEY=your_openai_api_key
PINECONE_API_KEY=your_pinecone_api_key
PINECONE_ENVIRONMENT=your_pinecone_environment
PINECONE_INDEX_NAME=your_pinecone_index_name
TRELLO_API_KEY=your_trello_api_key
TRELLO_TOKEN=your_trello_token
NOTION_API_KEY=your_notion_api_key
NOTION_DATABASE_ID=your_notion_database_id
GOOGLE_API_KEY=your_google_api_key
Run the Application

Start the application with the following command:

bash
Copy code
npm start
Your application should now be running locally at http://localhost:3000.

API Endpoints
Create a Trello Board
Endpoint: POST /create-trello-board
Request Body:
json
Copy code
{
  "boardName": "My Board",
  "templateId": "template123"
}
Response: Returns details of the created Trello board.
Create a Notion Template
Endpoint: POST /create-notion-template
Request Body:
json
Copy code
{
  "templateName": "New Template",
  "templateContent": [
    {
      "object": "block",
      "type": "paragraph",
      "paragraph": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "This is a new template."
            }
          }
        ]
      }
    }
  ]
}
Response: Returns details of the created Notion page.
Create a Google Calendar Event
Endpoint: POST /create-calendar-event
Request Body:
json
Copy code
{
  "summary": "Meeting with Team",
  "location": "Conference Room",
  "description": "Discuss project progress",
  "startDateTime": "2024-07-20T09:00:00",
  "endDateTime": "2024-07-20T10:00:00"
}
Response: Returns details of the created event.
Contributing
We welcome contributions to improve Ai Assistant Siri. To contribute:

Fork the Repository: Click the "Fork" button at the top right of the repository page.
Create a New Branch:
bash
Copy code
git checkout -b feature-branch
Make Changes and Commit:
bash
Copy code
git commit -am 'Add new feature'
Push to Your Fork:
bash
Copy code
git push origin feature-branch
Submit a Pull Request: Go to the repository on GitHub and open a pull request with a description of your changes.

License
This project is licensed under the MIT License. See the LICENSE file for more details.

Acknowledgements
Pinecone: Vector database for managing and querying embeddings.
OpenAI: Provides embedding models used for vector representation.
Trello: Project management tool used for board management.
Notion: Tool for creating and managing templates.
Google Calendar API: Allows integration with Google Calendar for event management.
Node.js: JavaScript runtime used to build and run the application.

