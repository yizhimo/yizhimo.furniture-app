import axios from 'axios'

export default function request(config) {
    const instance = axios.create({
        baseURL: 'http://127.0.0.1:5000',
        timeout: 5000
    })

    return instance(config)
}

// export function requestPost(config) {
//     const instancePost = axios.create({
//         baseURL: 'http://127.0.0.1:5000',
//         timeout: 5000
//     })

//     return instancePost(config)
// }