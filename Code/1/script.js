const getDataBtn = document.querySelector('.get__btn');
const postDataBtn = document.querySelector('.post__btn');
const container = document.querySelector('#root');
const input = document.querySelector('#data__input');

getDataBtn.addEventListener('click', () => {
    fetch('https://dummyjson.com/products', {
        method: 'GET',
    })
        .then((res) => res.json())
        .then((res) => {
            let data = res.products;
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                container.innerHTML += `<p>${data[i].title}</p>`;
            }
        })
        .catch((err) => console.warn(err));
});

postDataBtn.addEventListener('click', (e) => {
    e.preventDefault();
    fetch('https://dummyjson.com/products/add/', {
        method: 'POST',
        body: `{
            "Title": ${input.value},
            "Id": ${Math.random()},
        }`,
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        });
    input.value = '';
});

deleteBtn.addEventListener('click', () => {
    fetch('https://dummyjson.com/products/1', {
        method: 'DELETE',
    })
        .then((res) => res.json())
        .then(console.log(res));
});
