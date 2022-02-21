const clickBtn = document.querySelector('.click')
const addBtn = document.querySelector('.btn-add')
const removeBtn = document.querySelector('.btn-remove')

const onTargetButtonclick = function(){
    console.log('click on tanget button');
}

addBtn.addEventListener('click', () => {
    console.log('click on add event listener');

    clickBtn.addEventListener('click', onTargetButtonclick)
})

removeBtn.addEventListener('click', ()=> {
    console.log('click on remove event listener');

    clickBtn.removeEventListener('click', onTargetButtonclick)
})