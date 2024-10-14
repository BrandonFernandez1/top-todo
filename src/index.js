import './style.css';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';

import projectModule from './js-modules/projects.js';
import todoModule from './js-modules/todo.js';

document.addEventListener('DOMContentLoaded', () => {
    projectModule.initialize();
    todoModule.initialize();
})

document.querySelector('#print-projects').addEventListener('click', () => {
    console.log(projectModule.getProjects());
})
