import projectModule from "./projects";

const todoModule = (function() {    
    const initialize = () => {
        addItem();
    }

    const createTodo = (title, priority, dueDate, description) => {
        return { title, priority, dueDate, description };
    }

    const appendTodoItems = (array) => {
        const todoContainer = document.querySelector('.accordion');
        const existingElements = document.querySelectorAll('.accordion-item');
        existingElements.forEach(element => element.remove());

        for (let i = 0; i < array.length; i++) {
            const accordionItem = document.createElement('div');
            accordionItem.classList.add('accordion-item');
            todoContainer.appendChild(accordionItem);

            const accordionHeader = document.createElement('h2');
            accordionHeader.classList.add('accordion-header');
            accordionHeader.id = `header-${i}`;
            accordionItem.appendChild(accordionHeader);

            const accordionButton = document.createElement('button');
            accordionButton.classList.add('accordion-button');
            accordionButton.setAttribute('type', 'button');
            accordionButton.setAttribute('data-bs-toggle', 'collapse');
            accordionButton.setAttribute('data-bs-target', `#collapse-${i}`);
            accordionButton.setAttribute('aria-expanded', 'true');
            accordionButton.setAttribute('aria-controls', `collapse-${i}`);
            accordionButton.textContent = array[i].title;
            accordionHeader.appendChild(accordionButton);

            const accordionBodyContainer = document.createElement('div');
            accordionBodyContainer.id = `collapse-${i}`;
            accordionBodyContainer.classList.add('accordion-collapse', 'collapse');
            accordionBodyContainer.setAttribute('aria-labelledby', `heading-${i}`);
            accordionItem.appendChild(accordionBodyContainer);

            const accordionBody = document.createElement('div');
            accordionBody.classList.add('accordion-body');
            accordionBodyContainer.appendChild(accordionBody);

            const priorityHeader = document.createElement('div');
            priorityHeader.textContent = 'Priority';
            priorityHeader.classList.add('todo-header', 'priority');
            accordionBody.appendChild(priorityHeader);

            const dueDateHeader = document.createElement('div');
            dueDateHeader.textContent = 'Due Date';
            dueDateHeader.classList.add('todo-header', 'due-date');
            accordionBody.appendChild(dueDateHeader);

            const descriptionHeader = document.createElement('div');
            descriptionHeader.textContent = 'Description';
            descriptionHeader.classList.add('todo-header', 'description');
            accordionBody.appendChild(descriptionHeader);

            const priority = document.createElement('div');
            priority.textContent = array[i].priority;
            priority.classList.add('todo-priority', array[i].priority);
            accordionBody.appendChild(priority);

            const dueDate = document.createElement('div');
            dueDate.classList.add('todo-due-date');
            dueDate.textContent = array[i].dueDate;
            accordionBody.appendChild(dueDate);
            
            const description = document.createElement('div');
            description.classList.add('todo-description');
            description.textContent = array[i].description;
            accordionBody.appendChild(description);
        }
    }


    const addItem = () => {
        const todoDialog = document.querySelector('#todo-dialog');
        const todoTitle = document.querySelector('#title');
        const todoPriority = document.querySelector('#priority');
        const todoDueDate = document.querySelector('#due-date');
        const todoDescription = document.querySelector('textarea');
        const confirmButton = document.querySelector('#confirm-todo');
        const cancelButton = document.querySelector('#cancel-todo');

        const validateInputs = () => {
            let isValid = true;

            if (todoTitle.value.trim() === '') {
                isValid = false;
                todoTitle.classList.add('input-error');
                console.log('title error');
            } else {
                todoTitle.classList.remove('input-error');
            }

            if (todoPriority === '') {
                isValid = false;
                todoPriority.classList.add('input-error');
                console.log('priority error');
            } else {
                todoPriority.classList.remove('input-error');
            }

            if (todoDueDate.value === '' || isNaN(new Date(todoDueDate.value))) {
                isValid = false;
                todoDueDate.classList.add('input-error');
                console.log('due date error');
            } else {
                todoDueDate.classList.remove('input-error');
            }

            if (todoDescription.value === '') {
                isValid = false;
                todoDescription.classList.add('input-error');
                console.log('description error');
            } else {
                todoDescription.classList.remove('input-error');
            }
            return isValid;
        }

        document.querySelector('.add-todo').addEventListener('click', () => {
            todoDialog.showModal();
        })

        confirmButton.addEventListener('click', () => {
            if (validateInputs()) {
                let projects = projectModule.getProjects();
                const todoItem = createTodo(todoTitle.value, todoPriority.value, todoDueDate.value, todoDescription.value);

                for (let i = 0; i < projects.length; i++) {
                    if (projects[i].selected == true) {
                        projects[i].todos.push(todoItem);
                        appendTodoItems(projects[i].todos);
                    }
                }

                const emptyMessage = document.querySelector('.empty-list');
                if (!emptyMessage.classList.contains('hidden')) {
                    emptyMessage.classList.add('hidden');
                }
    
                todoDialog.close();
                todoTitle.value = '';
                todoPriority.value = '';
                todoDueDate.value = '';
                todoDescription.value = '';
            }
            console.log("Hello");
        })

        cancelButton.addEventListener('click', () => {
            todoDialog.close();
            todoTitle.value = '';
            todoPriority.value = '';
            todoDueDate.value = '';
            todoDescription.value = '';
        })
    }

    return { initialize, createTodo, appendTodoItems };
})();

export default todoModule;