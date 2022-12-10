import { render } from './render.js';

const reset = document.querySelector('.reset');

reset.onclick = () => resetAll();

export function resetAll() {
    const spinner = document.querySelector('.spinner');
    const habits = document.querySelector('#habits_container');
    habits.innerHTML = '';
    spinner.classList.remove('d-none');
    setTimeout(() => {
        spinner.classList.add('d-none');
        localStorage.setItem('checkList', JSON.stringify([]));
        render();
    }, 400);
}
