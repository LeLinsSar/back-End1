const btnCalculator = document.getElementById('button')

btnCalculator.addEventListener('click', ()=>{
const input = document.getElementById('input')
const resultado = document.querySelector('.output')
const raiz = input.value

if(raiz === ''){
  alert("DIGITE ALGO")
}else if( Math.sqrt(input.value) % 1){
    resultado.textContent = `Não tem raiz exata para ${raiz}`
}
else{
    resultado.textContent = `${ Math.sqrt(input.value)}`
}

})