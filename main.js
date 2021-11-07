// Harm and status DOM elements

const harmBar = document.getElementById('harm-bar')
const harmStatusText = document.getElementById('harm-status-text')
const harmText = document.getElementById('harm-text')

let harmBarArray = []
let currentHarmArray = [4]

// Display number of harm out of 8 - need an additional emoji here

harmEmojiArray = ['🤠','🙂','😐','🙁','🤒','🤕','😱','😵','💀']

function renderHarmText() {
    
    harmText.innerHTML = `Harm: ${currentHarmArray[0]}/${harmMax[0]} ${harmEmojiArray[currentHarmArray[0]]}`
}

// Increment harm up and down with buttons

const harmDownButton = document.getElementById('harm-down-button') 
const harmUpButton = document.getElementById('harm-up-button') 

harmDownButton.addEventListener("click", function() { 
    if (currentHarmArray[0] === 0) {
        return
    } else {
        currentHarmArray.unshift(currentHarmArray[0] - 1)
        console.log(currentHarmArray)
    }

    eventLogArray.unshift([0, `Harm decreased from ${currentHarmArray[1]} to ${currentHarmArray[0]}`])
    console.log(eventLogArray)

    renderAll()

})

harmUpButton.addEventListener("click", function() { 
    if (currentHarmArray[0] === 8) {
        return
    } else {
        currentHarmArray.unshift(currentHarmArray[0] + 1)
        console.log(currentHarmArray)
    }

    eventLogArray.unshift([0, `Harm increased from ${currentHarmArray[1]} to ${currentHarmArray[0]}`])

    renderAll()

})

// Show statuses based on number of harm

function renderStatusText() {

   if (currentHarmArray[0] > 3 && currentHarmArray[0] < harmMax[0]) {
        harmStatusText.innerHTML = 'Status: Unstable'
    } else if (currentHarmArray[0] === harmMax[0]) {
        harmStatusText.innerHTML = 'Status: Unconscious'
    } else { 
        harmStatusText.innerHTML = ''
    }

}

// Dice and results DOM elements

const roll1D6Button = document.getElementById('roll-1d6-button')
const roll2D6Button = document.getElementById('roll-2d6-button')
const rollMath = document.getElementById('roll-math')
const rollResults = document.getElementById('roll-results')

// Luck DOM elements and variables

const luckBar = document.getElementById('luck-bar')
const luckText = document.getElementById('luck-text')
const luckStatusText = document.getElementById('luck-status-text')
const luckDownButton = document.getElementById('luck-down-button')
const luckUpButton = document.getElementById('luck-up-button')

const luckBarArray = []
let usedLuckArray = [1] 

// Display used luck out of 7

function renderLuckText() {
    luckText.innerHTML = `Used Luck: ${usedLuckArray[0]}/${luckMax[0]} 🍀`
}

function renderLuckStatusText() {

    if (usedLuckArray[0] > luckMax[0]-1) {
        luckStatusText.innerHTML = 'Doomed'
    } else {
        luckStatusText.innerHTML = ''
    }

}

luckDownButton.addEventListener("click", function() {
    if (usedLuckArray[0] === 0) {
        return
    } else {
        usedLuckArray.unshift(usedLuckArray[0] - 1)
        console.log(usedLuckArray)
    }

    eventLogArray.unshift([1,`Luck decreased from ${usedLuckArray[1]} to ${usedLuckArray[0]}`])

    renderAll() 

})

luckUpButton.addEventListener("click", function() {
    if (usedLuckArray[0] === 7) {
        return
    } else {
        usedLuckArray.unshift(usedLuckArray[0] + 1)
        console.log(usedLuckArray)
    }

    eventLogArray.unshift([1,`Used luck increased from ${usedLuckArray[1]} to ${usedLuckArray[0]}`])

    renderAll() 

})

// Experience DOM elements and variables

const experienceBar = document.getElementById('experience-bar')
const experienceText = document.getElementById('experience-text')
const experienceStatusText = document.getElementById('experience-status-text')
const experienceDownButton = document.getElementById('experience-down-button')
const experienceUpButton = document.getElementById('experience-up-button')

const experienceBarArray = []
let currentExperienceArray = [2]
let currentLevelArray = [3]

// Display experience out of 5 status

function renderExperienceText() {
    experienceText.innerHTML = 'Experience: ' + currentExperienceArray[0] + `/${experienceMax[0]} ⚡`
    experienceStatusText.innerHTML = 'Level: ' + currentLevelArray[0]
}

experienceDownButton.addEventListener("click", function() {
    if (currentExperienceArray[0] === 0 && currentLevelArray[0] === 1) {}
    else if (currentExperienceArray[0] === 0) {
            currentExperienceArray.unshift(4)
            levelDown() 
            eventLogArray.unshift([8,`Experience changed from ${currentExperienceArray[1]} to ${currentExperienceArray[0]}`])
    } else {
        currentExperienceArray.unshift(currentExperienceArray[0] - 1)
        eventLogArray.unshift([8,`Experience decreased from ${currentExperienceArray[1]} to ${currentExperienceArray[0]}`])
    }
    // console.log(currentExperienceArray)
    // console.log(currentLevelArray)
    // console.log(eventLogArray)
    console.log(experienceBarArray)
    renderAll() 
})

experienceUpButton.addEventListener("click", function() {
    if (currentExperienceArray[0] === 4) {
        currentExperienceArray.unshift(0)
        console.log(currentExperienceArray)
        levelUp()
        eventLogArray.unshift([8,`Experience increased from 4 to 5, reset to 0`])

    } else {
        currentExperienceArray.unshift(currentExperienceArray[0] + 1)
        console.log(currentExperienceArray)
        eventLogArray.unshift([8, `Experience increased from ${currentExperienceArray[1]} to ${currentExperienceArray[0]}`])
    }

    eventLogArray.unshift()

    renderAll() 
})

function levelUp() {
    currentLevelArray.unshift(currentLevelArray[0] + 1)
    eventLogArray.unshift([8, `Level increased from ${currentLevelArray[1]} to ${currentLevelArray[0]}`])
}

function levelDown() {
    currentLevelArray.unshift(currentLevelArray[0] - 1)
    eventLogArray.unshift([8,`Level decreased from ${currentLevelArray[1]} to ${currentLevelArray[0]} `])
}

// Function to draw the harm, luck, and experience bars

function renderBar(length, barName, barArray, barFill, barClassName, fillClassName, barClassName2) {

// blank out the bar before redrawing the colored divs

    barName.innerHTML = ''
    barArray = []

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

// max values 

let harmMax = [8]
let luckMax = [7]
let experienceMax = [5]

// Create harm bar

function renderHarmBar() {

    renderBar(harmMax[0], harmBar, harmBarArray, currentHarmArray[0], 'square', 'harm')

}

// Create luck bar

function renderLuckBar() {

    renderBar(luckMax[0], luckBar, luckBarArray, usedLuckArray[0], 'square', 'usedLuck', 'green')

}

// Create experience bar

function renderExperienceBar() {

    renderBar(experienceMax[0], experienceBar, experienceBarArray, currentExperienceArray[0], 'square', 'experience')

}

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

function renderRatingsText() {

    charmText.textContent = `Charm: ${charm}`
    coolText.textContent = `Cool: ${cool}`
    sharpText.textContent = `Sharp: ${sharp}`
    toughText.textContent = `Tough: ${tough}`
    weirdText.textContent = `Weird: ${weird}`
    
}

renderRatingsText()

// Basic 2d6 dice roller

function dieRoller() {
    const randomNum = (Math.floor(Math.random() * 6) + 1)
    return randomNum
}

basicRollArray = []

roll1D6Button.addEventListener("click", function() {
    const die1 = dieRoller()
    const die2 = ""
    const dieTotal = die1
    
    basicRollArray.unshift([die1, die2, dieTotal])

    eventLogArray.unshift([5,`Dice Roller: 1d6 = ${basicRollArray[0][2]}`])

    renderAll()
})

roll2D6Button.addEventListener("click", function() {
    const die1 = dieRoller()
    const die2 = dieRoller()
    const dieTotal = die1 + die2

    basicRollArray.unshift([die1, die2, dieTotal])

  

    eventLogArray.unshift([5,`Dice Roller: 2d6: ${basicRollArray[0][0]} + ${basicRollArray[0][1]} = ${basicRollArray[0][2]}`])

    renderAll()
})

function renderBasicRoll() {

    if (basicRollArray.length === 0) {
        rollMath.innerHTML = ""
        rollResults.innerHTML = ""
    } else {
        if (basicRollArray[0][1] != 0) {
            rollMath.innerHTML = `${basicRollArray[0][0]} + ${basicRollArray[0][1]}`
            rollResults.innerHTML = `${basicRollArray[0][2]}`
        } else {
            rollMath.innerHTML = ''
            rollResults.innerHTML = `${basicRollArray[0][2]}`
        }

    }

}

// Basic Moves dice roll DOM variables

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
    console.log(basicMoveArray)
}

// Info array for roll-based information



// Event Log array and DOM element
let eventLogArray = []
let eventLogText = document.getElementById('event-log')

// Render the Event Log
function renderEventLog() {

    // blank out the event log text if array is empty    
    if (eventLogArray.length === 0) {
        eventLogText.innerHTML = ''

    } else {
        
        // blank out existing text
        eventLogText.innerHTML = ''
        // render text for every entry in the log array
        for (let i=0; i < eventLogArray.length; i++) {
            if (i === 6) { break }
            eventLogText.innerHTML += `${eventLogArray[i][1]}<br>`
        }
    }

}


function pushBasicActionToArray() {

    eventLogArray.unshift([4,`${basicMoveArray[0][0]}: 2d6 (${basicMoveArray[0][1]} + ${basicMoveArray[0][2]} = ${basicMoveArray[0][3]}) + ${basicMoveArray[0][6]} (${basicMoveArray[0][5]}) = ${basicMoveArray[0][3]}`])
}

// I have to come back and refactor this later; I think the thing to do is use an array related to each type of basic move 

kickSomeAssButton.addEventListener("click", function() {

    // make a basic roll using the Kick Some Ass parameters and record it in the array
    basicMoveArray.unshift(basicRoll('Kick Some Ass', tough, 'Tough'))
    // console.log(basicMoveArray)
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

function renderUndoButton() {
    if (eventLogArray.length === 0) {
        eventLogUndoButton.classList.add('hide')
    } else {
        eventLogUndoButton.classList.remove('hide')
    }
}

eventLogUndoButton.addEventListener("click", function() {
        // undo basic rolls   
        if (eventLogArray[0][0] === 5) { 
            undo(basicRollArray)
        // undo basic moves
        } else if (eventLogArray[0][0] === 4) {
            undo(basicMoveArray)
        // undo harm Bar adjustments
        } else if (eventLogArray[0][0] === 0) {
            currentHarmArray.shift()
            undo(harmBarArray)
        // undo luck Bar adjustments
        } else if (eventLogArray[0][0] === 1) {
            luckBarArray.shift()
            undo(usedLuckArray)
        // undo experience and level adjustments
        } else if (eventLogArray[0][0] === 8) {
            // how to undo if you just leveled down
            if (currentExperienceArray[0] === experienceMax[0]-1 && currentLevelArray[0] === (currentLevelArray[1] - 1)) {
                console.log('hello')
                undo(currentExperienceArray)
                undo(currentLevelArray)
            // how to undo if you just leveled up
            } else if (currentExperienceArray[1] === 4 && currentLevelArray[0] === (currentLevelArray[1]+1)) {
                    console.log('goodbye')
                    undo(currentExperienceArray)
                    undo(currentLevelArray)
            // how to undo experience if nothing special happened
            } else {
                undo(currentExperienceArray)
            }
            
        }
})

function undo(array) {
    array.shift()
    eventLogArray.shift()

    renderAll()
}

// Rendering the info text

const basicMoveInfoText = document.getElementById('basic-move-info-text')

const infoArray = [
    { 1:`You and whatever you're fighting inflict harm on the other. The amount of harm is based on the estbalished dangers in the game. That usually means you inflict the harm rating of your weapon and your enemy inflicts their attack's harm rating on you.<br><br>
        Choose one extra effect:<br>
            <ul>
                <li>You gain the advantage: take +1 forward, or give +1 forward to another hunter</li>
                <li>You inflict terrible harm (+1 harm)</li>
                <li>You suffer less harm (-1 harm)</li>
                <li>You force them where you want them</li>
            </ul>`
    }
]

function renderInfoArray() {
    if (basicMoveArray.length === 0) {} else {
        if (basicMoveArray[0][4] > 7) {
            basicMoveInfoText.innerHTML = `${infoArray[0]['1']}`    
            console.log(infoArray[0]['1'])
        } 
    }
}

function renderAll() {

    renderBasicMoves()
    renderBasicRoll()
    renderEventLog()
    renderHarmText()
    renderRatingsText()
    renderExperienceText()
    renderLuckText()
    renderHarmBar()
    renderExperienceBar()
    renderStatusText()
    renderLuckBar()
    renderLuckText()
    renderLuckStatusText()
    renderUndoButton()
    renderInfoArray()
    
}

renderAll()

// const basicMoveDetails = document.getElementById('basic-move-details')

// function renderBasicMoveDetailText() {
    
// }

console.log(eventLogArray)
