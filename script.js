const input = document.getElementById('userInput');
const submit = document.getElementById('submitBtn');
const todoList = document.getElementById('todoList');

function formatText(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
};


function createCheckbox(span) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');

    checkbox.addEventListener('change', () => {
        span.classList.toggle('done', checkbox.checked);
    });
    return checkbox;
};

function deleteItem(li) {
    const delBtn = document.createElement('button');
    delBtn.classList.add('del');
    delBtn.innerText = 'Delete';

    delBtn.addEventListener('click', () => {
        li.remove();
    });
    return delBtn;
}

function createItem(text) {
    const li = document.createElement('li');
    li.classList.add('li_items');
    const span = document.createElement('span');
    span.innerText = formatText(text);
    span.classList.add('todoTaskText')
    const checkbox = createCheckbox(span)
    const delbtn = deleteItem(li);
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delbtn);
    return li;
}
function handleTodo(e) {
    e.preventDefault();
    const text = input.value.trim();
    if (text === "") return;
    const todoItem = createItem(text);
    todoList.appendChild(todoItem);
    input.value = '';
}
submit.addEventListener('click', handleTodo)

// LIGHT MODE // DARK MODE
const darkmode = document.getElementById('toggle')
toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark');
})