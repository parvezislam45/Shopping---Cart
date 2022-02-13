function mainFunction(product,price,isAdd){
    const productInput = document.getElementById(product +'-value');
    let productValue = productInput.value;
    if(isAdd){
        productValue = parseInt(productValue) + 1;
    }
    else if(productValue > 0){
        productValue = parseInt(productValue) - 1;
    }
    productInput.value = productValue;
    const Total = document.getElementById(product +'-Update');
    Total.innerText =productValue *price;
    calculate();
}
function totalCalculation(product){
    const productInput = document.getElementById( product +'-value')
    const productValue = parseInt(productInput.value);
    return productValue;
}
function calculate(){
    const phoneTotal = totalCalculation('phone') *1229;
    const caseTotal = totalCalculation('case') * 39;
    const subTotal = phoneTotal + caseTotal;
    const tex = subTotal / 10;
    const Total = subTotal + tex;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tex-total').innerText = tex;
    document.getElementById('price-total').innerText = Total;
   
}
document.getElementById('button-plus').addEventListener('click', function(){
   mainFunction('phone',1229,true);
})
document.getElementById('button-minus').addEventListener('click', function(){
    mainFunction('phone',1229,false);
})
document.getElementById('increase-plus').addEventListener('click', function (){
   mainFunction('case',59,true);
})
document.getElementById('increase-minus').addEventListener('click', function (){
    mainFunction('case',59,false);
})