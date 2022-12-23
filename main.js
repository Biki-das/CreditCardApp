import './style.css'
import masterCardImage from './Assests/icons8-mastercard-logo-48.png'
import visaCardImage from './Assests/icons8-visa-48.png'
import discoverCardImage from './Assests/icons8-discover-card-48.png'
import dinersClubCardImage from './Assests/icons8-diners-club-48.png'
import AmexCardImage from './Assests/icons8-american-express-48.png'
import defaultCardlogoImg from './Assests/card-logo.svg'

const cardNumberText = document.querySelector("#card-num")
const cardNumberInput = document.querySelector("#card-number-input")
const cardNumberBlankErrText = document.querySelector("#card-num-blank-error")

const cardNameText = document.querySelector("#card-name")
const cardNameInput = document.querySelector("#card-name-input")
const cardNameErrText = document.querySelector("#card-name-err-text")
const cardNameBlankErrText = document.querySelector("#card-name-blank-error")

const cvvText = document.querySelector("#card-cvv-num")
const cvvTextInput = document.querySelector("#card-cvv-input")
const cvvErrText = document.querySelector("#cvv-err-text")
const cvvBlankErrText = document.querySelector("#cvv-blank-error")


const cardMonthText = document.querySelector('#card-expiry-month')
const cardMonthInput = document.querySelector('#card-month-input')
const cardMonthBlankErrText = document.querySelector("#card-month-blank-error")

const cardYearText = document.querySelector("#card-expiry-year")
const cardYearInput = document.querySelector("#card-year-input")
const cardYearRegPattern = new RegExp(/^\d{2}$/)
const cardYearErrtext = document.querySelector("#year-err-text")
const cardYearErrtext2 = document.querySelector("#year-err-2-text")
const cardYearBlankErrText = document.querySelector("#card-year-blank-error")

const year = new Date().getFullYear()
const currYearStr = String(year).substring(2)
const currYearValue =  parseInt(currYearStr)


const regNamePattern = new RegExp(/^[a-z ,.'-]+$/i)
const cvvPattern = new RegExp(/^[0-9]{3}$/)

const cardLogo = document.querySelector("#card-logo")
const amexLogo = document.querySelector("#amex-logo")
const discoverLogo = document.querySelector("#discover-logo")
const dinerLogo = document.querySelector("#diner-logo")
const masterCardLogo = document.querySelector("#mastercard-logo")
const visaLogo = document.querySelector("#visa-logo")


const formContainer = document.querySelector("#form-container")
const form = document.querySelector("#form")
const formSubBtn = document.querySelector("#confirm-btn")
const continueBtn = document.querySelector("#continue-btn")
const completedFormModal = document.querySelector("#Form-complete-modal")

let cardNumValue = "";
let cardNameValue = "";
let cardMonthValue = "";
let cardYearValue = "";
let cardCvvValue = "";


cardNumberInput.addEventListener("input",cardNumInputFunc)
cardNameInput.addEventListener("input",cardNameInputFunc)
cvvTextInput.addEventListener("input",cardCvvInputFunc)
cardMonthInput.addEventListener("input",cardMonthInputFunc)
cardYearInput.addEventListener("input",cardYearInputFunc)
formSubBtn.addEventListener("click",formSubmit)
continueBtn.addEventListener("click",formReset)



var cleave = new Cleave('#card-number-input', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
        type === "mastercard" ? (masterCardLogo.classList.remove("hidden"), (cardLogo.src=masterCardImage)) : (masterCardLogo.classList.add("hidden"), (cardLogo.src=defaultCardlogoImg))
        type === "visa" ? (visaLogo.classList.remove("hidden"), (cardLogo.src=visaCardImage)) : visaLogo.classList.add("hidden")
        type === "discover" ? (discoverLogo.classList.remove("hidden"), (cardLogo.src=discoverCardImage)) : discoverLogo.classList.add("hidden")
        type === "amex" ? (amexLogo.classList.remove("hidden"), (cardLogo.src=AmexCardImage)) : amexLogo.classList.add("hidden")
        type === "diners" ? (dinerLogo.classList.remove("hidden"), (cardLogo.src=dinersClubCardImage)) : dinerLogo.classList.add("hidden")
    }
})

var cleave = new Cleave("#card-month-input", {
    date: true,
    datePattern: ['m']
    
})



function cardNumInputFunc(e) {
cardNumValue = e.target.value
cardNumberText.textContent = cardNumValue
if(e.target.value === ""){
    cardNumberText.textContent = "0000 0000 0000 0000"
    cardNumberInput.classList.remove("animate-shake")
    cardNumberInput.style = null
}

else if(e.target.value !== ""){
    cardNumberBlankErrText.classList.add("hidden")
    cardNumberInput.style = null
}

getCardDetails()
}

function cardNameInputFunc(e){

cardNameValue = e.target.value

if(regNamePattern.test(e.target.value)){
    cardNameText.textContent = cardNameValue.toUpperCase()
    cardNameErrText.classList.add("hidden")

}else{
    cardNameErrText.classList.remove("hidden")
}

!regNamePattern.test(cardNameValue) ? (cardNameInput.style.border = "1px solid red", cardNameInput.classList.add("animate-shake"))  : (cardNameInput.style.border="",cardNameInput.classList.remove("animate-shake"))



if(cardNameValue === ""){
    cardNameText.textContent = "JANE APPLESEED"
    cardNameErrText.classList.add("hidden")
    cardNameInput.style = null
    cardNameInput.classList.remove("animate-shake")
}

else if(cardNameValue !== ""){
    cardNameBlankErrText.classList.add("hidden")
}

getCardDetails()

}


function cardCvvInputFunc(e){
   cardCvvValue = e.target.value 
 if(cvvPattern.test(cardCvvValue)){
    cvvText.textContent = cardCvvValue
    cvvErrText.classList.add("hidden")
 }else{
    cvvErrText.classList.remove("hidden")
 }

 !cvvPattern.test(e.target.value) ? (cvvTextInput.style.border = "1px solid red", cvvTextInput.classList.add("animate-shake")) : (cvvTextInput.style.border = "", cvvTextInput.classList.remove("animate-shake"))
 
 if(cardCvvValue === ""){
    cvvText.textContent = "000"
    cvvErrText.classList.add("hidden")
    cvvTextInput.classList.remove("animate-shake")
    cvvTextInput.style = null

 }
 else if(cardCvvValue !== ""){
    cvvBlankErrText.classList.add("hidden")
 }

 getCardDetails()

}

function cardMonthInputFunc(e) {
    cardMonthValue = e.target.value.substring(0,2)
    parseFloat(e.target.value) <= 9 ? cardMonthText.textContent=`0${cardMonthValue}` : cardMonthText.textContent=`${cardMonthValue}` 
    if(cardMonthValue === ""){
        cardMonthText.textContent = "12"
        cardMonthInput.style = null
        cardMonthInput.classList.remove("animate-shake")
    } else if(cardMonthValue !== ""){
        cardMonthBlankErrText.classList.add("hidden")
        cardMonthInput.style = null
    }

    getCardDetails()
}

function cardYearInputFunc(e) {
   cardYearValue = e.target.value 
  if(cardYearRegPattern.test(cardYearValue)){
    parseFloat(cardYearValue) >= currYearValue ? cardYearText.textContent = `${e.target.value}` : cardYearText.textContent = `22`
  }

  !cardYearRegPattern.test(cardYearValue) ? (cardYearInput.style.border="1px solid red", cardYearErrtext.classList.remove("hidden"), cardYearInput.classList.add("animate-shake")) : (cardYearInput.style.border = null, cardYearErrtext.classList.add("hidden", cardYearInput.classList.remove("animate-shake")))

  parseFloat(cardYearValue) >= currYearValue ? cardYearErrtext2.classList.add("hidden") : cardYearErrtext2.classList.remove("hidden")

  if(cardYearValue === ""){
    cardYearInput.style = null
    cardYearInput.classList.remove("animate-shake")
    cardYearErrtext.classList.add("hidden")
    cardYearErrtext2.classList.add("hidden")
  } else if(cardYearValue !== ""){
    cardYearBlankErrText.classList.add("hidden")
  }

  getCardDetails()
}

function getCardDetails() {
  return (cardNameValue,cardNumValue,cardMonthValue,cardYearValue,cardCvvValue)
}

function formSubmit(e) {
e.preventDefault()    
getCardDetails()


cardNameValue === "" ? (cardNameBlankErrText.classList.remove("hidden"),cardNameInput.classList.add("animate-shake"),cardNameInput.style.border="1px solid red") : (cardNameBlankErrText.classList.add("hidden"),cardNameInput.classList.remove("animate-shake"))
cardNumValue === "" ? (cardNumberBlankErrText.classList.remove("hidden"),cardNumberInput.classList.add("animate-shake"),cardNumberInput.style.border="1px solid red") : (cardNumberBlankErrText.classList.add("hidden"),cardNumberInput.classList.remove("animate-shake"))
cardMonthValue === "" ? (cardMonthBlankErrText.classList.remove("hidden"), cardMonthInput.classList.add("animate-shake"),cardMonthInput.style.border="1px solid red") : (cardMonthBlankErrText.classList.add("hidden"),cardMonthInput.style.border="")
cardYearValue === "" ? (cardYearBlankErrText.classList.remove("hidden"),cardYearInput.classList.add("animate-shake"),cardYearInput.style.border="1px solid red") : cardYearBlankErrText.classList.add("hidden")
cardCvvValue === "" ? (cvvBlankErrText.classList.remove("hidden"),cvvTextInput.classList.add("animate-shake"),cvvTextInput.style.border="1px solid red") : cvvBlankErrText.classList.add("hidden")


if(cardNameValue !== "" && cardNumValue !== "" && cardMonthValue !== "" && cardYearValue !== "" && cardCvvValue !== "" && cvvPattern.test(cardCvvValue) && cardYearRegPattern.test(cardYearValue) && regNamePattern.test(cardNameValue)){
    formContainer.classList.add("hidden")
    completedFormModal.classList.remove("hidden")
}
}


function formReset(e){
    e.preventDefault()
    formContainer.classList.remove("hidden")
    completedFormModal.classList.add("hidden")
    form.submit()
    form.reset()
    return false
}