# To-do List Application 2.0!

## Project Overview
This project is an improved version of the to-do list application I created earlier on in The Odin Project. This is a To-Do List Application that allows users to create, organize, and manage tasks within different projects. The application features a clean and dynamic user interface, providing functionality such as task prioritization, due-dates, and allows users to add relevant notes. As well as this, users can seamlessly switch between projects and view the to-do list items in each project as they choose. The project was built using Webpack asset bundling, the JavaScript module pattern, event listeners, and DOM manipulation techniques for an interactive and responsive experience.

## Challenges Faced
This is my first project working with objects as the main data structure for populating the website's content. It was a challenge understanding the syntax, the flow of data, and how to access the right data when I need it. This resulted in messy, hard-to-read code that needed several revisions before I could move on to the next feature. 

As well as this, this project is also the first one that may have some sort of actual utility for users. Before this, my projects were a means to learning different concepts throughout the course. However, with this project, I decided to make the website usable and spent more time ensuring the experience was seamless and not riddled with bugs and unintended behaviour.

## Key Learnings
- My understanding of **modular JavaScript** has definitely improved. While the JS modules in this project aren't massive files of code, it was very informative and beneficial managing what data is shared between the modules and how the different object's properties can be used in this modular context. Because of this, I've been able to add more features and create methods/functions that are used throughout the application.
- My **DOM manipulation and event handling** skills have improved as well. I now have a better understanding of when to make changes to the DOM in response to events called by the user. As well as this, I've learned a lot about how events can affect the underlying data structures and functioning of the application.
- **State management**. This project has state management in the form of 'isEditMode' in the early stages of the project, to giving users feedback when there is no project selected, or that the selected project has no to-do items stored anywhere towards the end of the project. Managing state efficiently is crucial for interactive applications and my first exposure to this has been very useful to building my understanding.

## Improvements I Can Make
- This project, while mostly functional, is still not 100% seamless and user-friendly. For example, when deleting a project while it is being displayed in the main section does not remove the content of the main section, even though the project no longer exists. I could implement a function that resets the page back to 0 as if there are no projects/todos.
- Another area of improvement is the handling of projects/todos and how I serve the message of 'Looks like there's nothing here'. I implemented the logic for this section in a very messy, case-by-case way and I'm sure if I spend more time reviewing the overall logic, I'd be able to write cleaner, more readable and resuable code that updates the page accordingly (I have ideas but I think implementing them would bring diminished returns at this point).
- Overall, styling looks a bit wonky and some messages are kind of just placed where it *almost* looks good, but not quite. Also, when I create several projects, the sidebar becomes quite cluttered with the edit/delete icons. I would need a different approach to the UI as the project scales such as: only showing icons when the mouse is hovering over the project names for instance rather than having them plastered everywhere.

## Finishing Words
I now have a much better grasp of objects and how to create objects that fit my project, and have gained a better understanding of JavaScript as an Object-Oriented programming language. I look forward to learning more about what this language can achieve and how I can utilize it to create applications with uses in the real-world. I believe I now have a strong fundamental understanding of front-end web development and I'm eager to learn more about how I can build more applications.
