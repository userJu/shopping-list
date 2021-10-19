const items = document.querySelector('.items')
const footerBtn = document.querySelector('.footer__button')
const footerInput = document.querySelector('.footer__input')

function manageItem(){
    const value = footerInput.value
    if(value === ""){
        footerInput.focus()
        return;
    }
    loadItem(value)
    footerInput.value=""
    footerInput.focus()
    
}

function loadItem(value){
    const li = document.createElement('li')
    li.setAttribute('class', 'item__row')
    
    const div = document.createElement('div')
    div.setAttribute('class', 'item')

    const span = document.createElement('span')
    span.setAttribute('class', 'item__name')
    span.innerText=value;

    const deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('class', 'item__delete')
    deleteBtn.innerHTML=`<i class="fas fa-trash-alt"></i>`
    deleteBtn.addEventListener('click',()=>{
        li.remove()
    })

    const lastLine = document.createElement('div')
    lastLine.setAttribute('class', 'item__divider')

    items.appendChild(li)
    li.appendChild(div)
    div.appendChild(span)
    div.appendChild(deleteBtn)
    li.appendChild(lastLine)

    return li;

}

footerInput.addEventListener('keydown',(e)=>{
    if(e.key === "Enter"){
        manageItem();
    }else{
        return;
    }
})


footerBtn.addEventListener('click', ()=>{
    manageItem();

})

