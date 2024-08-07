/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: Spring
@author: 
@tags: []
@addedOn: 2024-00-00
*/

const player = "p"

const background = "b"

const wall = "w"
const wall_no_stick = "n"
const lava_top = "t"
const lava = "l"
const ice = "i"
const ladder = "c"
const one_way_up = "u"
const goal = "g"

const arrow_0 = "0"
const arrow_22 = "1"
const arrow_45 = "2"
const arrow_67 = "3"
const arrow_90 = "4"
const arrow_112 = "5"
const arrow_135 = "6"
const arrow_157 = "7"
const arrow_180 = "8"
const arrow_202 = "9"
const arrow_225 = "!"
const arrow_247 = "@"
const arrow_270 = "#"
const arrow_292 = "$"
const arrow_315 = "%"
const arrow_337 = "^"

const arrowCounters = [
  arrow_0,
  arrow_22,
  arrow_45,
  arrow_67,
  arrow_90,
  arrow_112,
  arrow_135,
  arrow_157,
  arrow_180,
  arrow_202,
  arrow_225,
  arrow_247,
  arrow_270,
  arrow_292,
  arrow_315,
  arrow_337
]

const arrowIncrement = 22.5
const lastArrow = 360 / arrowIncrement - 1

const defaultMapWidth = 10
const defaultMapHeight = 8

setLegend(
  [ arrow_0, bitmap`
................
................
................
.........00.....
.........000....
...........000..
............000.
.000000000000000
.000000000000000
............000.
...........000..
.........000....
.........00.....
................
................
................` ],
  [ arrow_22, bitmap`
.......000000...
........00000000
............0000
..........00000.
.......00000..0.
....000000...00.
..00000.....00..
.000.......000..
............0...
................
................
................
................
................
................
................` ],
  [ arrow_45, bitmap`
................
................
................
................
.....0000000....
.....0000000....
........0000....
.......00000....
......000.00....
.....000..00....
....000...00....
...000..........
..000...........
.000............
000.............
00..............` ],
  [ arrow_67, bitmap`
.............00.
..........00000.
........000.000.
.......000..0000
........0..00.00
...........00.00
..........00..00
..........00..00
..........00...0
.........00.....
.........00.....
.........00.....
........00......
........00......
.........0......
................` ],
  [ arrow_90, bitmap`
.......00.......
......0000......
.....000000.....
.....000000.....
....00.00.00....
...00..00..00...
...00..00..00...
.......00.......
.......00.......
.......00.......
.......00.......
.......00.......
.......00.......
.......00.......
.......00.......
................` ],
  [ arrow_112, bitmap`
.00.............
.00000..........
.000.000........
0000..000.......
00.00..0........
00.00...........
00..00..........
00..00..........
0...00..........
.....00.........
.....00.........
.....00.........
......00........
......00........
......0.........
................` ],
  [ arrow_135, bitmap`
................
................
................
................
....0000000.....
....0000000.....
....0000........
....00000.......
....00.000......
....00..000.....
....00...000....
..........000...
...........000..
............000.
.............000
..............00` ],
  [ arrow_157, bitmap`
...000000.......
00000000........
0000............
.00000..........
.0..00000.......
.00...000000....
..00.....00000..
..000.......000.
...0............
................
................
................
................
................
................
................` ],
  [ arrow_180, bitmap`
................
................
................
.....00.........
....000.........
..000...........
.000............
000000000000000.
000000000000000.
.000............
..000...........
....000.........
.....00.........
................
................
................` ],
  [ arrow_202, bitmap`
................
................
................
................
................
................
................
...0............
..000.......000.
..00.....00000..
.00...000000....
.0..00000.......
.00000..........
0000............
00000000........
...000000.......` ],
  [ arrow_225, bitmap`
..............00
.............000
............000.
...........000..
..........000...
....00...000....
....00..000.....
....00.000......
....00000.......
....0000........
....0000000.....
....0000000.....
................
................
................
................` ],
  [ arrow_247, bitmap`
................
......0.........
......00........
......00........
.....00.........
.....00.........
.....00.........
0...00..........
00..00..........
00..00..........
00.00...........
00.00..0........
0000..000.......
.000.000........
.00000..........
.00.............` ],
  [ arrow_270, bitmap`
................
.......00.......
.......00.......
.......00.......
.......00.......
.......00.......
.......00.......
.......00.......
.......00.......
...00..00..00...
...00..00..00...
....00.00.00....
.....000000.....
.....000000.....
......0000......
.......00.......` ],
  [ arrow_292, bitmap`
................
.........0......
........00......
........00......
.........00.....
.........00.....
.........00.....
..........00...0
..........00..00
..........00..00
...........00.00
........0..00.00
.......000..0000
........000.000.
..........00000.
.............00.` ],
  [ arrow_315, bitmap`
00..............
000.............
.000............
..000...........
...000..........
....000...00....
.....000..00....
......000.00....
.......00000....
........0000....
.....0000000....
.....0000000....
................
................
................
................` ],
  [ arrow_337, bitmap`
................
................
................
................
................
................
................
............0...
.000.......000..
..00000.....00..
....000000...00.
.......00000..0.
..........00000.
............0000
........00000000
.......000000...` ],
  [ player, bitmap`
...0000000000...
..000000000000..
.00033333333000.
0003333333333000
0033333333333300
0033300330033300
0033300330033300
0033300330033300
0033333333333300
0033333333333300
0033333333333300
0033333333333300
0033333333333000
.00033333333000.
..000000000000..
...0000000000...` ],
  [ background, bitmap`
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777` ],
  [ wall, bitmap`
..000000000000..
.00000000000000.
000DDFFFFFFFF000
00DDDFFFFFFFFF00
00DDDDDDDDDFFF00
00DDDDDDDDDDFF00
00DDDDDDDDDDFF00
00DDDDDDDDDDFF00
00DDDDDDDDDDFF00
00DDDDDDDDDDFF00
00FFDDDDDDDDFF00
00FFFDDDDDDDDD00
00FFFFFFDDDDDD00
000FFFFFDDDDD000
.00000000000000.
..000000000000..` ],
  [ wall_no_stick, bitmap`
.00000000000000.
0000000000000000
00LLL111LLLLLL00
00LL111LLLLLL100
00L111LLLLLL1L00
00111LLLLLL1LL00
0011LLLLLL1LLL00
001LLLLLL1LLL100
00LLLLLL1LLL1100
00LLLLL1LLL11L00
00LLLL1LLL11LL00
00LLL1LLL11LLL00
00LL1LLL11LLLL00
00L1LLL11LLLLL00
0000000000000000
.00000000000000.` ],
  [ lava_top, bitmap`
................
................
.666.....666....
6666666666666666
6999666669996666
9999999999999999
9996999999999999
9999999969999999
9999999999999999
9999999999996999
9999999999999999
9999996999999999
9999999999999996
9996999999999999
9999999999699999
9999999999999999` ],
  [ lava, bitmap`
9999999999999999
9999999999999999
9999999996999999
9999999999999999
9999699999999999
9999999999999969
9999999999999999
9969999996999999
9999999999999999
9999999999999999
9999999999999999
9999969999999999
9999999999999999
9699999999996999
9999999999999999
9999999999999999` ],
  [ ice, bitmap`
..000000000000..
.00000000000000.
0007777772222000
0077777777772200
0077777777777200
0077777777777200
0077777777777200
0077777777777700
0077777777777700
0077777777777700
0077777777777700
0077777777777700
0027777777777700
0002777777777000
.00000000000000.
..000000000000..` ],
  [ ladder, bitmap`
CC............CC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CC............CC
CC............CC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CC............CC
CC............CC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CC............CC
CC............CC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CC............CC` ],
  [ one_way_up, bitmap`
.00000000000000.
0000000000000000
00DDDDDDDDFFFF00
00DDDDDDDDDDDF00
00FFDDDDDDDDDD00
0000000000000000
.00000000000000.
................
................
................
................
................
................
................
................
................` ],
  [ goal, bitmap`
................
.........000....
........00600...
.......0066600..
......00666660..
.....0066666600.
....00666666660.
...006666666660.
..0066666669990.
.00666669999990.
.06669999999990.
.09999999990000.
.09999990000....
.09990000.......
.00000..........
................` ]
)

// TODO: prevent player getting stuck when landing straight down on ice

const spriteCategories = {
  solid: {
    sound: null,
    types: [ wall, wall_no_stick, ice ]
  },
  sticky: {
    sound: tune`
120: C4/120,
3720`,
    types: [ wall ]
  },
  slippery: {
    sound: tune`
60: B5^60,
1860`,
    types: [ wall_no_stick, ice ]
  },
  danger: {
    sound: tune`
150: G4/150,
150: C4/150 + E4/150,
4500`,
    types: [ lava_top, lava ]
  },
  goal: {
    sound: tune`
150: F5/150 + A5/150,
150: A5/150 + F5/150,
150: G5/150 + B5/150,
150: G5/150 + B5/150,
150,
150: A5/150 + F5/150,
150: B5/150 + G5/150,
3750`,
    types: [ goal ]
  },
  directional_up: {
    sound: tune`
120: D4/120,
3720`,
    types: [ one_way_up ]
  }
}

// const melody = tune`
// 150: D4-150,
// 150: D4-150,
// 150: F4-150,
// 150: F4-150,
// 150: E4-150,
// 150: E4-150,
// 300,
// 150: D4-150,
// 150: D4-150,
// 150: F4-150,
// 150: F4-150,
// 150: E4-150,
// 150: E4-150,
// 300,
// 150: D4-150 + F4-150,
// 150: D4-150 + F4-150,
// 150: F4-150 + A4-150,
// 150: F4-150 + A4-150,
// 150: E4-150 + G4-150,
// 150: E4-150 + G4-150,
// 300,
// 150: D4-150 + F4-150,
// 150: D4-150 + F4-150,
// 150: F4-150 + A4-150,
// 150: F4-150 + A4-150,
// 150: E4-150 + G4-150,
// 150: E4-150 + G4-150,
// 300`

// const melody2 = tune`
// 150: D4-150 + F4-150,
// 150: D4-150 + F4-150,
// 150: F4-150 + A4-150,
// 150: F4-150 + A4-150,
// 150: E4-150 + G4-150,
// 150: E4-150 + G4-150,
// 300,
// 150: D4-150 + F4-150,
// 150: D4-150 + F4-150,
// 150: F4-150 + A4-150,
// 150: F4-150 + A4-150,
// 150: E4-150 + G4-150,
// 150: E4-150 + G4-150,
// 300,
// 150: F4-150 + A4-150,
// 150: F4-150 + A4-150,
// 150: A4-150 + C5-150,
// 150: A4-150 + C5-150,
// 150: B4-150 + G4-150,
// 150: B4-150 + G4-150,
// 300,
// 150: F4-150 + A4-150,
// 150: F4-150 + A4-150,
// 150: A4-150 + C5-150,
// 150: A4-150 + C5-150,
// 150: B4-150 + G4-150,
// 150: B4-150 + G4-150,
// 300`

// const melody3 = tune`
// 150: F4-150 + A4-150,
// 150: F4-150 + A4-150,
// 150: A4-150 + C5-150,
// 150: A4-150 + C5-150,
// 150: B4-150 + G4-150,
// 150: B4-150 + G4-150,
// 300,
// 150: D4-150,
// 450,
// 150: D4-150,
// 450,
// 150: D4-150 + A4-150,
// 450,
// 150: D4-150 + A4-150,
// 450,
// 150: D4-150 + C5-150,
// 450,
// 150: D4-150 + C5-150,
// 450`

// const repeatMelody = tune`
// 150: D4-150,
// 150: D4-150,
// 150: F4-150,
// 150: F4-150,
// 150: E4-150,
// 150: E4-150,
// 3900`

// setInterval(() => {
//   playTune(repeatMelody)
// }, 5000)

// const stickSound = tune`
// 120: C4/120,
// 3720`
// const slideSound = tune`
// 59.642147117296226: B5^59.642147117296226,
// 1848.906560636183`
// const gameOverSound = tune`
// 150: G4/150,
// 150: C4/150 + E4/150,
// 4500`

// setSolids([ player, wall, wall_no_stick ])

let level;
const levels = [
  map`
wwwwwwwwww
w........w
w........w
w........w
w........w
w........w
w.p....g.w
wwwwwwwwww`,
  map`
wwwwwwwwww
w.....w.gw
w.....w..w
w.....w..w
w..w.....w
w..w.....w
wp.w.....w
wwwwwwwwww`,
  map`
nnnnnnnnnnnnnnnnnnnn
n..................n
n..................n
n..................n
n..................n
nww.ww.ww.ww.ww.ww.n
n..................n
n..................n
n..................n
n......g...........n
n..w...w...w...w...n
n..................n
nw...w...w...w...w.n
n............w.....n
n..................n
nuuuuuuuuuuuuuuuuuun
n..................n
n..................n
nuw...w.w.w.w.w.w.wn
n.wwwwwwwwwwwwwwwwwn
nun...n............n
n.n...n............n
n.n.........ww..wwwn
n.......n..........n
np......n..........n
wwwwwwwwwwwwwwwwwwww`,
  map`
nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
n.......................................................n
n.......................................................n
n.......................................................n
n.......................................................n
n.......................................................n
n.......................................................n
n.......................................................n
n.......................................................n
n.......................................................n
n..g....................................................n
n..ww............................ntttttnw....wntttttttttn
n.......ww.......................nlllllnw....wnllllllllln
n............ww...ww...ww...ww...nnnnnnnw....wnnnnnnnnnnn
n.......................................w....w..........n
n.......................................w....w..........n
n.......................................w....w..........n
n.......................................w....w..........n
n.......................................w....w..........n
n.......................................w....w..........n
nwww...www..............................w....w..........n
n.......................................w....w..........n
n............wwww....wiiiiiiiii..............w..........n
n...ii....ii....w....w........n..............w..........n
n...............w....w........n..............w..........n
n...............w....w........n..............w..........n
n...............w....w........n..............w..........n
n...............wp...w........n..............w..........n
n...............ww...w........n.........nwwwww..........n
nttttttttttttttttttttn........ntttttttttn...............n
nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn`
]

setBackground(background)

setPushables({
  [ player ]: []
})

let gravity = 0.1

// these are all set within startGame()
let fullX;
let fullY;
let xVel;
let yVel;
let playedOnTile;
// let lastSoundPlayedX;
// let lastSoundPlayedY;
let inAir;
let gameOver;
let won;
let arrowType;
let fullMap;
let zoom;

onInput("w", () => handleWasdInput("w"))
onInput("a", () => handleWasdInput("a"))
onInput("s", () => handleWasdInput("s"))
onInput("d", () => handleWasdInput("d"))

onInput("i", () => handleIjklInput("i"))
onInput("j", () => handleIjklInput("j"))
onInput("l", () => handleIjklInput("l"))
onInput("k", () => handleIjklInput("k"))

startLevel(3)

function handleWasdInput(key) {
  const earlyReturn = handleGlobalInput()
  if (earlyReturn) return

  // TODO: check if this should be moved to handleGlobalInput()
  // if (gameOver || inAir) return
  
  switch (key) {
    case "w":
      panBy(0, -1)
      break
    case "a":
      panBy(-1, 0)
      break
    case "s":
      panBy(0, 1)
      break
    case "d":
      panBy(1, 0)
      break
    default:
      throw new Error(`Unexpected key ${key}`)
  }
}

function handleIjklInput(key) {
  const earlyReturn = handleGlobalInput()
  if (earlyReturn) return

  // TODO: check if this should be moved to handleGlobalInput()
  // if (gameOver) return
  
  if (zoom.isZoomedOut) {
    resetPan()
    return
  }

  switch (key) {
    case "i":
      // TODO: consider combining this early return with the 3rd (same for jkl)
      // TODO: reset game when pressing any key. this should be a separate function
      
      if (
        zoom.zooming ||
        arrowType !== null ||
        inAir
      ) return
    
      let newArrowType = arrowCounters.indexOf(arrow_0)
      while (checkArrowIsInvalid(arrowCounters[newArrowType])) {
        newArrowType += 1
        if (newArrowType === lastArrow) throw new Error("No possible moves")
      }
      newArrowType = arrowCounters[newArrowType]
      
      addSprite(0, 0, newArrowType)
      arrowType = newArrowType
      setArrowPosition()
      
      break
    case "j":
      if (arrowType === null) return
      rotateArrow(1)
      break
    case "l":
      if (arrowType === null) return
      rotateArrow(-1)
      break
    case "k":
      if (arrowType === null) return
      
      inAir = true
      
      const deg = getArrowDeg()
      const rad = deg * (Math.PI / 180)
    
      const arrowSprite = getFirst(arrowType)
      arrowSprite.remove()
      arrowType = null
    
      // note that startVel should never be larger than 1
      const startVel = 1
      xVel = startVel * Math.cos(rad)
      yVel = -startVel * Math.sin(rad)
    
      setMapFromParsed(fullMap)
      
      const playerSprite = getFirst(player)
      fullX = playerSprite.x
      fullY = playerSprite.y
      
      centerMap()
      
      const interval = setInterval(() => {
        let soundToPlay;
        
        setMapFromParsed(fullMap)
        
        const p = getFirst(player)

        const oldX = p.x
        const oldY = p.y
        
        fullX += xVel
        fullY += yVel
        
        p.x = Math.round(fullX)
        p.y = Math.round(fullY)
    
        yVel = Math.min(yVel+gravity, 1)
    
        // const overlap = getAllOfCategory("solid").find(w => w.x === p.x && w.y === p.y)
        if (playerOverlapsWithCategory("solid")) {
          if (yVel > xVel) {
            p.x -= xVel / Math.abs(xVel)
            fullX = p.x
          } else {
            p.y -= yVel / Math.abs(yVel)
            fullY = p.y
          }
        }
    
        // const dangerOverlap = getAllOfCategory("danger").find(l => l.x === p.x && l.y === p.y)
        if (playerOverlapsWithCategory("danger")) {
          stopMove()
          gameOver = true
          addText("Game Over", {
            y: 6,
            color: color`2`
          })
          // addText("You hit the lava!", {
          //   y: 8,
          //   color: color`2`
          // })
          addText("Press any button", {
            y: 8,
            color: color`2`
          })
          addText("to play again!", {
            y: 9,
            color: color`2`
          })
          soundToPlay = "danger"
        } else if (playerOverlapsWithCategory("goal")) {
          stopMove()
          gameOver = true
          won = true
          addText("Level Complete!", {
            y: 6,
            color: color`2`
          })
          addText("Press any button", {
            y: 8,
            color: color`2`
          })
          addText("to continue to", {
            y: 9,
            color: color`2`
          })
          addText("the next level!", {
            y: 10,
            color: color`2`
          })
          soundToPlay = "goal"
        } else {
          // const stickyWalls = [...getAllOfType("sticky"), ...getAllOfType("directional_up")]
          const stickyWalls = getAllOfCategory("sticky")
          const directionalUp = getAllOfCategory("directional_up")
          if (
            stickyWalls.some(w => (
              (w.x === p.x && w.y === p.y - 1 && yVel < 0 && !isEffectivelyZero(yVel)) ||
              (w.y === p.y && w.x === p.x + 1 && xVel > 0 && !isEffectivelyZero(xVel)) ||
              (w.x === p.x && w.y === p.y + 1 && yVel > 0 && !isEffectivelyZero(yVel)) ||
              (w.y === p.y && w.x === p.x - 1 && xVel < 0 && !isEffectivelyZero(xVel))
            ))
          ) {
            // TODO: consider playing sound effect here
            // console.log("clear")
            // playTune(stickSound)
            stopMove()
            soundToPlay = "sticky"
          } else if (
            directionalUp.some(w => (
              w.x === p.x && w.y === p.y + 1 && yVel > 0 && !isEffectivelyZero(yVel)
            ))
          ) {
            stopMove()
            soundToPlay = "directional_up"
          } else {
            const wallsSlippery = getAllOfCategory("slippery")
            if (
              wallsSlippery.some(w => (
                (w.y === p.y && w.x === p.x + 1 && xVel > 0 && !isEffectivelyZero(xVel)) ||
                (w.y === p.y && w.x === p.x - 1 && xVel < 0 && !isEffectivelyZero(xVel))
              ))
            ) {
              xVel = 0
              fullX = p.x
              soundToPlay = "slippery"
            }
            if (
              wallsSlippery.some(w => (
                (w.x === p.x && w.y === p.y + 1 && yVel > 0 && !isEffectivelyZero(yVel)) ||
                (w.x === p.x && w.y === p.y - 1 && yVel < 0 && !isEffectivelyZero(yVel))
              ))
            ) {
              yVel = 0
              fullY = p.y
              soundToPlay = "slippery"
              if (isEffectivelyZero(xVel)) stopMove()
            }
          }
        }

        if (oldX !== p.x || oldY !== p.y) playedOnTile = false
    
        fullMap = getParsedMap()
        centerMap()

        if (soundToPlay) playSoundOfType(soundToPlay)
      }, 60)

      function stopMove() {
        clearInterval(interval)
        inAir = false
      }
      
      break
    default:
      throw new Error(`Unexpected key ${key}`)
  }
}

function handleGlobalInput() {
  if (inAir) return
  if (gameOver) {
    if (won) level++
    startLevel(level)
    return true
  }
  return false
}

function rotateArrow(rotateCount) {
  const arrowTypeNum = arrowCounters.indexOf(arrowType)
  
  const arrowCount = lastArrow + 1

  // TODO: improve this logic (or at least use a ternary operator)
  let newTypeNum = arrowTypeNum + rotateCount
  if (newTypeNum > lastArrow) newTypeNum = newTypeNum % arrowCount
  else if (newTypeNum < 0) {
    newTypeNum = arrowCount + (newTypeNum % arrowCount)
    if (newTypeNum === arrowCount) newTypeNum = 0
  }
  // console.log(newTypeNum)

  const newType = arrowCounters[newTypeNum]
  
  const isInvalid = checkArrowIsInvalid(newType)

  if (isInvalid) return
  
  const arrowSprite = getFirst(arrowType)
  arrowSprite.type = newType
  arrowType = newType

  setArrowPosition()
}

function setArrowPosition() {
  if (arrowType !== null) {
    const playerSprite = getFirst(player)
    const arrowSprite = getFirst(arrowType)

    const deg = getArrowDeg()
    const rad = deg * (Math.PI / 180)
    const distance = 1
    const x = distance * Math.cos(rad)
    const y = distance * Math.sin(rad)
    
    arrowSprite.x = Math.round(playerSprite.x + x)
    arrowSprite.y = Math.round(playerSprite.y - y)
  }
}

// function getArrowDeg() {
//   if (arrowType === null) return null
//   return Number(arrowType) * arrowIncrement
// }

function getParsedMap() {
  const grid = getGrid()
  
  const map = []

  const currWidth = width()
  const currHeight = height()
  
  for (let y = 0; y < currHeight; y++) {
    const row = []
    map.push(row)
    
    for (let x = 0; x < currWidth; x++) {      
      const tile = grid[currWidth*y+x].map(tile => tile.type)
      row.push(tile)
    }
  }
  
  return map
}

function setMapFromParsed(parsedMap) {
  setMap(
    parsedMap.map(row =>
      row.map(tile => tile.length === 0 ? "." : tile[0]).join("")
    ).join("\n")
  )

  // console.log(
  //   parsedMap.map(row =>
  //     row.map(tile => tile.length === 0 ? "." : tile[0]).join("")
  //   ).join("\n")
  // )

  // console.log(map)
  
  for (let y = 0; y < height(); y++) {
  // for (let y = 0; y < map.length; y++) {
    const row = parsedMap[y]

    // console.log("row")
    
    for (let x = 0; x < width(); x++) {
    // for (let x = 0; x < row.length; x++) {
      const tile = row[x]
      
      for (let i = 1; i < tile.length; i++) {
        const sprite = tile[i]
        // console.log(tile)
        addSprite(x, y, sprite)
      }
    }
  }
}

function zoomMap(parsedMap, rawX, rawY, rawZoomWidth, rawZoomHeight) {
  // const rawX = 200
  // const rawY = 20
  // const rawZoomWidth = 10
  // const rawZoomHeight = 10

  const mapWidth = parsedMap[0].length
  const mapHeight = parsedMap.length

  // const zoomWidth = rawZoomWidth
  // const zoomHeight = rawZoomHeight
  
  const zoomWidth = Math.min(rawZoomWidth, mapWidth)
  const zoomHeight = Math.min(rawZoomHeight, mapHeight)
  const x = Math.max(Math.min(rawX, mapWidth-zoomWidth), 0)
  const y = Math.max(Math.min(rawY, mapHeight-zoomHeight), 0)

  // const x = rawX
  // const y = rawY
  
  const zoomedMap = []

  for (let iterY = 0; iterY < zoomHeight; iterY++) {
    const row = []
    zoomedMap.push(row)

    for (let iterX = 0; iterX < zoomWidth; iterX++) {
      const tile = []
      row.push(tile)

      // console.log("row");
      
      for (let i = 0; i < parsedMap[iterY+y][iterX+x].length; i++) {
        // console.log(parsedMap[iterY+y][iterX+x][i])
        tile.push(parsedMap[iterY+y][iterX+x][i])
      }
    }
  }

  return zoomedMap
}

function centerMap() {
  const playerSprite = getFirst(player)

  // console.log({x:playerSprite.x,y:playerSprite.y})

  const mapWidth = defaultMapWidth
  const mapHeight = defaultMapHeight
  
  const parsedMap = getParsedMap()
  const zoomedMap = zoomMap(
    parsedMap,
    playerSprite.x-Math.round(mapWidth/2)+1,
    playerSprite.y-Math.round(mapHeight/2),
    mapWidth,
    mapHeight
  )
  setMapFromParsed(zoomedMap)
}

// function getTouching() {
//   const playerSprite = getFirst(player)
//   const walls = getAll(wall)
//   // console.log({ playerSpriteX: playerSprite.x, playerSpriteY: playerSprite.y })
//   // console.log({ wallX: walls[0].x, wallY: walls[0].y })
//   // const touching = walls.filter(w => (
//   //   (w.y === playerSprite.y && Math.abs(w.x - playerSprite.x) <= 1) ||
//   //   (w.x === playerSprite.x && Math.abs(w.y - playerSprite.y) <= 1)
//   // ));
//   const touching = walls.filter(w => playerTouchingWall(playerSprite, w))
//   return touching
// }

// function playerTouchingWall(p, w) {
//   return (
//     (w.y === p.y && Math.abs(w.x - p.x) <= 1) ||
//     (w.x === p.x && Math.abs(w.y - p.y) <= 1)
//   )
// }

async function panBy(panByX, panByY) {
  const arrowSprite = getFirst(arrowType)
  if (arrowSprite) arrowSprite.remove()
  arrowType = null
  
  // TODO: move fullWidth and fullHeight to different function or var
  const ogParsedMap = getParsedMap()
  setMapFromParsed(fullMap)
  const fullWidth = width()
  const fullHeight = height()
  setMapFromParsed(ogParsedMap)

  const reset = typeof panByX !== "number" && typeof panByY !== "number"
  
  if (zoom.isZoomedOut && !reset) {
    zoom.x = Math.max(Math.min(zoom.x+panByX, fullWidth-zoom.width), 0)
    zoom.y = Math.max(Math.min(zoom.y+panByY, fullHeight-zoom.height), 0)
    
    setMapFromParsed(fullMap)
    const parsedMap = getParsedMap()
    const zoomedMap = zoomMap(parsedMap, zoom.x, zoom.y, zoom.width, zoom.height)
    setMapFromParsed(zoomedMap)
  } else if ((!zoom.zooming || reset) && !inAir) {
    zoom.zooming = true

    const newWidth = Math.min(reset ? defaultMapWidth : 20, fullWidth)
    const newHeight = Math.min(reset ? defaultMapHeight : 16, fullHeight)
    const ogWidth = width()
    const ogHeight = height()

    // TODO: simplify the calculation for some of these values. they should rely on a function etc.
    
    setMapFromParsed(fullMap)
    const playerSprite = getFirst(player)
    const newX = playerSprite.x-Math.round(newWidth/2)+1
    const newY = playerSprite.y-Math.round(newHeight/2)
    const ogX = reset ? zoom.x : playerSprite.x-Math.round(ogWidth/2)+1
    const ogY = reset ? zoom.y : playerSprite.y-Math.round(ogHeight/2)+1
    
    const widthDiff = newWidth-ogWidth
    const heightDiff = newHeight-ogHeight
    const xDiff = newX-ogX
    const yDiff = newY-ogY
    
    // TODO: fix zoom values
    
    const iterationCount = Math.ceil(Math.max(Math.abs(widthDiff), Math.abs(heightDiff))/2)
    
    // console.log("test a")
    
    for (let i = 0; i < iterationCount; i++) {
      if (i >= 1) setMapFromParsed(fullMap)
      
      zoom.width = ogWidth+Math.round(widthDiff / iterationCount * (i+1))
      zoom.height = ogHeight+Math.round(heightDiff / iterationCount * (i+1))

      zoom.x = ogX + Math.round(xDiff / iterationCount * (i+1))
      zoom.y = ogY + Math.round(yDiff / iterationCount * (i+1))
      
      const parsedMap = getParsedMap()
      const zoomedMap = zoomMap(parsedMap, zoom.x, zoom.y, zoom.width, zoom.height)
      setMapFromParsed(zoomedMap)

      // FIXME: switch this back to 10ms (200ms is temporary for testing)
      await wait(200)
    }
    // console.log("test b")

    zoom.width = newWidth
    zoom.height = newHeight
    // TODO: check why this was calculated instead of using newX and newY
    // zoom.x = Math.max(Math.min(zoom.x+panByX, fullWidth-zoom.width), 0)
    // zoom.y = Math.max(Math.min(zoom.y+panByY, fullHeight-zoom.height), 0)
    zoom.x = newX
    zoom.y = newY
    zoom.isZoomedOut = !reset
    zoom.zooming = false
  }
}

async function resetPan() {
  // empty arguments results in reset
  await panBy()
}

function wait(ms) {
  return new Promise((resolve, _reject) => setTimeout(resolve, ms))
}

function checkArrowIsInvalid(thisArrowType) {
  const p = getFirst(player)
  const walls = getAllOfCategory("solid")
  const arrowDeg = getArrowDeg(thisArrowType)
  
  const someIsInvalid = walls.some(w => {
    const isTouching = (
      (w.y === p.y && Math.abs(w.x - p.x) === 1) ||
      (w.x === p.x && Math.abs(w.y - p.y) === 1)
    )

    const isTouchingDiagonal = (
      !isTouching &&
      Math.abs(w.x - p.x) === 1 && Math.abs(w.y - p.y) === 1
    )

    if (!isTouching && !isTouchingDiagonal) return false
    
    let angle = Math.atan2(p.y-w.y, w.x-p.x)*(180/Math.PI)
    angle = angle < 0 ? angle + 360 : angle

    let distance = Math.abs(arrowDeg-angle) % 360
    distance = distance > 180 ? (180 - (distance % 180)) : distance
    
    if (
      (isTouching && distance < 90) ||
      (isTouchingDiagonal && distance < 45)
    ) return true
  })
  
  return someIsInvalid
}

function getArrowDeg(thisArrowType) {
  if (typeof thisArrowType === "string" || typeof thisArrowType === "number")
    return arrowCounters.indexOf(thisArrowType) * arrowIncrement
  else if (arrowType === null) return null
  else return arrowCounters.indexOf(arrowType) * arrowIncrement
}

function getAllOfCategory(category) {
  if (!(category in spriteCategories)) throw new Error(`Category ${category} not found`)
  return spriteCategories[category].types.map(t => getAll(t)).flat()
}

function typeIsInCategory(type, category) {
  if (!(category in spriteCategories)) throw new Error(`Category ${category} not found`)
  return spriteCategories[category].types.includes(type)
}

function playerOverlapsWithCategory(category) {
  if (!(category in spriteCategories)) throw new Error(`Category ${category} not found`)
  const playerSprite = getFirst(player)
  if (!playerSprite) return false
  // console.log({ x: playerSprite.x, y: playerSprite.y })
  return getAllOfCategory(category).find(w => w.x === playerSprite.x && w.y === playerSprite.y) ?? false
}

function playSoundOfType(category) {
  console.log(`attempt playing ${category}`)
  
  if (!(category in spriteCategories)) throw new Error(`Type ${type} not found`)
  if (!spriteCategories[category].sound) return
  
  console.log(`reached a ${category}`)
  
  // const playerSprite = getFirst(player)
  // if (
  //   playerSprite.x === lastSoundPlayedX &&
  //   playerSprite.y === lastSoundPlayedY
  // ) return

  if (playedOnTile) return

  playedOnTile = true
  
  console.log(`reached b ${category}`)

  // lastSoundPlayedX = playerSprite.x
  // lastSoundPlayedY = playerSprite.y
  
  setTimeout(() => {
    playTune(spriteCategories[category].sound)
    console.log("should play")
  }, 60)
}

function isEffectivelyZero(num) {
  const epsilon = 1e-10
  return Math.abs(num) < epsilon
}

function startLevel(newLevel) {  
  fullX = null
  fullY = null
  xVel = 0
  yVel = 0

  playedOnTile = false
  
  // lastSoundPlayedX = null
  // lastSoundPlayedY = null
  
  inAir = false
  gameOver = false
  won = false
  
  arrowType = null
  
  fullMap = null
  
  zoom = {
    zooming: false,
    isZoomedOut: false,
    x: null,
    y: null
  }

  clearText()
  
  level = newLevel
  setMap(levels[level])
  
  fullMap = getParsedMap()
  centerMap()
}
