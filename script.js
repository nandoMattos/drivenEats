function check(menuId, optId) {

    const menu = document.getElementById(`menu${menuId}`);
    const opt = document.getElementById(`opt${optId}`);
    icon = opt.children[2];

    const optAmount = menu.childElementCount;

    
    for (let i = 0; i < optAmount; i++){
        if(menu.children[i].classList.contains('checked')){
            menu.children[i].classList.remove('checked');
            menu.children[i].children[2].classList.add('hidden');
            
        }
    }
    
    opt.classList.add('checked');
    icon.classList.remove('hidden');
}