'use strict';

(function() {
    let workspace = document.querySelector(".workspace");
    let list = workspace.querySelector(".tasks__list");
    let form = workspace.querySelector(".form");
    let template = document.querySelector(".task-template");
    let editing = null;

    workspace.querySelector(".tasks__add").addEventListener('click', function() {
        editing = null;
        form.reset();
        form.hidden = false;
    });

    form.querySelector(".btn--cancel").addEventListener('click', function() {
        form.hidden = true;
    });

    list.addEventListener('click', function(event) {
        let task = event.target.closest('.task');
        if (event.target.closest(".task__btn--edit")) {
            editing = task;
            form.elements.task.value = task.querySelector('.task__text').textContent;
            form.elements.important.checked = task.classList.contains('task--important');
            form.hidden = false;
        }
        if (event.target.closest(".task__btn--delete")) {
            if (task === editing) {
                form.hidden = true;
            }
            task.remove();
        }
    });

    window.saveTask = function(frm) {
        let task;

        if (editing) {
            task = editing;
        } else {
            task = template.content.firstElementChild.cloneNode(true);
        }
        
        task.querySelector('.task__text').textContent = frm.elements.task.value.trim();
        task.classList.toggle('task--important', frm.elements.important.checked);
        if (!editing) {
            list.append(task);
        }
        frm.hidden = true;
        return false;
    };
})();