
class Task {
    constructor(name, completed) {
        this.name = name;
        this.completed = completed;
    }

    static fromJSON(json) {
        return new Task(
            json.name,
            json.completed
        );
    }
}

class UI {
    constructor(){
        this.taskName = document.getElementById("input");
        this.addButton = document.getElementById("submit");
        this.tableBody = document.getElementById('table-body')

        this.addButton.addEventListener('click', (e)=>this.onAddClick(e));

        this.tasks = [];

        this.loadTasksFromLocalStorage();
        this.renderTasks();
    }

    onAddClick(e) {
        e.preventDefault();

        const task = new Task(
            this.taskName.value
        )

        this.tasks.push(task);

        this.saveTasksToLocalStorage();
        this.renderTasks();
    }

    renderTasks() {
        this.tableBody.innerHTML = '';

        for (let index in this.tasks) {
            const task = this.tasks[index];

            const tr = this.createTableRow(task);
            this.tableBody.appendChild(tr);
        }
    }

    createTableRow(task) {
        const tr = document.createElement('tr');

        const tdName = document.createElement('td');
        const tdCompleted = document.createElement('input');
        const tdActions = document.createElement('td');

        tdName.innerHTML = task.name;
        tdCompleted.type = 'checkbox';
        tdCompleted.classList.add('m-3', 'rounded-circle')

        // code to make checkbox load in as checked or unchecked
        // correctly
        tdCompleted.checked = task.completed;
        tdCompleted.addEventListener('click', (e) => {
            task.completed = tdCompleted.checked;
            this.saveTasksToLocalStorage();
        })

        const deleteButton = this.createRemoveButton(task);
        tdActions.appendChild(deleteButton);

        tr.appendChild(tdName);
        tr.appendChild(tdCompleted);
        tr.appendChild(tdActions);

        return tr;
    }


    createRemoveButton(task) {
        const button = document.createElement('button');

        button.setAttribute('class', 'btn btn-danger btn-sm');
        button.innerHTML = 'X'
        button.addEventListener('click', () => this.onDeleteClicked(task));

        return button;
    }

    onDeleteClicked(task) {
        this.tasks = this.tasks.filter((x) => {
            return task.name !== x.name;
        });

        this.saveTasksToLocalStorage();
        this.renderTasks();
    }

    saveTasksToLocalStorage() {
        const json = JSON.stringify(this.tasks);
        localStorage.setItem('tasks', json);
    }
    
    loadTasksFromLocalStorage() {
        const json = localStorage.getItem('tasks');
        if (json) {
        const bookArr = JSON.parse(json);
        this.tasks = bookArr.map(x => Task.fromJSON(x));
        }
    }
}

const ui = new UI();