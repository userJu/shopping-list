const items = document.querySelector('.items')
const input = document.querySelector('.footer__input')
const addBtn = document.querySelector('.footer__button')

function onAdd(){
    // 1. 사용자가 입력한 txt를 받아옴
    const text = input.value;
    console.log(text)
    // 2. 받아온 txt를 이용해서 새로운 아이템을 만듦(텍스트 + 삭제)
    // 3. items 컨테이너안에 새로 만든 아이템을 추가한다
    // 4. input을 초기화시킨다
}
onAdd()