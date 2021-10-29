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


function basicRoll(moveTypeText, ratingType, ratingText) {
    const die1 = dieRoller()
    const die2 = dieRoller()    
    const diceSum = die1 + die2
    const addType = diceSum + (ratingType)

    return [moveTypeText, die1, die2, diceSum, addType, ratingType, ratingText]
}

function renderBasicMoves() {

    if (basicMoveArray.length === 0) {
        
        // blank the text out if there are no moves left in the array
        basicMoveMath.innerHTML = ""
        basicMoveResults.innerHTML = ""

    } else {
    
        // render the move math text on the page
        basicMoveMath.innerHTML = `${basicMoveArray[0][0]}: 2d6 (${basicMoveArray[0][1]} + ${basicMoveArray[0][2]} = ${basicMoveArray[0][3]}) + ${basicMoveArray[0][6]} (${basicMoveArray[0][5]})` 

        // render the results text (large and in charge) on the page
        basicMoveResults.innerHTML = `${basicMoveArray[0][3]}`

    }

}

// Event Log array and DOM element
let eventLogArray = []
let eventLogText = document.getElementById('event-log')

// Render the Event Log
function renderEventLog() {
    
    // blank out the event log text if it's 0
    if (eventLogArray.length === 0) {
        eventLogText.innerHTML = ''

    } else {
        
        console.log(eventLogArray)
        eventLogText.innerHTML = ''
        // render text for every entry in the log array
        for (let i=0; i < eventLogArray.length; i++) {
            eventLogText.innerHTML += `<li>${eventLogArray[i]}</li>`
        }
    }
}


kickSomeAssButton.addEventListener("click", function() {

    // make a basic roll using the Kick Some Ass parameters and record it in the array
    basicMoveArray.unshift(basicRoll('Kick Some Ass', tough, 'Tough'))

    console.log(basicMoveArray)

    eventLogArray.unshift(`${basicMoveArray[0][0]}: 2d6 (${basicMoveArray[0][1]} + ${basicMoveArray[0][2]} = ${basicMoveArray[0][3]}) + ${basicMoveArray[0][6]} (${basicMoveArray[0][5]}) = ${basicMoveArray[0][3]}`)

    console.log(eventLogArray)

    renderBasicMoves()
    renderEventLog()
})


// Basic Moves undo button
const basicMoveUndoButton = document.getElementById('basic-move-undo-button')

basicMoveUndoButton.addEventListener("click", function(){
    // remove the most recent item (which is always the 0th item) in the basic move array and the event log array
    basicMoveArray.shift()
    eventLogArray.shift()
 
    console.log(basicMoveArray)
    console.log(eventLogArray)

    renderBasicMoves()
    renderEventLog()
})



const eventClear = document.getElementById('event-clear')

eventClear.addEventListener("click", function(){
    eventLogText.innerHTML = ''
})


// eventLogArray.forEach(renderEventLog)

// function renderEventLog(item) {
//     eventLogText.innerHTML += `<li>${item}</li>`;
// }

