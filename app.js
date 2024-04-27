let usersContainer = document.querySelector('.users')

async function getComments() {
    try {
        let gif = document.createElement('img')
        gif.classList.add('gif')
        gif.src = 'https://i.gifer.com/ZZ5H.gif' 
        usersContainer.append(gif)
        
        
        
        let res = await fetch('https://jsonplaceholder.typicode.com/comments')
        let data = await res.json()
        usersContainer.removeChild(gif)
        data.forEach((user,i) => {
            let item = document.createElement('div')
            item.classList.add('item')
            
            let name = document.createElement('h2')
            let email = document.createElement('a')
            let body = document.createElement('p')
            
            name.textContent = `Имя: ${user.name}`
            email.textContent = `Эл.почта: ${user.email}`
            email.href = `mailto: ${user.email}`
            body.textContent = `Коммент: ${user.body}`
            
            item.append(name,email,body)
            usersContainer.append(item)
        });
        
        
    } catch (error) {
        console.log(error);
    }
}
getComments()