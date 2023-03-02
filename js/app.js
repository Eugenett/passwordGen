const passwordValue = document.querySelector('.passwordValue'),
      passwordRange = document.querySelector('.passwordRange'),
      rangeCurrentValue = document.querySelector('.rangeCurrentValue'),
      generateBtn = document.querySelector('.generateBtn');

const allowedChars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const arrayChars = allowedChars.split('') 

const handleValue = (event) => {
    const {name, value} = event.target;

    rangeCurrentValue.innerText = passwordRange.value

    return {
        [name]: value
    }
}

const handlePass = (event) => {
    event.preventDefault()
    let randomArr = []

    for(let i = 0; i < passwordRange.value; ++i) {
        let random = Math.floor(Math.random() * arrayChars.length)
        randomArr = [...randomArr, arrayChars[random]]
    }
    passwordValue.value = randomArr.join('')
}

passwordRange.addEventListener('input', handleValue)
passwordValue.addEventListener('input', handleValue)
generateBtn.addEventListener('click', handlePass)