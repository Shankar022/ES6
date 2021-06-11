// Immediately Resolved

// let promise = 9.Promise.resolve('Foo');
// promise.then(result =>{
//     console.log(result);
// })

const getData= (method, url) =>{
    return new Promise(function (resolve, reject)  {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function()  {
            if (this.status === 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = () => {
            reject({
                status: xhr.status,
                statusText: xhr.statusText
            });
        };

        xhr.send();
    });
}



getData("GET", "https://jsonplaceholder.typicode.com/todos").then((data) => {
    let todos = JSON.parse(data);
    let output = '';

    for (let todo of todos) {
        console.log(todo);
        output += `
        <li>
            <h3>${todo.title}</h3>
            <p>Completed : ${todo.completed}</p>
        </li>
        `;
    }
    document.getElementById('template').innerHTML = output;
    
}).then((error) =>{
    console.log(error);
});
