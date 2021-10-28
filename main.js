// Harm and status DOM elements

const harmBar = document.getElementById('harm-bar')
const harmStatusText = document.getElementById('harm-status-text')
const harmText = document.getElementById('harm-text')

const harmBarArray = []
let currentHarm = 4

// Display number of harm out of 8

function displayHarmText() {
    harmText.innerHTML = 'Harm: ' + currentHarm + '/8 🤕'
}

displayHarmText()

// Show statuses based on number of harm

if (currentHarm < 3) {
    
    harmStatusText.innerHTML = ''

} else if (currentHarm > 3) {

    harmStatusText.innerHTML = 'Status: Unstable'

} else if (currentHarm > 6) {
    harmStatusText.innerHTML = 'Almost Dead?'
}

// Dice and results DOM elements

const rollButton = document.getElementById('roll-btn')
const rollMath = document.getElementById('roll-math')
const rollResults = document.getElementById('roll-results')

// Luck DOM elements and variables

const luckBar = document.getElementById('luck-bar')
const luckText = document.getElementById('luck-text')
const luckStatusText = document.getElementById('luck-status-text')

const luckBarArray = []
let usedLuck = 1

// Display used luck out of 7

function displayLuckText() {
    luckText.innerHTML = 'Used Luck: ' + usedLuck + '/7 🍀'
}

displayLuckText()

// Experience DOM elements and variables

const experienceBar = document.getElementById('experience-bar')
const experienceText = document.getElementById('experience-text')
const experienceStatusText = document.getElementById('experience-status-text')

const experienceBarArray = []
let experience = 2
let level = 3

// Display experience out of 5 status

function displayExperienceText() {
    experienceText.innerHTML = 'Experience: ' + experience + '/5 ⚡'
    experienceStatusText.innerHTML = 'Level: ' + level
}

displayExperienceText()

// Function to draw the harm, luck, and experience bars

function drawBar(length, barName, barArray, barFill, barClassName, fillClassName, barClassName2) {

// draw the bar

    for (let i=0; i<length; i++) {
        const squares = document.createElement('div')
        squares.classList.add(barClassName, barClassName2)
        barName.appendChild(squares)
        barArray.push(squares)
    }
    
// fill the boxes

    for (let i=0; i<barFill; i++) {
        barArray[i].classList.add(fillClassName)
    }

}

// Create harm bar

drawBar(8, harmBar, harmBarArray, currentHarm, 'square', 'harm')

// Create luck bar

drawBar(7, luckBar, luckBarArray, usedLuck, 'square', 'usedLuck', 'green')

// Create experience bar

drawBar(5, experienceBar, experienceBarArray, experience, 'square', 'experience')

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

function displayRatingsText() {

    charmText.textContent = `Charm: ${charm}`
    coolText.textContent = `Cool: ${cool}`
    sharpText.textContent = `Sharp: ${sharp}`
    toughText.textContent = `Tough: ${tough}`
    weirdText.textContent = `Weird: ${weird}`
    
}

displayRatingsText()

// Basic 2d6 dice roller

function dieRoller() {
    const randomNum = (Math.floor(Math.random() * 6) + 1)
    // console.log(randomNum)
    return randomNum
}

rollButton.addEventListener("click", function() {
    const die1 = dieRoller()
    const die2 = dieRoller()
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

let basicMoveArray = []


function basicRoll(type) {
    const die1 = dieRoller()
    const die2 = dieRoller()    
    const diceSum = die1 + die2
    const addType = diceSum + (type)

    return [die1, die2, diceSum, addType]
}

function renderBasicMoves() {

    if (basicMoveArray.length === 0) {
        
        // blank the page text out
        basicMoveMath.innerHTML = ""
        basicMoveResults.innerHTML = ""

        // you also need to blank out the event log text here...

    } else {
    
        // render the move math text
        basicMoveMath.innerHTML = `Kick Some Ass: 2d6 (${basicMoveArray[0][0]} + ${basicMoveArray[0][1]} = ${basicMoveArray[0][2]}) + Tough (${tough})` 

        // render the results text (large and in charge)
        basicMoveResults.innerHTML = `${basicMoveArray[0][3]}`

        console.log(basicMoveArray)

        // push the text into an array entry for later (in case we want to revert, for example)
        eventLogArray.unshift(`Kick Some Ass: 2d6 (${basicMoveArray[0][0]} + ${basicMoveArray[0][1]} = ${basicMoveArray[0][2]}) + Tough (${tough}) = ${basicMoveArray[0][3]}`)

        console.log(eventLogArray) 

        renderEventLog(eventLogArray)

    }
            


}

// Update Event Log

let eventLogArray = []
let eventLogText = document.getElementById('event-log')

function renderEventLog() {
    for (let i=0; i < eventLogArray.length; i++) {
        eventLogText.innerHTML += eventLogArray[i]
    }
}


kickSomeAssButton.addEventListener("click", function() {

    // put the latest string in the roll history array
    basicMoveArray.unshift(basicRoll(tough))
    // console.log(basicMoveArray)

    renderBasicMoves()
})


// Basic Moves undo button

const basicMoveUndoButton = document.getElementById('basic-move-undo-button')

basicMoveUndoButton.addEventListener("click", function(){
    // let previousRoll = basicMoveArray.length - 2

    basicMoveArray.shift()
    eventLogArray.shift()
    renderBasicMoves()
    // eventLogArray.forEach(renderEventLog)
    
})




// eventLogArray.forEach(renderEventLog)

// function renderEventLog(item) {
//     eventLogText.innerHTML += `<li>${item}</li>`;
// }

