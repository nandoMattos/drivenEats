// Main Functions

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


function closeOrder() {
    const menuArray = document.querySelectorAll(`.checked`);
    const modalText = document.querySelector(`#modal-text`); 
    modalText.children[3].children[1].innerHTML = 0;
    
    // Armazena o nome e o preço das opções selecionadas
    let modalItem;
    let modalItemPrice;
    let menuItem;
    let menuItemPrice;
    let formattedString;
    
    for (let i = 0; i < 3; i++) {
        
        menuItem = menuArray[i].children[1].children[0];
        menuItemPrice = menuArray[i].children[1].children[2];  
        formattedString = menuItemPrice.textContent.replace("R$", "");
        
        
        modalItem = modalText.children[i].children[0];
        modalItemPrice = modalText.children[i].children[1]
        
        modalItemPrice.textContent = formattedString;
        modalItem.textContent = menuItem.textContent;
        
        incrementsTotal(formattedString) 
    }
    
    const modalWindow = document.querySelector(`.modal`);
    modalWindow.classList.remove("hidden");
}

function confirmOrder() {
    const arrayOpt = document.querySelectorAll('.checked');
    const prato = arrayOpt[0].children[1].children[0].innerHTML;
    const bebida = arrayOpt[1].children[1].children[0].innerHTML;
    const sobremesa = arrayOpt[2].children[1].children[0].innerHTML;

    const total = (document.querySelector('#modal-text').children[3].children[1].innerHTML).replace("$", "$ ").replace(",", ".");

    const str = `Olá, gostaria de fazer o pedido:\n- Prato: ${prato}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal: ${total}`
    
    const strEncode = encodeURIComponent(str);
    console.log(strEncode)

    window.open(`https://wa.me/5514997928787?text=${strEncode}`)
}

function cancelOrder() {
    const modal = document.querySelector(`.modal`);
    modal.classList.add("hidden");
}

// Auxiliary Functions

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

function incrementsTotal(priceString){
    const modalTotal = document.querySelector("#modal-text").children[3].children[1];
    let modalTotalPrice = Number(modalTotal.textContent.replace("R$", "").replace(",", '.'));

    modalTotalPrice += Number(priceString.replace(',', '.'));
    
    modalTotal.textContent = `R$${modalTotalPrice.toFixed(2).replace(".", ",")}`;
}