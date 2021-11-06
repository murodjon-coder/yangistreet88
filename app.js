


const product = {
  plainBurger: {
      name: 'GAMBURGER',
      price: 10000,
      amount: 0,
      get sum(){
         return this.amount * this.price
      }
  },
  freshBurger: {
      name: 'GAMBURGER FRESH',
      price: 25000,
      amount: 0,
      get sum(){
          return this.amount * this.price
       }
  },
  freshCombo: {
      name: 'FRESH COMBO',
      price: 31900,
      amount: 0,
      get sum(){
          return this.amount * this.price
       }
  }
}

const btnPlusMns = document.querySelectorAll('.main__product-btn');

for (let i = 0; i < btnPlusMns.length; i++) {
  btnPlusMns[i].addEventListener('click', function() {
      addOrSub (this);
  })  
}

function addOrSub (element ){
const parent = element.closest('.main__product');
const price = parent.querySelector('.main__product-price span');
const parentId = parent.getAttribute('id');
const elementSymbol = element.getAttribute('data-symbol');
const output = parent.querySelector('.main__product-num');


if(elementSymbol == '+'){

   product[parentId].amount++;

} else if
(elementSymbol == '-' && product[parentId].amount > 0)
{
  product[parentId].amount--;
}
  // price.innerHTML = product[parentId].parent.prace
  price.innerHTML = product[parentId].sum

  output.innerHTML = product[parentId].amount
}

// deliver
const deliver = document.querySelector('.addCart');
const receipt = document.querySelector('.receipt')
const rWindow = document.querySelector('.receipt__window');
const rWindowOut = document.querySelector('.receipt__window-out');
const pulKJ = document.querySelector('.receipt__window-title');

deliver.addEventListener('click', function(){
 let menu = 'ZAKAZINGIZ: \n\n'
 let narx =  'mahsulot jami narhi' + ' :  ' +  (product.plainBurger.sum + product.freshBurger.sum + product.freshCombo.sum);

 for(key in product){
      for(key2 in product[key]){
          if(product[key].amount > 0 && key2 == 'amount' ){
             menu +=  `${product[key].name} , ${product[key].amount + "ta"} \n `
             pulKJ.innerHTML = narx
                 }
               
               
  }

 
}
  receipt.style.display = 'flex'; 
  setTimeout(() => {
      receipt.style.opacity = '1';
      rWindow.style.top = '0';

 }, 300)

 rWindowOut.innerHTML = menu
 
 

})
const pay = document.querySelector('.receipt__window-btn')
pay.addEventListener('click',function(){
  receipt.style.display ='none',
  deliver.style.display ='flex'
})