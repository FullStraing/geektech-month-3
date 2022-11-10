/*1) Используя регулярные выражения
  необходимо сделать поле для ввода формата ИНН -
  ппервыми цифрами должны быть либо 1 либо 2, а 
  затем еще 13 цифр (в общем должно быть 14 цифр).
*/


const innInp = document.querySelector('#innCheck');
const submitBtn = document.querySelector('#submit')
const result = document.querySelector('#resultINN')

const innRegExp = /^\d{14}$/;

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(innRegExp.test(innInp.value)){
        if(innInp.value[0] == '1'|| innInp.value[0] == '2'){
            result.innerText = 'VALID';
            result.style.color = 'green';
        }else {
            result.innerText = 'INVALID';
            result.style.color = 'red';
        }
    }else {
        result.innerText = 'INVALID';
        result.style.color = 'red';
    }
})

