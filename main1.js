const items = document.querySelector('.items')
const form = document.querySelector('.new__form')
const footerBtn = document.querySelector('.footer__button')
const footerInput = document.querySelector('.footer__input')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    manageItem()
})

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

let id = 0 // UUID같은 고유한 ID를 쓰거나 오브젝트에 있는 해시 코드를 이용해서 고유하게 만드는게 좋긴 하다. 배포레벨이 아니기 때문에 간단하게 숫자 변수로 시행
function loadItem(value){
    const li = document.createElement('li')
    li.setAttribute('class','item__row')
    li.setAttribute('data-id',id)
    li.innerHTML = `
            <div class="item">
                <span class="item__name">${value}</span>
                <button class="item__delete"><i class="fas fa-trash-alt" data-id =${id}></i></button>
            </div>
            <div class="item__divider"></div>
            `
        id++;
        
    items.appendChild(li);



    // const div = document.createElement('div')
    // div.setAttribute('class','item')

    // const span = document.createElement('span')
    // span.setAttribute('class','item__name')
    // span.innerHTML=value;

    // const deleteBtn = document.createElement('button')
    // deleteBtn.setAttribute('class','item__delete')
    // deleteBtn.innerHTML=`<i class="fas fa-trash-alt"></i>`
    // deleteBtn.addEventListener('click', ()=>{
    //     li.remove()
    // })

    // const divider = document.createElement('div')
    // divider.setAttribute('class','item__divider')

    // items.appendChild(li)
    // li.appendChild(div)
    // div.appendChild(span)
    // div.appendChild(deleteBtn)
    // li.appendChild(divider)
    
}


items.addEventListener('click', (e)=>{
    const id = e.target.dataset.id
    if(id){
        const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`)
        toBeDeleted.remove();
    }
})