// Define UI vars

const from = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// load all Event listeners
 
loadEventListeners();

// load all Event listeners

function loadEventListeners(){
    //Add task Event
    from.addEventListener('submit', addTask);
    //Remove task
    taskList.addEventListener('click', removeTask);
    //Clear Tasks
    clearBtn.addEventListener('click', clearTasks);
    // Filter tasks event
    filter.addEventListener('keyup', filterTasks);
}
   //Add task
   function addTask(e){
       if(taskInput.value === ''){
           alert('Add Task');
       }
       // Create li element
       const li = document.createElement('li');
       // Add classname
       li.className = 'collection-item';
       //Create text node and append to li
       li.appendChild(document.createTextNode(taskInput.value));
       //Create new link element
       const link = document.createElement('a');
       // Add class
       link.className = 'delete-item secondary-content';
       // Add icon html
       link.innerHTML = '<i class="fa fa-remove"><i>';
       //Append link to li
       li.appendChild(link);
       // Append li to ul
       taskList.appendChild(li);
       
    e.preventDefault();

   }

   //Remove task
   function removeTask(e){
       if(e.target.parentElement.classList.contains
        ('delete-item')){
            if(confirm('Are You Sure')){
                e.target.parentElement.parentElement.remove();
            }

       }
   }
   
   //Clear tasks
   function clearTasks(){
       //taskList.innerHTML = '';

       //Faster
       while(taskList.firstChild){
           taskList.removeChild(taskList.firstChild);
       }
   }

//Filter tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach
    (function(task){
        const item = task.firstChild.textContent;

        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }

    })

}


