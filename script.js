const input = document.getElementById('userInput');
const submit = document.getElementById('submitBtn');
const todoList = document.getElementById('todoList');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (text === "") return;
    const formattedText = text.charAt(0).toUpperCase() + text.slice(1);
    const li = document.createElement('li');
    li.classList.add('li_items');
    const checkbox = document.createElement('input');
    checkbox.classList.add('checkbox');
    checkbox.type = 'checkbox';
    const span = document.createElement('span');
    span.innerText = formattedText;
    span.classList.add('todoTaskText')

    checkbox.addEventListener('change', () => {
        span.classList.toggle('done', checkbox.checked);
    });
    const delBtn = document.createElement('button');
    delBtn.classList.add('del');
    delBtn.innerText = 'Delete';

    delBtn.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    todoList.appendChild(li);
    input.value = '';
});