document.getElementById('userType').addEventListener('change', function() {
    const userType = this.value;
    const dadosAdicionais = document.getElementById('dadosAdicionais');

    dadosAdicionais.innerHTML = ''; 

    if (userType === 'aluno') {
        dadosAdicionais.innerHTML = `
            <label for="dataNascimento">Data de Nascimento<span style="color: red;">*</span>: </label>
            <input class="input_cadastro" type="date" id="dataNascimento" name="dataNascimento" required>
        `;
    } else if (userType === 'professor') {
        dadosAdicionais.innerHTML = `
            <label for="especializacao">Especialização<span style="color: red;">*</span>: </label>
            <input class="input_cadastro" type="text" id="especializacao" name="especializacao" required>
        `;
    }
});

document.getElementById('form_cadastro').addEventListener('submit', async function(event){
    event.preventDefault();

    const userName = document.getElementById("name").value;
    const userType = document.getElementById("userType").value;

    let URL;
    let json;

    if(userType === 'aluno'){
        URL = 'https://web-production-e0f5.up.railway.app/aluno/cadastrar';
        const dataNascimento = document.getElementById("dataNascimento").value; 
        json = {
            name: userName,
            date: dataNascimento
        };
    } else if (userType === 'professor'){
        URL = 'https://web-production-e0f5.up.railway.app/professor/cadastrar';
        const especializacao = document.getElementById("especializacao").value;
        json = {
            name: userName,
            especializacao: especializacao
        };
    }

    try{
        const resp = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },

            body: JSON.stringify(json)
        });

        const data = await resp.json();

        if(resp.ok === true){
            alert(`${userType === 'aluno' ? 'Aluno' : 'Professor'} cadastrado com sucesso!`);
            window.location.href = '../html/navegacao.html';
        } else if (resp.ok === false){
            alert('Erro: ' + (data.error || data.ERRO || 'Ocorreu um erro ao se cadastrar!'));
        }
    }catch(error) {
        alert("Erro: " + error.message);
    }
});
