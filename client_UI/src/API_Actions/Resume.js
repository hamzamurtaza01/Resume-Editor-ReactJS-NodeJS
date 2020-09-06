import axios from 'axios';
const baseUrl = 'https://localhost:5000/api/resume/'
const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}
export const getResume = () => {
    // // fetch('https://jsonplaceholder.typicode.com/todos/1')
    // // .then(response => response.json())
    // // .then(json => console.log(json)
    

    // axios.get('https://localhost:3000/api/resume/')
    // .then((res) => console.log(res))
    
    // fetch(baseUrl)
    // .then((res) => {
    //     return res.json()
    // })
    // .then((abc) => console.log(abc))

    // axios({
    //     method: 'GET',
    //     url: baseUrl,
    //     // data: resume
    //   })
    //   .then((res) => console.log(res));
}

export const updateResume = async (resume) => {
    await axios.post(
        baseUrl,
        resume,
        config
    )
    console.log('post krdya')
    getResume()
}
