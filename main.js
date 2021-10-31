// Harm and status DOM elements

const harmBar = document.getElementById('harm-bar')
const harmStatusText = document.getElementById('harm-status-text')
const harmText = document.getElementById('harm-text')

const harmBarArray = []
let currentHarm = 4

// Display number of harm out of 8

harmEmojiArray = ['😄','🙂','🙁','🤒','🤕','😵‍💫','😵','💀']

function displayHarmText() {
    
    harmText.innerHTML = 'Harm: ' + currentHarm + `/8 ${harmEmojiArray[currentHarm]}`
}

// Increment harm up and down with buttons

const harmUpButton = document.getElementById('harm-up-button') 
const harmDownButton = document.getElementById('harm-button-button') 

// harmUpButton.

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
    return randomNum
}

basicRollArray = []

rollButton.addEventListener("click", function() {
    const die1 = dieRoller()
    const die2 = dieRoller()
    const dieSum = die1 + die2

    basicRollArray.unshift([die1, die2, dieSum])

    eventLogArray.unshift([0,`Dice Roller: 2d6 (${basicRollArray[0][0]} + ${basicRollArray[0][1]} = ${basicRollArray[0][2]})`])

    console.log(basicRollArray)

    renderBasicRoll()
    renderEventLog()
})

function renderBasicRoll() {

    if (basicRollArray.length === 0) {
        rollMath.innerHTML = ""
        rollResults.innerHTML = ""
    } else {
        rollMath.innerHTML = `${basicRollArray[0][0]} + ${basicRollArray[0][1]}`
        rollResults.innerHTML = `${basicRollArray[0][2]}`
    }

}

// Basic move dice roll DOM variables

const basicMoveResults = document.getElementById('basic-move-results')
const basicMoveMath = document.getElementById('basic-move-math')

const kickSomeAssButton = document.getElementById('kick-some-ass-button') 
const actUnderPressureButton = document.getElementById('act-under-pressure-button') 
const helpOutButton = document.getElementById('help-out-button')
const investigateAMysteryButton = document.getElementById('investigate-a-mystery-button')
const manipulateSomeoneButton = document.getElementById('manipulate-someone-button')
const protectSomeoneButton = document.getElementById('protect-someone-button')
const readABadSituationButton = document.getElementById('read-a-bad-situation-button')

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
        basicMoveResults.innerHTML = `${basicMoveArray[0][4]}`

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
            eventLogText.innerHTML += `${eventLogArray[i][1]}<br>`
        }
    }
}

function pushBasicActionToArray() {

    eventLogArray.unshift([1,`${basicMoveArray[0][0]}: 2d6 (${basicMoveArray[0][1]} + ${basicMoveArray[0][2]} = ${basicMoveArray[0][3]}) + ${basicMoveArray[0][6]} (${basicMoveArray[0][5]}) = ${basicMoveArray[0][3]}`])
}

// I have to come back and refactor this later; I think the thing to do is use an array related to each type of basic move 

kickSomeAssButton.addEventListener("click", function() {

    // make a basic roll using the Kick Some Ass parameters and record it in the array
    basicMoveArray.unshift(basicRoll('Kick Some Ass', tough, 'Tough'))
    pushBasicActionToArray()
    renderAll()
})

actUnderPressureButton.addEventListener("click", function() {

    // make a basic roll using the Kick Some Ass parameters and record it in the array
    basicMoveArray.unshift(basicRoll('Act Under Pressure', cool, 'Cool'))

    pushBasicActionToArray()
    renderAll()
})

helpOutButton.addEventListener("click", function() {

    // make a basic roll using the Kick Some Ass parameters and record it in the array
    basicMoveArray.unshift(basicRoll('Help Out', cool, 'Cool'))

    pushBasicActionToArray()
    renderAll()
})

investigateAMysteryButton.addEventListener("click", function() {

    // make a basic roll using the Kick Some Ass parameters and record it in the array
    basicMoveArray.unshift(basicRoll('Invesetigate A Mystery', sharp, 'Sharp'))

    pushBasicActionToArray()
    renderAll()
})

manipulateSomeoneButton.addEventListener("click", function() {

    // make a basic roll using the Kick Some Ass parameters and record it in the array
    basicMoveArray.unshift(basicRoll('Manipulate Someone', charm, 'Charm'))

    pushBasicActionToArray()
    renderAll()
})

protectSomeoneButton.addEventListener("click", function() {

    // make a basic roll using the Kick Some Ass parameters and record it in the array
    basicMoveArray.unshift(basicRoll('Protect Someone', tough, 'Tough'))

    pushBasicActionToArray()
    renderAll()
})

readABadSituationButton.addEventListener("click", function() {

    // make a basic roll using the Kick Some Ass parameters and record it in the array
    basicMoveArray.unshift(basicRoll('Read A Bad Situation', sharp, 'Sharp'))

    pushBasicActionToArray()
    renderAll()
})


let eventLogUndoButton = document.getElementById('event-log-undo-button')

eventLogUndoButton.addEventListener("click", function() {
    if (eventLogArray[0][0] === 0) {
        undo(basicRollArray)
    } else if (eventLogArray[0][0] === 1) {
        undo(basicMoveArray)
    }
})

function undo(array) {
    array.shift()
    eventLogArray.shift()

    renderAll()
}

function renderAll() {

    renderBasicMoves()
    renderBasicRoll()
    renderEventLog()
}

const basicMoveDetails = document.getElementById('basic-move-details')

function renderBasicMoveDetailText() {
    
}