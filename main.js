const url = 'https://api.adviceslip.com/advice'

function getAdvice() {
  axios.get(url)
  .then(res => {
    advice.textContent = res.data.slip.advice
    adviceId.textContent = `Advice #${res.data.slip.id}`
  })
  .catch(error => console.log(error))
}

getAdvice()

const diceBtn = document.getElementById('diceBtn')

diceBtn.addEventListener('click', getAdvice)
