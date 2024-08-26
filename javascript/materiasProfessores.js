document.addEventListener('DOMContentLoaded', async() => {

    try{

        const disciplinaURL = 'https://web-production-e0f5.up.railway.app/disciplina/listar';
        const professorURL = 'https://web-production-e0f5.up.railway.app/professor/listar';

        const disciplinaResponse = await fetch(disciplinaURL);
        const disciplinas = await disciplinaResponse.json();

        const professorResponse = await fetch(professorURL);
        const professores = await professorResponse.json();

        const disciplinaTableBody = document.querySelector("#tabelasDisciplinas tbody");

        disciplinas.forEach(disciplina => {
            const professor = professores.find(prof => prof.id_professor === disciplina.id_professor);

            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${disciplina.nome_disciplina}</td>
                <td>${disciplina.turma}</td>
                <td>${professor ? professor.nome : "professor não encontrado"}</td>
            `;

            disciplinaTableBody.append(row)
        });

    }catch(error) {
        console.log("erro ao buscar dados: ", error.message);
    }
});