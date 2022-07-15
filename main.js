alert('inspiração em https://www.feis.unesp.br/#!/departamentos/fisica-e-quimica/graduacao-e-pos-graduacao/curso-de-graduacao-em-fisica/')
menu = document.getElementsByClassName('vertical')[0];
let menuopen = false;

function opener(){
    if(!menuopen){
        menu.style.left = '0';
        menuopen = true
    }else{
        menu.style.left = '';
        menuopen = false;
    }
}