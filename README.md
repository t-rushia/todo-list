# todo-list

I created my first to-do list after learning about how innerHTML works within javascript.

The submit button calls an eventListener 'click' which will take the input text value and add it to the toDoList array, after this will call the renderList() function.

Within the renderList() function a for loop is used to add each item to the listItems variable depending on the total items added to the array. The array will be displayed as innerHTML via an unordered list, this function will be creating the list indexes.

Lastly I added a refresh list button which simply will remove all the innerHTML from the list and will display nothing on screen allowing the user to begin a new list.
