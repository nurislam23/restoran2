function total() {
    let sum = 0;
    let prices = document.querySelectorAll(".price-420");
    let amounts = document.querySelectorAll(".menu-kol");
    for (let i = 0; i < prices.length; i++) {
        sum = sum + parseInt(prices[i].innerHTML) * parseInt(amounts[i].innerHTML);
    }
    document.getElementById("total").innerHTML = sum;
}

function add(element) {
    let num = element.closest(".chet");
    num.querySelector('.menu-kol').innerHTML =
        parseInt(num.querySelector('.menu-kol').innerHTML) + 1;
    total();
}

function minus(element) {
    let num = element.closest(".chet");
    num.querySelector('.menu-kol').innerHTML =
        parseInt(num.querySelector('.menu-kol').innerHTML) - 1;
    total();
}