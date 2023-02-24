// functions + arrays + variables + for loop + (flowchart)
const userChoiceDisplay = document.createElement("em")
const computerChoiceDisplay = document.createElement("em")
const resultDisplay = document.createElement("em")

const game = document.getElementById("game")

game.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay)

const choices = ["Stein", "Saks", "Papir"]

let userChoice
let computerChoice

function handleClick(event) {
    userChoice = event.target.id
    userChoiceDisplay.innerHTML = "Ditt valg: " + userChoice + "<br>"
    generateComputerChoice()
    getResults()
}

function generateComputerChoice() {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    computerChoice = randomChoice
    computerChoiceDisplay.innerHTML = "Motstander sitt valg: " + randomChoice + "<br>"
}

for (let i = 0; i < choices.length; i++) {
    const button = document.createElement("button")
    button.id = choices[i]
    button.innerHTML = choices[i]
    button.addEventListener("click", handleClick)
    game.appendChild(button)
}

function getResults() {
    switch (userChoice + computerChoice) {
        case "SaksPapir":
        case "SteinSaks":
        case "PapirStein":
            resultDisplay.innerHTML = "Du vant! <br> <br>"
            break
        case "PapirSaks":
        case "SaksStein":
        case "SteinPapir":
            resultDisplay.innerHTML = "Du tapte! <br> <br>"
            break
        case "SteinStein":
        case "PapirPapir":
        case "SaksSaks":
            resultDisplay.innerHTML = "Det blei uavgjort! <br> <br>"
            break
    }
}

/*
    if (userChoice = "Stein") {
        if (randomChoice = "Stein") {
            resultDisplay.innerHTML = "Uavgjort!"
        } else if (computerChoice = "papir") {
            resultDisplay.innerHTML = "Du tapte!"
        } else if (computerChoice = "saks") {
            resultDisplay.innerHTML = "Du vant!"
        }
    } else if (userChoice = "papir") {
        if (computerChoice = "Stein") {
            resultDisplay.innerHTML = "Du vant"
        } else if (computerChoice = "papir") {
            resultDisplay.innerHTML = "Uavgjort!"
        } else if (computerChoice = "saks") {
            resultDisplay.innerHTML = "Du tapte!"
        }
    } else if (userChoice = "saks") {
        if (computerChoice = "Stein") {
            resultDisplay.innerHTML = "Du tapte!"
        } else if (computerChoice = "papir") {
            resultDisplay.innerHTML = "Du vant!"
        } else if (computerChoice = "saks") {
            resultDisplay.innerHTML = "Uavgjort!"
        }
    }
*/