let reg = /['!@#$%^&*()']/;
let string = document.querySelector('.global__input');

string.oninput = function() {
    this.value = this.value.replace(reg, '');
}

$(document).ready(function (){
    $(".header__burger").click(function(){
        $(".header__nav").toggleClass("header__nav--open")
        $(".header__line:nth-child(1)").toggleClass("header__line--first")
        $(".header__line:nth-child(2)").toggleClass("header__line--middle")
        $(".header__line:nth-child(3)").toggleClass("header__line--last")
    })

})