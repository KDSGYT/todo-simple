const newTask =document.querySelector('#task');
const cookie = document.cookie;
const tasks = getCookie() || [];

export function createTask(value){
    const ul = document.querySelector('.list');
    const li = document.createElement('li');
    li.innerHTML = `<input type="checkbox" name="${value}">${value}
    <label for="${value}" ></label>
    
    `;
    ul.appendChild(li);
    tasks.push(value);
    // console.log(cookie);
    // setCookie();
    
}

export function generateTasks() {
    tasks.forEach(element => {
        createTask(element);
    });
}

export function doneNotDone(li){
    if(!(li.getAttribute('class') == 'check')){
        li.setAttribute('class','check');
    } else if(li.getAttribute('class') == 'check'){
        li.removeAttribute('class');
    }
}

export function addTask() {
    let task = newTask.value;
    if(task !="" && task != null) createTask(task); setCookie();
    newTask.value = null;

}

function setCookie(){
    document.cookie = `tasks=${tasks}`;
    console.log(tasks);
}

function getCookie(){
    if(cookie!=''){
        return cookie.split(';').find( c => c.startsWith('tasks')).split('=')[1].split(',');
    }
}
