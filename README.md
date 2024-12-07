To-Do List with Local Storage
This project is a simple To-Do List implemented in JavaScript. It allows users to add tasks dynamically to a list, save tasks to local storage, and remove tasks by double-clicking. The list persists even after the page is refreshed.

Features
Add New Tasks: Users can add tasks by typing into a dynamically created input field and pressing Enter.
Prevent Duplicate Inputs: Ensures users cannot add a new task until the current input is completed.
Local Storage Integration: Saves tasks to local storage for persistence across browser sessions.
Remove Tasks: Tasks can be removed by double-clicking on the task item.
Dynamic DOM Manipulation: Updates the DOM in real time with user interactions.


How It Works

Adding a New Task
Click the Add Task button.
A text input field will appear.
Type the task name and press Enter.
The task will be added to the list and saved in local storage.

Removing a Task
Double-click on a task in the list.
The task will be removed from the DOM and local storage.


Local Storage
The tasks are automatically saved to local storage whenever a new task is added or an existing task is removed.
When the page loads, tasks are retrieved from local storage and displayed.


Code Explanation
Main Components
Event Listeners:

addBtn: Adds a new input field and task.
dblclick on tasks: Removes tasks from the list and updates local storage.
Local Storage Functions:

updateLocalStorage: Saves the current list of tasks to local storage.
loadFromLocalStorage: Loads and renders tasks from local storage when the page loads.
Dynamic Input Handling:

Prevents multiple input fields from being created simultaneously.
Alerts the user if they attempt to add an empty task.

How to Use
Clone the repository or copy the code.
Open the HTML file in a browser.
Interact with the Add Task button and the list as described above.


Future Improvements
Add an edit feature to modify tasks.
Allow users to clear all tasks at once.
Add priority levels for tasks.
