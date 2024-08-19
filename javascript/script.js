function showIframe(link){
    var iframe = document.getElementById("contentIframe"); 
    iframe.src = link.href; 
    iframe.style.display = iframe.style.display === "none"? "block": "none"; 
}

document.getElementById('open_btn').addEventListener('click', function (){
    document.getElementById('navbar').classList.toggle('open_navbar')
})