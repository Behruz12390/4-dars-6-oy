const s = document.querySelector('.s')

const getusers = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        return await response.json()

    }catch (err){
        return err.message
    }
}
const drawui = async () => {
    const users = await getusers()
    for (let user of users) {
        s.innerHTML += `<div class="j">
        <h1>Ismi: ${user.name}</h1>
        <p>Username: ${user.username}</p>
        <p>Manzil: ${user.address.street}</p>
        <p>Email: ${user.email}</p>
    </div>`
    }
}
drawui()