var todos = ["fuck", "suck"];

var input = prompt("what would you like to do");



while(input !== "quit") {
	if(input === "list") {
		listTodos();
	} 	else if(input === "new") {
		addTodo();
	}	else if(input === "delete") {
		deleteTodo();
	}

	input = prompt("what would you like to do");
}
console.log("ok, you quit the app");
console.log("here is your list so far ");
console.log(todos);

function listTodos() {
	console.log("*********");
		todos.forEach(function(todo, index) {
			console.log(index + ": " + todo);	
		});
		console.log("*********");
}

function addTodo() {
	var newTodo = prompt("Enter new todo");
		todos.push(newTodo);
}

function deleteTodo() {
	var index = prompt("enter index of todo to delete");
	todos.splice(index, 1);
}