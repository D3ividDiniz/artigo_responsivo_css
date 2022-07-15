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