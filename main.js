// Harm and status

const damageBar = document.getElementById('damage-bar')
const statusText = document.getElementById('status-text')
const harmText = document.getElementById('harm-text')
damageBarArray = []
let currentHarm = 4

// Draw 8 harm boxes 

function createDamageBar() {

    for(let i=0; i < 8; i++) {
        const squares = document.createElement('div')
        squares.classList.add('square')
        damageBar.appendChild(squares)
        damageBarArray.push(squares)
    }

}

createDamageBar()

// Display red boxes for number of harm

function drawHarm() {
    for(let i=0; i<currentHarm; i++) {
        damageBarArray[i].classList.add('harm')     
    }
    console.log()
}

drawHarm() 

// Display number of harm out of 8

function displayHarmText() {
    harmText.innerHTML = currentHarm + '/8'
}

displayHarmText()

// Show statuses based on number of harm

if (currentHarm < 3) {
    
    statusText.innerHTML = ''

} else if (currentHarm > 3) {

    statusText.innerHTML = 'Unstable'

} else if (currentHarm > 6) {
    statusText.innerHTML = "Almost Dead?"
}

// Dice and results

const rollButton = document.getElementById('roll-btn')
const rollMath = document.getElementById('roll-math')
const rollResults = document.getElementById('roll-results')

// Luck

const luckBar = document.getElementById('luck-bar')

luckBarArray = []

// Ratings variables/DOM elements

let charm = -1
let cool = 1
let sharp = 1
let tough = 0
let weird = 3

const charmText = document.getElementById('charm')
const coolText = document.getElementById('cool')
const sharpText = document.getElementById('sharp')
const toughText = document.getElementById('tough')
const weirdText = document.getElementById('weird')

// Show the ratings on the page

function displayStatsText() {

    charmText.textContent = `Charm: ${charm}`
    coolText.textContent = `Cool: ${cool}`
    sharpText.textContent = `Sharp: ${sharp}`
    toughText.textContent = `Tough: ${tough}`
    weirdText.textContent = `Weird: ${weird}`
    
}

displayStatsText()

// Basic 2d6 dice roller

function diceRoller() {
    const randomNum = (Math.floor(Math.random() * 6) + 1)
    // console.log(randomNum)
    return randomNum
}

rollButton.addEventListener("click", function() {
    const die1 = diceRoller()
    const die2 = diceRoller()
    const dieSum = die1 + die2

    rollMath.innerHTML = `${die1} + ${die2}`
    
    rollResults.innerHTML = `${dieSum}`
})

// Pre-set dice roll variables

const basicMoveResults = document.getElementById('basic-move-results')
const basicMoveMath = document.getElementById('basic-move-math')

const kickSomeAssButton = document.getElementById('kick-some-ass') 
const actUnderPressureButton = document.getElementById('act-under-pressure') 



// Basic move dice roll functions

const basicMoveArray = []


function basicRoll(type) {
    const die1 = diceRoller()
    const die2 = diceRoller()    
    const diceSum = die1 + die2
    const addType = diceSum + (type)

    return [die1, die2, diceSum, addType]
}

kickSomeAssButton.addEventListener("click", function() {
    basicMoveArray.push(basicRoll(tough))
        let lastRoll = basicMoveArray.length - 1
        basicMoveMath.innerHTML = `Kick Some Ass: 2d6 (${basicMoveArray[lastRoll][0]} + ${basicMoveArray[lastRoll][1]} = ${basicMoveArray[lastRoll][2]}) + Tough (${tough})` 
        
        basicMoveResults.innerHTML = `${basicMoveArray[lastRoll][3]}`

        eventLogArray.push(basicMoveMath.innerHTML)
        console.log(eventLogArray)
        
        updateLogText()
})


// Preset roll undo button

const undoButton = document.getElementById('undo')

// Event log

let eventLogArray = []
let eventLogText = document.getElementById('event-log')

eventLogArray.forEach(updateLogText)

function updateLogText(item) {
    eventLogText.innerHTML += `<li>${item}</li>`;
}

