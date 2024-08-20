document.getElementById('userType').addEventListener('change', function() {
    const userType = this.value;
    const dadosAdicionais = document.getElementById('dadosAdicionais');

    dadosAdicionais.innerHTML = ''; 

    if (userType === 'student') {
        dadosAdicionais.innerHTML = `
            <label for="dataNascimento">Data de Nascimento<span style="color: red;">*</span>: </label>
            <input class="input_cadastro" type="date" id="dataNascimento" name="dataNascimento" required>
        `;
    } else if (userType === 'teacher') {
        dadosAdicionais.innerHTML = `
            <label for="especializacao">Especialização<span style="color: red;">*</span>: </label>
            <input class="input_cadastro" type="text" id="especializacao" name="especializacao" required>
        `;
    }
});


document.getElementById('tela_cadastro').addEventListener('submit', async function (){
    event.preventDefault();

    const userName = document.getElementById('name').value;

    let URL_api;
    let data; 

    if (userType === 'student'){
        URL_api = 'https://web-production-e0f5.up.railway.app/aluno/cadastrar';

        const dataNascimento = document.getElementById('dataNascimento').value;
        const dataFormatada = new Date(dataNascimento).toISOString().split('T')[0];
        data = {
            name: userName,
            date: dataFormatada
        };
    } else if (userType === 'teacher'){
        URL_api = 'https://web-production-e0f5.up.railway.app/professor/cadastrar'

        data = {
            name: userName,
            especializacao: document.getElementById('especializacao').value
        };
    }

    try {
        const response = await fetch(URL_api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const result = await response.json();

        if(result.success){
            window.location.href = '../index.html';
        } else {
            alert('Cadastro Falhou: ', result.message);
        }
    } catch(error){
        console.error('erro', error)
        alert('Ocorreu um erro ao tentar fazer o cadastro')
    }
})