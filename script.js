function addTask() {
  const input = document.getElementById("taskInput"); // get the input box
  const task = input.value.trim(); // get what user typed

  if (task !== "") {
    const listItem = document.createElement("li"); // make new list item
    listItem.textContent = task; // put task inside it

    document.getElementById("taskList").appendChild(listItem); // add to list

    input.value = ""; // clear input box
  }
}

