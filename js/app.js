const passwordOutput = document.querySelector('.passwordOutput'),
      passwordRange = document.querySelector('.passwordRange'),
      rangeCurrentValue = document.querySelector('.rangeCurrentValue'),
      generateBtn = document.querySelector('.generateBtn'),
      allowedChars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      arrayChars = allowedChars.split('') 

const handleValue = (event) => {
    const {name, value} = event.target;

    rangeCurrentValue.innerText = `${passwordRange.value} symbols`

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

    passwordOutput.innerHTML = randomArr.join('')
}

passwordRange.addEventListener('input', handleValue)
generateBtn.addEventListener('click', handlePass)