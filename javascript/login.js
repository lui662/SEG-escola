document.getElementById('tela_login').addEventListener('submit', async function(event) {
    event.preventDefault();  

    const userId = document.getElementById('userId').value;
    const userName = document.getElementById('userName').value;
    const userType = document.getElementById('userType').value;

    let data = {
        name: userName
    };

    if (userType === 'professor') {
        data.id_professor = userId;
    } else if (userType === 'aluno') {
        data.id_aluno = userId;
    } else {
        alert('Tipo de usuário não suportado.');
        return;
    }

    const url = 'https://web-production-e0f5.up.railway.app/login';

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const result = await response.json();
            alert('Login realizado com sucesso!');
            sessionStorage.setItem('userName', userName);
            sessionStorage.setItem('userType', userType);

            window.location.href = '../html/navegacao.html'; 
            
        }else{
            const errorData = await response.json();
            console.error('Erro na requisição:', errorData); 
            alert(`Erro: ${errorData.message || 'Não foi possível realizar o login.'}`);
        }
    } catch (error) {
        console.error('Erro ao tentar fazer o login:', error); 
        alert('Erro ao tentar fazer o login: ' + error.message);
    }
});

