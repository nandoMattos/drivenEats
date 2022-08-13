function check(menuId, opt) {
    const menu = document.querySelector(`#${menuId}`)
    icon = opt.children[2];
    
    const optAmount = menu.childElementCount;
    
    
    for (let i = 0; i < optAmount; i++){
        if(menu.children[i].classList.contains('checked')){
            menu.children[i].classList.remove('checked');
            menu.children[i].children[2].classList.add('hidden');   
        }
    }
    
    menu.classList.add('isChecked')
    opt.classList.add('checked');
    icon.classList.remove('hidden');
    
    verifyEnbaleButton();
}

function verifyEnbaleButton() {
    const menu1 = document.querySelector("#main-course-menu");
    const menu2 = document.querySelector("#drink-menu");
    const menu3 = document.querySelector("#dessert-menu");
    const botao = document.querySelector("#btn-order")

    if (menu1.classList.contains('isChecked') && 
        menu2.classList.contains('isChecked') && 
        menu3.classList.contains('isChecked')){
            
        botao.removeAttribute("disabled");
        botao.style.backgroundColor = "#32B72F";
        botao.innerHTML = "Fechar pedido";
    }
}

function closeOrder() {
    alert('fui clicado');
}