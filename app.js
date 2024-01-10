const container = document.querySelector('.container')
const hexresult= document.getElementById('hexvalue')
const buttonChange = container.querySelector('.content .btn button')
const hexValue = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

buttonChange.addEventListener('click',function(){
    var randomNumber = hexValue[Math.floor(Math.random()*16)].toString()
    for(var i = 0;i<5;i++){
        randomNumber = randomNumber +  hexValue[Math.floor(Math.random()*16)].toString()
    }
    container.style.backgroundColor = `#${randomNumber}`
    hexresult.innerText = `#${randomNumber}`
})
