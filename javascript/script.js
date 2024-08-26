function showIframe(link){
    var iframe = document.getElementById("contentIframe"); 
    iframe.src = link.href; 
    iframe.style.display = iframe.style.display === "none"? "block": "none"; 
}

document.getElementById('open_btn').addEventListener('click', function (){
    document.getElementById('navbar').classList.toggle('open_navbar')
})

document.addEventListener('DOMContentLoaded', async ()=>{
    const userName = sessionStorage.getItem('userName');
    const userType = sessionStorage.getItem('userType');

    if(userName){
        document.querySelector("#descricao_usuario .descricao:first-child").textContent = userName;
        document.querySelector("#descricao_usuario .descricao:last-child").textContent = userType;
    }else {
        window.location.href = "../index.html"
    }

    if(userType === "professor"){
        document.getElementById("side_itens").innerHTML = `
        <li class="side_itens active">
            <a href="paginaInicial.html" onclick="showIframe(this); return false;">
                <i class="bi bi-houses"></i>
                <span class="descricao">
                    Pagina Inicial
                </span>
            </a>
        </li>
        <li class="side_itens">
            <a href="cadastrarNotas.html" onclick="showIframe(this); return false;">
                <i class="bi bi-journal-richtext"></i>
                <span class="descricao">
                    Cadastrar Notas
                </span>
            </a>
        </li>`
    } else if (userType === "aluno"){
        document.getElementById("side_itens").innerHTML = `
        <li class="side_itens active">
            <a href="paginaInicial.html" onclick="showIframe(this); return false;">
                <i class="bi bi-houses"></i>
                <span class="descricao">
                    Pagina Inicial
                </span>
            </a>
        </li>
        <li class="side_itens">
            <a href="tabelaNotas.html" onclick="showIframe(this); return false;">
                <i class="bi bi-table"></i>
                <span class="descricao">
                    Tabela de Notas
                </span>
            </a>
        </li>
        <li class="side_itens">
            <a href="materiasProfessores.html" onclick="showIframe(this); return false;">
                <i class="bi bi-backpack3"></i>
                <span class="descricao">
                    Materias e Professores
                </span>
            </a>
        </li>`
    }
});


document.getElementById("logout_btn").addEventListener("click", function (){
    sessionStorage.clear();

    window.location.href = "../index.html";
});