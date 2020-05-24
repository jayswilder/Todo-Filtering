   // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.
   let arrayOfTodos = [""]

   const fetchTodos = () => {
     fetch('https://jsonplaceholder.typicode.com/todos')
     .then( (response) => response.json())
     .then( (json) => arrayOfTodos = json)
   }

   const logTodos = () => {
     console.log(arrayOfTodos)
   }

   const populateTodos = () => {

    resetToDos();

        let todoComplete = '';
        let title = '';
        for (i=0; i < arrayOfTodos.length; i++) {
            let todoList = document.getElementById('todo-list');
            let todoItem = document.createElement("LI");
            todoTitle = document.createTextNode(arrayOfTodos[i].title);
            todoItem.appendChild(todoTitle);
            todoList.appendChild(todoItem);

            if (arrayOfTodos[i].completed) {
              todoItem.classList.add('false');
            } else todoItem.classList.add('true')
    
        }

        document.getElementById("myText").innerHTML = arrayOfTodos.length;

        console.log("Thank you for teaching us cool stuff!")
             
   };

  const completedTodos = () => {
    resetToDos();
    let todoComplete = '';
    let title = '';
    for (i=0; i < arrayOfTodos.length; i++) {
        let todoList = document.getElementById('todo-list');
        let todoItem = document.createElement("LI");
        todoTitle = document.createTextNode(arrayOfTodos[i].title);
        todoItem.appendChild(todoTitle);
        todoList.appendChild(todoItem);

        if (arrayOfTodos[i].completed) {
          todoItem.classList.add('invisible');
        } else todoItem.classList.add('true')

    }
         
};

  const incompletedTodos = () => {
    resetToDos();
    let todoComplete = '';
    let title = '';
    for (i=0; i < arrayOfTodos.length; i++) {
        let todoList = document.getElementById('todo-list');
        let todoItem = document.createElement("LI");
        todoTitle = document.createTextNode(arrayOfTodos[i].title);
        todoItem.appendChild(todoTitle);
        todoList.appendChild(todoItem);

        if (arrayOfTodos[i].completed) {
          todoItem.classList.add('false');
        } else todoItem.classList.add('invisible')

    }

};


function resetToDos () {
  const listStuff = document.querySelector('[data-lists]')
  while (listStuff.firstChild) {
    listStuff.removeChild(listStuff.firstChild)
  }

  
};


function selectedTodos () {

  resetToDos ()

  const numberInput = document.getElementById('myNumber').value;
  //console.log(numberInput);

  let todoComplete = '';
  let title = '';
  let userID = '';
  // for (i=0; i < arrayOfTodos.length; i++) {
      let todoList = document.getElementById('todo-list');
      let todoItem = document.createElement("LI");
      todoTitle = document.createTextNode(arrayOfTodos[numberInput].title);
      todoItem.appendChild(todoTitle);
      todoList.appendChild(todoItem);

      if (arrayOfTodos[numberInput].userID) {
        todoItem.classList.add('invisible');
      } else todoItem.classList.add('filterNumber', 'animate_animated');


  document.getElementById("myText").innerHTML = arrayOfTodos.length;

  console.log("Thank you for teaching us cool stuff!")
       
};




