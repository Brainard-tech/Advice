async function fetchAdvice(){
    try {
      let response = await fetch("https://api.adviceslip.com/advice");
      let data = await response.json();
      document.getElementById("advice").innerHTML = data.slip.advice;
    } catch (e) {
      console.log(`Error:${e.message}`)
    }
  }
  fetchAdvice();
  document.getElementById("enter").addEventListener("click",fetchAdvice)