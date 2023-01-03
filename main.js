let weight = document.querySelector('.weight');
let red = document.querySelector('.red');
let green = document.querySelector('.green');
let blue = document.querySelector('.blue');
let colors = document.querySelector('.colors')
colors.style.display = 'none'

weight.addEventListener('input',(e)=>{
    colors.style.display = '';
    let value = weight.value;
    red.innerHTML = `<p class="inside">Kilograms: ${(value/1000).toFixed(3)} Kg`;
    green.innerHTML = `<p class="inside">Pounds: ${(value*0.0022).toFixed(3)} Lb`;
    blue.innerHTML = `<p class="inside">Ounces: ${(value/28.35).toFixed(3)} Oz`;
})
