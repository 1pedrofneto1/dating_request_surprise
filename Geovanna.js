// Open and Close Messages
const messages = {
    open_second_message(){
        window.document.querySelector('.first.button').classList.remove('active')
        window.document.querySelector('.second.text').classList.add('active')
        window.document.querySelector('.second.button').classList.add('active')
    },
    open_third_message(){
        window.document.querySelector('.third.text').classList.add('active')
        window.document.querySelector('.third.button').classList.add('active')
        window.document.querySelector('.second.button').classList.remove('active')
    },
    open_fourth_message(){
        window.document.querySelector('.fourth.text').classList.add('active')
        window.document.querySelector('.third.button').classList.remove('active')
    },
}
