import * as func from './functions.js'

const button = document.querySelector('#addTask');
//event listener to add task
document.addEventListener('keyup', (e) => {if(e.key == 'Enter') func.addTask()});
button.addEventListener('click', () => func.addTask());
document.querySelector('ul').addEventListener('change', (event) => {
    const check = event.target;
    const li = check.parentNode;
    func.doneNotDone(li);
});
func.generateTasks();

document.querySelector('#deleteTask').addEventListener('click', e =>{
    const node = e.target;
    e.parentNode.remove()
})
console.log("cookie => '"+document.cookie+"'");

