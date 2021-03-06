const items = document.querySelector('.items')
const input = document.querySelector('.footer__input')
const addBtn = document.querySelector('.footer__button')

function onAdd(){
    // 1. 사용자가 입력한 txt를 받아옴
    const text = input.value;
    if(text === ''){
        input.focus();
        return;
    }
    // 2. 받아온 txt를 이용해서 새로운 아이템을 만듦(텍스트 + 삭제)
    const item = createItem(text);
    // 3. items 컨테이너안에 새로 만든 아이템을 추가한다
    items.appendChild(item)
    // + 새로 추가된 아이템으로 스크롤링
    item.scrollIntoView({block:'center'})
    // 4. input을 초기화시킨다
    input.value="";
    input.focus();
}

function createItem(text){
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row')

    const item = document.createElement('div');
    item.setAttribute('class', 'item')

    const span = document.createElement('span');
    span.setAttribute('class', 'item__name');
    span.innerText = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'item__delete');
    deleteBtn.innerHTML=`<i class="fas fa-trash-alt"></i>`
    deleteBtn.addEventListener('click', ()=>{
        items.removeChild(itemRow)
    })

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'item__divider');

    itemRow.appendChild(item)
    item.appendChild(span)
    item.appendChild(deleteBtn)
    itemRow.appendChild(itemDivider)
    return itemRow;

}

addBtn.addEventListener('click', ()=>{
    onAdd();
})

input.addEventListener('keypress',(event)=>{
    if(event.key === 'Enter'){
        onAdd();
    }
} )