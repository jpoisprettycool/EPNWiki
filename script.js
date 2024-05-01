const Difficulties = {
  "Easy": "rgb(119, 243, 71)",
  "Medium": "rgb(255, 255, 0)",
  "Hard": "rgb(254, 124, 0)",
  "Difficult": "rgb(255, 12, 3)",
  "Challenging": "rgb(194, 0, 0)",
  "Intense": "rgb(25, 34, 45)",
  "Remorseless": "rgb(201, 0, 200)",

  "Insane": "rgb(0, 0, 255)",
  "Extreme": "rgb(2, 138, 255)",
  "Terrifying": "rgb(0, 255, 255)",
  "Catastrophic": "rgb(255, 255, 255)",

  "Horrific": "rgb(150, 145, 255)",
  "Unreal": "rgb(75, 0, 200)",
  "nil": "rgb(121, 121, 129)",
  "TooHard": "rgb(178, 0, 0)"
}

const TowerList = document.querySelector("#tower-list")

const addTower = (name, difficulty, badgeId) => {
  const wrapperElement = document.createElement("li")
  const towerElement = document.createElement("a")
  towerElement.innerHTML = name

  if (!Reflect.has(Difficulties, difficulty)) {
    throw new Error(`Difficulty "${difficulty}" does not exist!`)
  }

  towerElement.style.color = Difficulties[difficulty]

  if (difficulty === "Intense") {
    towerElement.style.webkitTextStroke = "1px"
    towerElement.style.webkitTextStrokeColor = "white"
  }

  if (badgeId) {
    towerElement.href = `https://roblox.com/badges/${badgeId}/-`
  }

  wrapperElement.appendChild(towerElement)
  TowerList.appendChild(wrapperElement)
}

addTower("Not Even a Literal Easiness", "Easy", "2140999596")
addTower("Not Even a Literal Difficulty", "Difficult", "2148403914")
addTower("Not Even a Simplistic, Rushed Gameplay", "Challenging", "0")
addTower("Not Even a Trash System", "Challenging", "0")
addTower("Not Even a Backhanded Violence", "Intense", "2140920666")
