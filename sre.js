const buttom = document.getElementById('converter button')
const select = document.getElementById('palmeiras')
const dolar = 5.2
const euro2 = 5.9
const bct32 = 315.32363


const convertValue = () => {
    const inpuntr = document.getElementById("real").value
    const realValue = document.getElementById('real-value')
    const currenValue = document.getElementById('curren-value') 

realValue.innerHTML = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',})
    .format( inpuntr)
    if (select.value === "US$ Dólar americano") {
        currenValue.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',})
            .format( inpuntr / dolar)
    }
    if (select.value === "€ Euro") {
        currenValue.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',})
            .format( inpuntr / euro2)
            
        
    }
    if (select.value === "BTC Bitcoin") {
        currenValue.innerHTML = new Intl.NumberFormat('BTC', {
            style: 'currency',
            currency: 'BTC',})
            .format( inpuntr / bct32 )
            
        
    }
   

 
 
 

   
        
    


}
mudar =() =>{
    const euroName = document.getElementById("euro-name")
    const currentimg = document.getElementById("libertadoes")

    if (select.value === '€ Euro') {
        euroName.innerHTML = " Euro"
        currentimg.src ="euro1.png" 
        
    } 

   else if (select.value === 'US$ Dólar americano') {
        euroName.innerHTML = " Dólar americano"
        currentimg.src = "estados-unidos (1) 11 (1).jpg"
        
    }
    else{
    euroName.innerHTML = " BTC Bitcoin"
    currentimg.src =  "de.png"

    }

    
    
    
  
    convertValue()

}
   
 
buttom.addEventListener('click' ,  convertValue) 
select.addEventListener("change",  mudar)

