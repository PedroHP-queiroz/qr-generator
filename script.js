const container = document.querySelector('.container'),
qrInput = container.querySelector('.form input'),
generateBtn = document.querySelector('.form button'),
qrImg = container.querySelector('.qr-code .img')

generateBtn.addEventListener('click', () => {
    let qrValue = qrInput.value
    if(!qrValue){
        alert('Insira uma URL ou texto para gerar um QR Code!')
        return
    }
    generateBtn.innerText = "Gerando um QR Code..."

    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrInput}`
    qrImg.addEventListener('load', () => {
        generateBtn.innerText = "Gerar QR Code"
        container.classList.add('active')
    })
})

qrInput.addEventListener('keyup', () => {
    if(!qrInput){
        container.classList.remove('active')
    }
})