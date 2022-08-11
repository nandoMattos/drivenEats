function check(menuId, optId) {
    
    const menu = document.getElementById(`menu${menuId}`);

    const opt = document.getElementById(`opt${optId}`);

    const optAmount = menu.childElementCount;

    for (let i = 0; i < optAmount; i++){
        if(menu.children[i].classList.contains('checked')){
            menu.children[i].classList.remove('checked');
        }
    }
        
    opt.classList.add('checked');
}