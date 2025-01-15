Link :- famous-capybara-50222d.netlify.app

To-Do List Application
Overview
This To-Do List application allows users to manage tasks, prioritize them, and fetch weather data for tasks related to outdoor activities. The app includes user authentication, ensuring tasks are visible only to logged-in users. Designed with a mobile-first approach, the app is fully responsive and optimized for all devices.

The application integrates with a public weather API to display relevant information for outdoor tasks, and leverages Redux for state management, including authentication and task management.

Install dependencies: Install the required dependencies using npm: npm install
Start the development server: Start the application in development mode: npm run dev

Features & Functionality
1. Responsive Design
The application is built with a mobile-first approach and is fully responsive across various screen sizes, including mobile, tablet, and desktop. The layout utilizes CSS Grid and Flexbox to ensure an optimal user experience across devices.

2. Task Management
Users can add, view, and delete tasks. The task management functionality allows for:

Adding tasks through an intuitive input field.
Displaying tasks in a structured list.
Deleting tasks via a dedicated button for each item.
State management is handled using Redux, ensuring efficient updates and task management.

3. Weather Data Integration
The app fetches weather data from a public API for tasks related to outdoor activities. It dynamically displays weather conditions (such as temperature, humidity, and forecast) based on the task context, providing users with real-time data relevant to their activities.

4. Task Prioritization
Tasks can be assigned a priority level (e.g., High, Medium, Low) to help users organize and focus on more important activities. Tasks are displayed according to their priority, ensuring critical tasks are highlighted.

5. User Authentication
The application includes a user authentication system that requires login with specific credentials. Authentication status is managed using Redux, ensuring tasks are only visible to authenticated users.

Login credentials:
Username: random
Password: random
The app supports login and logout functionality. Session information is persisted using local storage, allowing a seamless experience across user sessions.

Usage
Login: Use the credentials (Username: random, Password: random) to log in.
Add Tasks: Type a task in the input field and press Enter or click "Add Task".
View Tasks: Tasks will be displayed in a list format.
Delete Tasks: Click the "Delete" button next to any task to remove it.
Prioritize Tasks: Select a priority for each task (High, Medium, Low).
Check Weather: For outdoor tasks, the app will fetch and display relevant weather information.
Logout: Click the logout button to logout.

![Project Screenshot](./assets/screenshot(70).jpg)
![Project Screenshot](./assets/screenshot(71).jpg)
