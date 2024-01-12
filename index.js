const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')

// $checkbox.addEventListener('change', function() {
//     $html.classList.toggle('light-mode')
// })

//
AOS.init();


function changeMode() {
    $html.classList.toggle('light-mode');
}

function changeIcon() {
    if (switchButton.classList.contains("fa-moon")){
        switchButton.classList.remove("fa-moon") || switchButton.classList.add("fa-sun")
    } else {
        switchButton.classList.remove("fa-sun") || switchButton.classList.add("fa-moon") 
    } 
}  