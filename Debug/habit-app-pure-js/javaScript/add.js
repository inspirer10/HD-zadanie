import { getHabitList } from './getLocalStorage.js';
import { render } from './render.js';

const btn = document.querySelector('.btn-primary');
const input = document.querySelector('#input');

btn.onclick = () => addNew();

input.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        addNew();
    }
});

function addNew() {
    const { value: newHabit } = input;
    input.value = '';
    newHabit ? add(newHabit) : alert('Please enter your habbit');
}

function add(newHabit) {
    const habitList = getHabitList();

    if (habitList && habitList.includes(newHabit)) {
        alert('Habit exists');
        return;
    }

    const newList = habitList ? [...habitList, newHabit] : [newHabit];
    console.log(newList);
    localStorage.setItem('habits', JSON.stringify(newList));

    render();
}
