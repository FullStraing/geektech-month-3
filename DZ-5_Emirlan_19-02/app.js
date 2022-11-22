const som = document.querySelector("#som")
const usd = document.querySelector("#usd")
const euro = document.querySelector("#euro")
        
    
const convert = (elem,elem2,elem3) => { 
   
    elem.addEventListener("input", () => {
      
    const request = new XMLHttpRequest()
    request.open("GET", "data.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.addEventListener('load',()=>{
      const current = elem.value
      const us = JSON.parse(request.response).usd
      const eur = JSON.parse(request.response).euro
      if(elem===som){
        elem2.value = (current/us).toFixed(2)
        elem3.value = (current/eur).toFixed(2)
      }else if( elem === usd ){
        elem2.value = (current*us).toFixed(2)
        elem3.value = ((current*us)/eur).toFixed(2)
      }else if( elem === euro){
        elem2.value = (current*eur).toFixed(2)
        elem3.value = ((current*eur)/us).toFixed(2)
      }
      if(current===''){
        elem2.value =''
        elem3.value =''
      }

    })
    }
    )
}

convert(som, usd, euro)
convert(usd, som,euro)
convert(euro, som,usd)