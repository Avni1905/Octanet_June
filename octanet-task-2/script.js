function addTask() {
    var input = document.getElementById("taskInput").value;
    if (input === '') {
        alert("Please enter a task!");
        return;
    }

    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    var crossSpan = document.createElement("span");
    crossSpan.innerHTML = "&#10005;";
    crossSpan.className = "cross-icon";
    crossSpan.onclick = function() {
        li.classList.toggle("completed");
    };

    li.appendChild(document.createTextNode(input));
    li.appendChild(crossSpan);
    ul.appendChild(li);

    document.getElementById("taskInput").value = '';
}

function handleKeyPress(event) {
    if (event.keyCode === 13) {
        addTask();
    }
}
