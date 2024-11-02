const sobre = document.querySelector("#sobremim")

sobre.addEventListener("mouseover", ()=>{
    document.querySelector("#play").style.opacity ="1"
})

sobre.addEventListener("mouseout",()=>{
    document.querySelector("#play").style.opacity ="0"
})

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

document.getElementById('MainMenu').addEventListener('click', function(event) {
    event.preventDefault();
    const ImagemComp = document.getElementById('ImagemComp');
    ImagemComp.scrollIntoView({behavior: 'smooth'});
});
document.getElementById('Gotopic').addEventListener('click', function(event) {
    event.preventDefault();
    const topic = document.getElementById('topic');
    topic.scrollIntoView({behavior: 'smooth'});
});
document.getElementById('GoComp').addEventListener('click', function(event) {
    event.preventDefault();
    const Comp = document.getElementById('Comp');
    Comp.scrollIntoView({behavior: 'smooth'});
});
document.getElementById('GoSaibaMais').addEventListener('click', function(event) {
    event.preventDefault();
    const SaibaMais = document.getElementById('SaibaMais');
    SaibaMais.scrollIntoView({behavior: 'smooth'});
});

const modal = document.getElementById("myModal");


const openModal = document.getElementById("openModal");


const closeModal = document.getElementsByClassName("close")[0];

document.getElementById('Contatos').addEventListener('click', function(event){
    event.preventDefault();
    const lista2 = document.getElementById('lista2');
    lista2.scrollIntoView({behavior: 'smooth'});
});

openModal.onclick = function(event) {
    event.preventDefault();
    modal.style.display = "block";
}


closeModal.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clica fora do modal, também fecha
// window.onclick = function(event) {
//     if (event.target === modal) {
//         modal.style.display = "none";
//     }
// }

const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const modalContent = document.getElementById('modalContent');


document.getElementById('link1').onclick = function(event) {
    event.preventDefault();
    modalTitle.innerText = 'Prazer,  Diogo Rodrigues';
    modalText.innerText = 'Como um programador iniciante, anseio a evolução a cada dia, sempre buscando ser melhor. Estou à procura de oportunidades que me permitam desenvolver ainda mais minhas habilidades e expandir ainda mais meus conhecimentos. ';
    modalContent.style.backgroundImage = "url('Imagem do WhatsApp de 2024-07-12 às 10.25.16_2c42e3e4.jpg')";
   
}

document.getElementById('link2').onclick = function(event) {
    event.preventDefault();
    modalTitle.innerText = 'Localização';
    modalText.innerText = 'Belo Horizonte, MG, 30494-005 ' + '\n Rua Teofilo Filho, 285 '  + '\n Casa';
    modalContent.style.backgroundImage = "url('71bhnNHypaL.png')"
}

