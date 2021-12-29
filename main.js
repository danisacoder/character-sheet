// Harm and status DOM elements

const harmBar = document.getElementById('harm-bar')
const harmStatusText = document.getElementById('harm-status-text')
const harmText = document.getElementById('harm-text')
// const characterNameText = document.getElementById('name-section')

// function renderCharacterName() {
//     characterNameText.innerHTML = characterName 
// }

let harmBarArray = []
let currentHarmArray = [4]


let hunterType = 'The Monstrous'

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
        // console.log(currentHarmArray)
    }

    eventLogArray.unshift([0, `Harm decreased from ${currentHarmArray[1]} to ${currentHarmArray[0]}`])
    // console.log(eventLogArray)

    renderAll()

})

harmUpButton.addEventListener("click", function() { 
    if (currentHarmArray[0] === 8) {
        return
    } else {
        currentHarmArray.unshift(currentHarmArray[0] + 1)
        // console.log(currentHarmArray)
    }

    eventLogArray.unshift([0, `Harm increased from ${currentHarmArray[1]} to ${currentHarmArray[0]}`])

    renderAll()

})

// Show statuses based on number of harm

function renderStatusText() {

   if (currentHarmArray[0] > 3 && currentHarmArray[0] < harmMax[0]) {
        harmStatusText.innerHTML = 'Status: Unstable'
    } else if (currentHarmArray[0] === harmMax[0]) {
        harmStatusText.innerHTML = 'Status: Dead'
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
        // console.log(usedLuckArray)
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
    experienceDown()
})

function experienceDown() {
    if (currentExperienceArray[0] === 0 && currentLevelArray[0] === 1) {}
    else if (currentExperienceArray[0] === 0) {
            currentExperienceArray.unshift(4)
            levelDown() 
            eventLogArray.unshift([8,`Experience changed from ${currentExperienceArray[1]} to ${currentExperienceArray[0]}`])
    } else {
        currentExperienceArray.unshift(currentExperienceArray[0] - 1)
        eventLogArray.unshift([8,`Experience decreased from ${currentExperienceArray[1]} to ${currentExperienceArray[0]}`])
    }
    renderAll() 
}

experienceUpButton.addEventListener("click", function() {
    experienceUp()
})

function experienceUp() {
    if (currentExperienceArray[0] === 4) {
        currentExperienceArray.unshift(0)
        // console.log(currentExperienceArray)
        levelUp()
        eventLogArray.unshift([8,`Experience increased from 4 to 5, reset to 0`])

    } else {
        currentExperienceArray.unshift(currentExperienceArray[0] + 1)
        console.log(currentExperienceArray)
        eventLogArray.unshift([8, `Experience increased from ${currentExperienceArray[1]} to ${currentExperienceArray[0]}`])
    }

    eventLogArray.unshift()

    renderAll() 
}

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

let charmArray = [-1]
let coolArray = [1]
let sharpArray = [1]
let toughArray = [0]
let weirdArray = [3]
let nameArray = ['Arden']

// ratingsArray = []

const charmText = document.getElementById('charm-section')
const coolText = document.getElementById('cool-section')
const sharpText = document.getElementById('sharp-section')
const toughText = document.getElementById('tough-section')
const weirdText = document.getElementById('weird-section')
const characterNameText = document.getElementById('name-section')


let editableTextNodeList = document.querySelectorAll(".editable-text")
// let editableTextNodeList = document.querySelectorAll("span")
// let spans = document.getElementById('charm-section').childNodes

console.log(editableTextNodeList)

// console.log(spans) 

function renderEditableText() {

    charmText.innerHTML = `Charm: <span id="charm">${charmArray[0]}</span>`
    coolText.innerHTML = `Cool: <span id="cool">${coolArray[0]}</span>`
    sharpText.innerHTML = `Sharp: <span id="sharp">${sharpArray[0]}</span>`
    toughText.innerHTML = `Tough: <span id="tough">${toughArray[0]}</span>`
    weirdText.innerHTML = `Weird: <span id="weird">${weirdArray[0]}</span>`
    characterNameText.innerHTML = `Name: <span id="name">${nameArray}</span>`

}

function editableText() {
    for (let i=0; i<editableTextNodeList.length; i++) {
        editableTextNodeList[i].addEventListener("dblclick", function(){

             // set a variable for the id of the clicked element
            let clickedTextId = editableTextNodeList[i].querySelector("span").id
            // let clickedParentNodeId = editableTextNodeList[i].id
            let currentSpan = editableTextNodeList[i].querySelector("span")
            let parentDiv = currentSpan.parentNode

            // replace the text with an input

            if (clickedTextId === 'name') {
                currentArray = nameArray
            } else if (clickedTextId === 'charm') {
                currentArray = charmArray
            } else if (clickedTextId === 'cool') {
                currentArray = coolArray 
            } else if (clickedTextId === 'sharp') {
                currentArray = sharpArray
            } else if (clickedTextId === 'tough') {
                currentArray = toughArray
            } else if (clickedTextId === 'weird') {
                currentArray = weirdArray
            }

            let inputBox = document.createElement('input')
            let defaultText = document.createTextNode('hello')
            inputBox.appendChild(defaultText)
            inputBox.id = 'input-box'
            inputBox.type = 'text'
            inputBox.size = '1'
            inputBox.value = `${currentArray[0]}`

            parentDiv.replaceChild(inputBox, currentSpan)
            
            // document.getElementById(`${clickedParentNode}`).appendChild(inputBox)


        })
    }

}

editableText()

document.addEventListener('focus', function(){

    // if (event.target.className === 'editable-text') {
        console.log('hello')
    // }
})

// let's edit the move set! 

document.addEventListener("click", function(event) {

    let eventTarget = event.target

    console.log(eventTarget)

    let pencilSpan = document.createElement('span')
    
    let pencilText = document.createTextNode(' hello')

    pencilSpan.appendChild(pencilText)

    // let targetParentNode = eventTarget.parentNode

    eventTarget.appendChild(pencilSpan)

    // pencilSpan.textContent = '✏' 

    console.log(pencilSpan)

    if (event.target.className === 'editable-text') {



        console.log('✏')
        
        // if (event.target.parentDiv === ''
    } 
} )

// listenForClicks()
// Show the ratings on the page

// editableTextNodeList.forEach(item => {
//     item.addEventListener('click', event => {
//         console.log('hello')
//     })
// })



// Note to self - this does correctly identify the clicked item using the querySelectorAll approach

// function findClickedEditableText() {
//     for (let i=0; i<editableText.length; i++) {
//         editableText[i].addEventListener('dblclick', function() {
//             console.log(editableText[i])
//         }
//     )}
// }

// findClickedEditableText() 

// editableTextNodeList.addEventListener('dblclick', function() {

    // console.log('hello')

        // // identify the clicked text
        // let ratingSpan = document.getElementById('charm')
        // // blank the span out
        // ratingSpan.innerHTML = ''
        // // put in an input field with the rating number already in it and selected
        // let input = document.createElement('input')
        // let startValue = document.createTextNode(`${charmArray[0]}`)
        // document.getElementsByTagName("input")[0].setAttribute("id", "charm-editable-text")
        // document.getElementsByTagName("input")[0].setAttribute("type", "text")
        // document.getElementsByTagName("input")[0].setAttribute("size", "1")
        // document.getElementsByTagName("input")[0].setAttribute("value", `${charmArray[0]}`)
        // charmText.appendChild(input) 

        // console.log(charmText) 

        // // define a variable for this new class
        // let charmEventText = document.getElementById('charm-editable-text')

        // console.log(charmEventText)
        // // put focus inside the text box
        // charmEventText.focus()
        // // select the text in the box so you can immediately start typing
        // charmEventText.select()

        // function renderRating() {

        //     // convert the string values to numbers
        //     let results = parseInt(charmEventText.value, 10) 
        //     // if it's the same as before, do nothing
        //     if (results === charmArray[0]) {} 
        //     else {
        //     // save the entered number into the array
        //     charmArray.unshift(results)
        //     // push the changes to the event log with identifier 10
        //     eventLogArray.unshift([10,`Ratings: Charm adjusted from ${charmArray[1]} to ${charmArray[0]}`])
        //     console.log(charmArray)
        //     // render the new number as h3
        //     renderAll() 
        //     }
        // }
        // // if the user deselects the input box, save it to the new array
        // charmEventText.addEventListener('blur', function() {
        //     renderRating()
        // })
        // detect if the user presses enter while in the text box 
        // if charmEventText.addEventListener('keydown', (e) {
            // renderRating()
        // })
// })



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
const useMagicButton = document.getElementById('use-magic-button')

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
    // console.log(basicMoveArray)
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
    // console.log(eventLogArray)
}


function pushBasicActionToArray() {

    eventLogArray.unshift([4,`${basicMoveArray[0][0]}: 2d6 (${basicMoveArray[0][1]} + ${basicMoveArray[0][2]} = ${basicMoveArray[0][3]}) + ${basicMoveArray[0][6]} (${basicMoveArray[0][5]}) = ${basicMoveArray[0][3]}`])
}

// I have to come back and refactor this later; I think the thing to do is use an array related to each type of basic move 

kickSomeAssButton.addEventListener("click", function() {

    // make a basic roll using the Kick Some Ass parameters and record it in the array
    basicMoveArray.unshift(basicRoll('Kick Some Ass', toughArray[0], 'Tough'))
    // console.log(basicMoveArray)
    pushBasicActionToArray()
    renderAll()
})

actUnderPressureButton.addEventListener("click", function() {

    // make a basic roll using the Kick Some Ass parameters and record it in the array
    basicMoveArray.unshift(basicRoll('Act Under Pressure', coolArray[0], 'Cool'))

    pushBasicActionToArray()
    renderAll()
})

helpOutButton.addEventListener("click", function() {

    // make a basic roll using the Kick Some Ass parameters and record it in the array
    basicMoveArray.unshift(basicRoll('Help Out', coolArray[0], 'Cool'))

    pushBasicActionToArray()
    renderAll()
})

investigateAMysteryButton.addEventListener("click", function() {

    // make a basic roll using the Kick Some Ass parameters and record it in the array
    basicMoveArray.unshift(basicRoll('Invesetigate A Mystery', sharpArray[0], 'Sharp'))

    pushBasicActionToArray()
    renderAll()
})

manipulateSomeoneButton.addEventListener("click", function() {

    // make a basic roll using the Kick Some Ass parameters and record it in the array
    basicMoveArray.unshift(basicRoll('Manipulate Someone', charmArray[0], 'Charm'))

    pushBasicActionToArray()
    renderAll()
})

protectSomeoneButton.addEventListener("click", function() {

    // make a basic roll using the Kick Some Ass parameters and record it in the array
    basicMoveArray.unshift(basicRoll('Protect Someone', toughArray[0], 'Tough'))

    pushBasicActionToArray()
    renderAll()
})

readABadSituationButton.addEventListener("click", function() {

    // make a basic roll using the Kick Some Ass parameters and record it in the array
    basicMoveArray.unshift(basicRoll('Read A Bad Situation', sharpArray[0], 'Sharp'))

    pushBasicActionToArray()
    renderAll()
})

useMagicButton.addEventListener("click", function () {

     // make a basic roll using the Kick Some Ass parameters and record it in the array
     basicMoveArray.unshift(basicRoll('Use Magic', weirdArray[0], 'Weird'))

     pushBasicActionToArray()
     renderAll()
})

// Setting up the Event Log hide toggle button
let eventLogBtn = document.querySelector('.event-log-btn')
let logSection = document.querySelector('.log-section')

eventLogBtn.addEventListener('click', function() {
    logSection.classList.toggle('hide')
})

// Setting up the undo button

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
                // undo ratings changes
        } else if (eventLogArray[0][0] === 10) {
            undo(charmArray)    
        }
})

function undo(array) {
    array.shift()
    eventLogArray.shift()

    renderAll()
}

// Rendering the info text about your basic moves

const basicMoveInfoText = document.getElementById('basic-move-info-text')

const infoArray = [
    {'kickSomeAss' : 
        { 
            '1-6':`<strong>Total Failure.</strong> Whatever you're fighting inflicts harm on you - GM determines how much. You have gained an experience point.`,
            '7+':`<strong>Mixed Success.</strong> You and whatever you're fighting each inflict harm on the other - GM determines how much. That usually means you inflict the harm rating of your weapon and your enemy inflicts their attack's harm rating on you.<br><br>
            `,
            '10+': `<strong>Success.</strong> You and whatever you're fighting each inflict harm on the other - GM determines how much. That usually means you inflict the harm rating of your weapon and your enemy inflicts their attack's harm rating on you. Choose one extra effect:<br>
                        <ul>
                            <li>You gain the advantage: take +1 forward, or give +1 forward to another hunter</li>
                            <li>You inflict terrible harm (+1 harm)</li>
                            <li>You suffer less harm (-1 harm)</li>
                            <li>You force them where you want them</li>
                        </ul>`,
            '12+': `<strong>Critical Success.</strong> You and whatever you're fighting each inflict harm on the other - GM determines how much. That usually means you inflict the harm rating of your weapon and your enemy inflicts their attack's harm rating on you. Pick an ehanced effect:<br>
                        <ul>
                            <li>You completely hold the advantage. All hunters involved in the fight get +1 forward.</li>
                            <li>You suffer no harm at all.</li>
                            <li>Your attack inflict double the normal harm.</li>
                            <li>Your attack drives the enemy away in a rout.</li>
                        </ul>`
        }
    }, 
    {'actUnderPressure' : 
        {
            '1-6':`<strong>Total Failure.</strong> You have gained an experience point.`,
            '7+':`<strong>Mixed Success.</strong> The Keeper is going to give you:<br>
                    <ul>
                        <li>A worse outcome</li>
                        <li>A hard choice</li>
                        <li>A price to pay</li>
                    </ul>`,
            '10+':`<strong>Success.</strong> You do what you set out to do.`,
            '12+': `<strong>Critical Success.</strong> You may choose to either do what you wanted and something extra, or to do what you wanted to absolute perfection.`
        }

    },
    {'helpOut' : 
        {
            '1-6':`Y<strong>Total Failure.</strong> You have gained an experience point.`,
            '7+':`<strong>Mixed Success.</strong> Your help grants them +1 to their roll, but you also expose yourself to trouble or danger.`,
            '10+':`<strong>Success.</strong> Your help grants them +1 to their roll.`,
            '12+':`<strong>Critical Success.</strong> Your help lets them act as if they just rolled a 12, regardless of what they actually got.`
        }

    },
    {'investigateAMystery' : 
        {
            '1-6':`<strong>Total Failure.</strong> You have gained an experience point.`,
            '7+':`<strong>Mixed Success.</strong> Ask the keeper one of the following questions:<br>
                <ul>
                    <li>What happened here?</li>
                    <li>What sort of creature is it?</li>
                    <li>What can it do?</li>
                    <li>What can hurt it?</li>
                    <li>Where did it go?</li>
                    <li>What was it going to do?</li>
                    <li>What is being concealed here?</li>
                </ul>`,
            '10+':`<strong>Success.</strong> Ask the keeper two of the following questions:<br>
                <ul>
                    <li>What happened here?</li>
                    <li>What sort of creature is it?</li>
                    <li>What can it do?</li>
                    <li>What can hurt it?</li>
                    <li>Where did it go?</li>
                    <li>What was it going to do?</li>
                    <li>What is being concealed here?</li>
                </ul>`,
            '12':`You may ask the keeper any question you want about the mystery, including the following:<br>
                <ul>
                    <li>What happened here?</li>
                    <li>What sort of creature is it?</li>
                    <li>What can it do?</li>
                    <li>What can hurt it?</li>
                    <li>Where did it go?</li>
                    <li>What was it going to do?</li>
                    <li>What is being concealed here?</li>
                </ul>`
        }
    }, 
    {'manipulateSomeone' : 
        {
            '1-6':`<strong>Total Failure.</strong> You have gained an experience point.`,
            '7+':`<strong>Mixed Success.</strong> They'll do it, but only if you do something for them right now to show you mean it. If you asked too much, they'll tell you what, if anything, it would take for them to do it.`,
            '10+':`<strong>Success.</strong> They'll do it for the reason you gave them. If you asked too much, they'll tell you the minimum it would take for them to do it (or if there's no way they'd do it).`,
            '12+':`<strong>Critical Success.</strong> Not only do they do what you want right now, they also become your ally for the rest of the mystery (or, if you do enough for them, permanently).`
        }

    },
    {'protectSomeone' :
        {
            '1-6':`<strong>Total Failure.</strong> You have gained an experience point.`,
            '7+':`<strong>Mixed Success.</strong> You protect them okay, but you'll suffer some or all of the harm they were going to get.`,
            '10+':`<strong>Success.</strong> Choose an extra:<br>
                <ul>
                    <li>You suffer little harm (-1 harm).</li>
                    <li>All impending danger is now focused on you.</li>
                    <li>You inflict harm on the enemy.</li>
                    <li>You hold the enemy back.</li>
                </ul>`,
            '12+':`<strong>Critical Success.</strong> Not only do they do what you want right now, they also become your ally for the rest of the mystery (or, if you do enough for them, permanently).`
        }
        
    },
    {'readABadSituation' :
        {
            '1-6':`<strong>Total Failure.</strong> You have gained an experience point.`,
            '7+':`<strong>Mixed Success.</strong> Ask the keeper one of the following questions:<br>
                <ul>
                    <li>What's my best way in?</li>
                    <li>What's my best way out?</li>
                    <li>Are there any dangers we haven't noticed?</li>
                    <li>What's the biggest threat?</li>
                    <li>What's most vulnerable to me?</li>
                    <li>What's the best way to protect the victims?</li>
                </ul>`,
            '10+':`<strong>Success.</strong> Ask the keeper three of the following questions:<br>
                <ul>
                    <li>What's my best way in?</li>
                    <li>What's my best way out?</li>
                    <li>Are there any dangers we haven't noticed?</li>
                    <li>What's the biggest threat?</li>
                    <li>What's most vulnerable to me?</li>
                    <li>What's the best way to protect the victims?</li>
                </ul>`,
            '12+':`<strong>Critical Success.</strong> You may ask the keeper any question you want about the mystery, including the following:<br>
            <ul>
                <li>What's my best way in?</li>
                <li>What's my best way out?</li>
                <li>Are there any dangers we haven't noticed?</li>
                <li>What's the biggest threat?</li>
                <li>What's most vulnerable to me?</li>
                <li>What's the best way to protect the victims?</li>
            </ul>`
        }
    },
    {'useMagic' :
        {
            '1-6':`<strong>Total Failure.</strong> You have gained an experience point.`,
            '7+':`<strong>Mixed Success.</strong> It works imperfectly: choose your effect and a glitch. The keeper will decide what effect the the glitch has. Choose your effect:<br>
                <ul>
                    <li>Inflict harm (1-harm ignore-armour magic obvious).</li>
                    <li>Enchant a weapon. It gets +1 harm and +magic.</li>
                    <li>Do one thing that is beyond human limitations.</li>
                    <li>Bar a place or portal to a specific person or type of creature.</li>
                    <li>Trap a specific person, minion, or monster.</li>
                    <li>Banish a spirit or curse from the person, object, or place it inhabits.</li>
                    <li>Summon a monster into the world.</li>
                    <li>Communicate with something that you do not share a language with.</li>
                    <li>Observe another place or time.</li>
                    <li>Heal 1 harm from an injury, or cure a disease, or neutralize a poison.</li>
                </ul>
            Choose your glitch:<br>
                <ul>
                    <li>The effect is weakened.</li>
                    <li>The effect is of short duration.</li>
                    <li>You take 1 harm, ignore armour.</li>
                    <li>The magic draws immediate, unwelcome attention.</li>
                    <li>It has a problematic side effect.</li>
                </ul>`,
            '10+':`<strong>Success.</strong> The magic works without issues: choose your effect:<br>
                <ul>
                    <li>Inflict harm (1-harm ignore-armour magic obvious).</li>
                    <li>Enchant a weapon. It gets +1 harm and +magic.</li>
                    <li>Do one thing that is beyond human limitations.</li>
                    <li>Bar a place or portal to a specific person or type of creature.</li>
                    <li>Trap a specific person, minion, or monster.</li>
                    <li>Banish a spirit or curse from the person, object, or place it inhabits.</li>
                    <li>Summon a monster into the world.</li>
                    <li>Communicate with something that you do not share a language with.</li>
                    <li>Observe another place or time.</li>
                    <li>Heal 1 harm from an injury, or cure a disease, or neutralize a poison.</li>
                </ul>`,
            '12+':`<strong>Critical Success.</strong> The Keeper will offer you some added benefit. Choose your effect:<br>
                <ul>
                    <li>Inflict harm (1-harm ignore-armour magic obvious).</li>
                    <li>Enchant a weapon. It gets +1 harm and +magic.</li>
                    <li>Do one thing that is beyond human limitations.</li>
                    <li>Bar a place or portal to a specific person or type of creature.</li>
                    <li>Trap a specific person, minion, or monster.</li>
                    <li>Banish a spirit or curse from the person, object, or place it inhabits.</li>
                    <li>Summon a monster into the world.</li>
                    <li>Communicate with something that you do not share a language with.</li>
                    <li>Observe another place or time.</li>
                    <li>Heal 1 harm from an injury, or cure a disease, or neutralize a poison.</li>
                </ul>`
        }

    }

]

const monstrousMovesArray = [

            ['Immortal','You do not age or sicken, and whenever you suffer harm you suffer 1 harm less.',1],
            ['Unnatural Appeal','Roll +Weird instead of +Charm when you manipulate someone.', 0],
            ['Unholy Strength','Roll +Weird instead of +Tough when you kick some ass.',1],
            ['Incorporeal','You may move freely through solid objects (but not people).',0],
            ['Preternatural Speed','You go much faster than normal people. When you chase, flee, or run take +1 ongoing.',0],
            ['Claws of the Beast','All your natural attacks get +1 harm.',0],
            ['Mental Dominion',"When you gaze into a normal human's eyes and exert your will over them, roll +Charm. On a 10+, hold 3. On a 7-9, hold 1. You may spend y our hold to give them an order. Regular people will follow your order, whatever it is. Hunter can choose whether they do it or not. If they do, they mark experience.",0],
            ['Unquenchable Vitality','When you have taken harm, you can heal yourself. Roll +Cool. On a 10+, heal 2 harm and stabilize your injuries. On a 7-9, heal 1 harm and stabilize your injuries. On a miss, your injuries worsen.',0],
            ['Dark Negotiator','You can use the manipulate someone move on monsters as well as people, if they can reason and talk.',0], 
            ['Flight','You can fly.',0],
            ['Shapeshifter',"You may change your form (usually into an animal). Decide if you have just one alternate form or several, and detail them. You gain +1 to investigate a mystery when using an alternate form's superior senses (e.g. smell for a wolf, sight for an eagle.)",0],
            ['Something Borrowed','Take a move from a hunter playbook that is not currently in play.',0]
]

// console.log(monstrousMovesArray)

let movesList = document.getElementById('moves-list')

function renderMoves() {

    movesList.innerHTML = ''

    if (hunterType === 'The Monstrous') {
        selectMoveSet(monstrousMovesArray) 
    }

    function selectMoveSet(moveTypeArray) { 

        for (let i=0; i<moveTypeArray.length; i++) {
    
            let moveName = moveTypeArray[i][0]
            let moveText = moveTypeArray[i][1]
            let moveActive = moveTypeArray[i][2]
    
    
            if (moveActive) {
                movesList.innerHTML += `<li><strong>${moveName}</strong>: ${moveText}</li>`
            } 
        }
    }

}

// Now let's make some inventory
const inventory = []

// Shortening basic move type array junk for later use
let kickSomeAss = infoArray[0]['kickSomeAss']
let actUnderPressure = infoArray[1]['actUnderPressure']
let helpOut = infoArray[2]['helpOut']
let investigateAMystery = infoArray[3]['investigateAMystery']
let manipulateSomeone = infoArray[4]['manipulateSomeone']
let protectSomeone = infoArray[5]['protectSomeone']
let readABadSituation = infoArray[6]['readABadSituation']
let useMagic = infoArray[7]['useMagic']

function renderInfoArray() {

    // if there are no moves to render... don't render them
    if (basicMoveArray.length === 0) {} else {

    // this is how I can tell the type of move from basicMoveArray
    const type = basicMoveArray[0][0]
   
    // this is how I can get the dice result from basicMoveArray
    const results = basicMoveArray[0][4]

    // send the info through the selector function and spit it out on the page
        if (type === 'Kick Some Ass') {
            selectCorrectInfoArraySection(results, kickSomeAss)
        } else if (type === 'Act Under Pressure') {
            selectCorrectInfoArraySection(results, actUnderPressure)
        } else if (type === 'Help Out') {
            selectCorrectInfoArraySection(results, helpOut)
        } else if (type === 'Investigate A Mystery') {
            selectCorrectInfoArraySection(results, investigateAMystery)
        } else if (type === 'Manipulate Someone') {
            selectCorrectInfoArraySection(results, manipulateSomeone)
        } else if (type === 'Protect Someone') {
            selectCorrectInfoArraySection(results, protectSomeone)  
        } else if (type === 'Read A Bad Situation') {
            selectCorrectInfoArraySection(results, readABadSituation)       
        } else if (type === 'Use Magic') {
            selectCorrectInfoArraySection(results, useMagic)       
        } 
    }
}

// Time to make it DRYer!

function selectCorrectInfoArraySection (results, typeName) {
    if (results < 7) {
        basicMoveInfoText.innerHTML = `${typeName['1-6']}`
    } else if (results >= 7 && results < 10) {
        basicMoveInfoText.innerHTML = `${typeName['7+']}`
    } else if (results >= 10 && results < 12) {
        basicMoveInfoText.innerHTML = `${typeName['10+']}`
    } else if (results >= 12) {
        basicMoveInfoText.innerHTML = `${typeName['12+']}`
    }   
}

// console.log(infoArray[3])

function renderAll() {

    renderBasicMoves()
    renderBasicRoll()
    renderEventLog()
    renderHarmText()
    renderEditableText()
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
    renderMoves()
    // renderCharacterName()
    
}

renderAll()



