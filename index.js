const endpoints = [
    'https://62a4da7d47e6e4006399353b.mockapi.io/v1/tarefas1',
    'https://62a4da7d47e6e4006399353b.mockapi.io/v1/tarefas2',
    'https://62a4da7d47e6e4006399353b.mockapi.io/v1/tarefas3',
]
const promises = endpoints.map(url => fetch(url).then(res => res.json()))

async function a() {
    let resultado = await Promise.all(promises)
    console.log(resultado)
}

a()