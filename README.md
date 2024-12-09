# To-Do List with Local Storage

This project is a simple **To-Do List** implemented in JavaScript. It allows users to add tasks dynamically to a list, save tasks to local storage, and remove tasks by double-clicking. The list persists even after the page is refreshed.

---

## Features

- **Add New Tasks**: Users can add tasks by typing into a dynamically created input field and pressing `Enter`.
- **Prevent Duplicate Inputs**: Ensures users cannot add a new task until the current input is completed.
- **Local Storage Integration**: Saves tasks to local storage for persistence across browser sessions.
- **Remove Tasks**: Tasks can be removed by double-clicking on the task item.
- **Dynamic DOM Manipulation**: Updates the DOM in real time with user interactions.

---

## How It Works

### Adding a New Task
1. Click the **Add Task** button.
2. A text input field will appear.
3. Type the task name and press `Enter`.
4. The task will be added to the list and saved in local storage.

### Removing a Task
1. Double-click on a task in the list.
2. The task will be removed from the DOM and local storage.

### Local Storage
- The tasks are automatically saved to local storage whenever a new task is added or an existing task is removed.
- When the page loads, tasks are retrieved from local storage and displayed.

---

## Code Explanation

### Main Components
1. **Event Listeners**:
   - `addBtn`: Adds a new input field and task.
   - `dblclick` on tasks: Removes tasks from the list and updates local storage.

2. **Local Storage Functions**:
   - `updateLocalStorage`: Saves the current list of tasks to local storage.
   - `loadFromLocalStorage`: Loads and renders tasks from local storage when the page loads.

3. **Dynamic Input Handling**:
   - Prevents multiple input fields from being created simultaneously.
   - Alerts the user if they attempt to add an empty task.

---
## How to Use

1. Clone the repository or copy the code to your local machine.
   
   If you're cloning from GitHub:
   ```bash
   git clone https://github.com/your-username/todo-list.git

2. Open the index.html file in a web browser.

3. Interact with the Add Task button to add tasks to the list.

4. Each task can be removed by double-clicking on it.

5. Tasks will be saved in the browser's local storage, so they will persist even after refreshing the page.

## Code Snippets

### Adding a Task
```javascript
addBtn.addEventListener('click', () => {
    if (isInputActive) {
        alert("Please complete the current input before adding a new one!");
        return;
    }

    let i = document.createElement('input');
    i.className = 'inp';
    document.body.appendChild(i);

    isInputActive = true;

    i.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const inputValue = i.value.trim();
            if (inputValue === "") {
                alert("Input cannot be empty!");
                return;
            }

            let newDiv = document.createElement('div');
            let newLi = document.createElement('li');
            newDiv.className = 'Mname';
            newDiv.textContent = inputValue;
            newLi.appendChild(newDiv);
            ul.append(newLi);
            i.remove();
            isInputActive = false;

            updateLocalStorage();
        }
    });
});

