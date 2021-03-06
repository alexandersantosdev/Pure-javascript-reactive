var todos = []
let todo = ''

function populateList() {
    document.getElementById('todos').innerHTML = ''

    let html = ''

    for (l in todos)
        html += `<li>${todos[l]} <button class="red" onclick="remove(${l})">X</button></li> `

    document.getElementById('todos').innerHTML = html
}

function setTodo(e) {
    todo = e.target.value
}

function add() {
    if(todo == '' || todo == null)
        return
    todos = [...todos, todo]
    todo = ''
    populateList()
}

function remove(id) {
    let filtered = todos.filter(l => l != todos[id])
    todos = filtered
    populateList()
}
