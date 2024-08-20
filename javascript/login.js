document.getElementById('tela_login').addEventListener('submit', async function(event) {
    event.preventDefault(); 

    const userId = document.getElementById('Id').value;
    const userName = document.getElementById('name').value;
    const userType = document.getElementById('userType').value; 


    let URL_api;
    let usuario;
    if(userType === 'student'){
        URL_api = 'https://web-production-e0f5.up.railway.app/aluno/cadastrar';
        usuario = 'id_aluno';
    } else {
        URL_api = 'https://web-production-e0f5.up.railway.app/professor/cadastrar';
        usuario = 'id_professor';
    }
    

    const data = {
        [usuario]: userId, 
        name: userName,
    };

    fetch(URL_api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    .then(response => response.json())
    .then(result => {
        if (result.success){
            window.location.href = '../html/navegacao.html';
        } else {
            alert('Login Falhou: ' + result.message)
        }
    })
    .catch(erro => {
        console.error('Erro', erro)
        alert('Ocorreu um erro ao tentar fazer o login')
    })
})