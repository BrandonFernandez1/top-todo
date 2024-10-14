import todoModule from './todo';

import plus from '../images/svgs/plus.svg';
import edit from '../images/svgs/edit.svg';
import trash from '../images/svgs/trash.svg';

const projectModule = (function() {
    const initialize = () => {
        addPlusIcon();
        addProject();
    }

    const addPlusIcon = () => {
        const projectHeader = document.querySelector('.project-header');
        const plusSvg = document.createElement('img');
        plusSvg.classList.add('icon');
        plusSvg.src = plus;
        plusSvg.id = 'create-new-project';
        projectHeader.appendChild(plusSvg);

        const addTodoItem = document.createElement('img');
        addTodoItem.src = plus;
        addTodoItem.classList.add('icon');
        addTodoItem.id = 'create-new-todo';
        document.querySelector('.add-todo').appendChild(addTodoItem);
    }

    const projects = [];

    const createProject = (name, todos = []) => {
        return {
            name,
            todos,
            selected: false
        }
    } 

    const addProject = () => {
        const createNewProjectButton = document.querySelector('#create-new-project');
        const projectDialogElement = document.querySelector('#project-dialog');
        const nameInputElement = document.querySelector('#name-input');
        const confirmButton = document.querySelector('#project-confirm-button');
        const cancelButton = document.querySelector('#project-cancel-button');

        let editMode = false;
        let projectIndexToEdit;

        createNewProjectButton.addEventListener('click', () => {
            editMode = false;
            document.querySelector('#project-dialog-title').textContent = 'Create a new project';
            confirmButton.textContent = 'Create';
            projectDialogElement.showModal();
        })

        confirmButton.addEventListener('click', () => {
            const projectName = nameInputElement.value;

            if (projectName) {
                let index;
                if (!editMode) {
                    const newProject = createProject(projectName);
                    projects.push(newProject);
                    index = projects.length - 1;
                    appendProject(newProject, index);
                } else {
                    editProject(projectName, projectIndexToEdit);
                }
                
                projectDialogElement.close();
                nameInputElement.value = '';
            }
        })

        cancelButton.addEventListener('click', () => {
            projectDialogElement.close();
            nameInputElement.value = '';
        })

        const appendProject = (project, index) => {
            const projectSection = document.querySelector('.projects');
            const projectList = document.querySelector('.project-list');
            projectSection.appendChild(projectList);
            
            const projectItem = document.createElement('li');
            //Index used here to link to position in projects array
            projectItem.setAttribute('data-index', index);
            projectList.appendChild(projectItem);

            const projectTitleWrapper = document.createElement('div');
            projectTitleWrapper.classList.add('project-title');
            projectTitleWrapper.id = `project-${index}-title`;
            projectTitleWrapper.textContent = project.name;
            projectItem.appendChild(projectTitleWrapper);

            const iconContainer = document.createElement('div');
            projectItem.appendChild(iconContainer);

            const editIcon = document.createElement('img');
            editIcon.classList.add('icon');
            editIcon.src = edit;
            iconContainer.appendChild(editIcon);

            const deleteIcon = document.createElement('img');
            deleteIcon.classList.add('icon');
            deleteIcon.src = trash;
            iconContainer.appendChild(deleteIcon);

            editIcon.addEventListener('click', () => {
                editMode = true;
                projectIndexToEdit = index;
                document.querySelector('#project-dialog-title').textContent = 'Edit Project Name';
                confirmButton.textContent = 'Edit';
                projectDialogElement.showModal();
            })

            deleteIcon.addEventListener('click', () => {
                //Reset the page... how??????
                projectItem.remove();
                projects.splice(index, 1);
            })

            projectTitleWrapper.addEventListener('click', () => {
                checkProjectsAndTodos(project);

                for (let i = 0; i < projects.length; i++) {
                    projects[i].selected = false;
                }         
                project.selected = true;
                
                const allProjectWrappers = document.querySelectorAll('.project-title');
                for (let i = 0; i < allProjectWrappers.length; i++) {
                    if (allProjectWrappers[i].classList.contains('selected')) {
                        allProjectWrappers[i].classList.remove('selected');
                    }
                }
                projectTitleWrapper.classList.add('selected');

                todoModule.appendTodoItems(project.todos);

                const addItemButton = document.querySelector('.add-todo');
                if (addItemButton.classList.contains('hidden')) {
                    addItemButton.classList.remove('hidden');
                }

                document.querySelector('.project-title-header').textContent = project.name;
            })
        }

        const editProject = (newName, index) => {
            const nameElement = document.querySelector(`#project-${index}-title`);
            projects[index].name = newName;
            nameElement.textContent = newName;
        }
    }

    const checkProjectsAndTodos = (project) => {
        const emptyMessage = document.querySelector('.empty-list');

        if (project.todos.length < 1) {
            emptyMessage.classList.remove('hidden');
        } else {
            emptyMessage.classList.add('hidden');
        }
    }

    const getProjects = () => projects;   

    return { initialize, createProject, getProjects };
})();

export default projectModule;