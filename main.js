const canvas = document.getElementById('board')
const ctx = canvas.getContext('2d')

canvas.width = 502
canvas.height = 502

class Cell {
    static width = 107
    static height = 107
    constructor({ position, color, text, velocity }) {
        this.position = position
        this.color = color
        this.text = text
        this.velocity = velocity
    }
    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.fillRect(this.position.x, this.position.y, Cell.width, Cell.height)
        ctx.fillStyle = this.text.color
        ctx.font = `bold ${this.text.size} Arial`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(this.text.content, this.position.x + Cell.width / 2, this.position.y + Cell.height / 2)
        ctx.closePath()
    }
    update() {
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}

let keyPressed = false

const boardBackground = [
    ['-', '-', '-', '-'],
    ['-', '-', '-', '-'],
    ['-', '-', '-', '-'],
    ['-', '-', '-', '-']
]

const board = [
    [' ', ' ', ' ', ' '],
    ['2', ' ', ' ', '4'],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ']
]

const cells = []

board.map((lin, i) => {
    lin.map((cell, j) => {
        if (cell == '2') {
            cells.push(
                new Cell({
                    position: {
                        x: (122 * j) + 15,
                        y: (122 * i) + 15
                    },
                    color: 'rgb(129, 186, 205)',
                    text: {
                        content: cell,
                        size: '50px',
                        color: 'black'
                    },
                    velocity: {
                        x: 0,
                        y: 0
                    }
                })
            )
        }
        else if (cell == '4') {
            cells.push(
                new Cell({
                    position: {
                        x: (122 * j) + 15,
                        y: (122 * i) + 15
                    },
                    color: 'rgb(82, 170, 200)',
                    text: {
                        content: cell,
                        size: '50px',
                        color: 'black'
                    },
                    velocity: {
                        x: 0,
                        y: 0
                    }
                })
            )
        }
        else if (cell == '8') {
            cells.push(
                new Cell({
                    position: {
                        x: (122 * j) + 15,
                        y: (122 * i) + 15
                    },
                    color: 'rgb(26, 119, 168)',
                    text: {
                        content: cell,
                        size: '50px',
                        color: 'black'
                    },
                    velocity: {
                        x: 0,
                        y: 0
                    }
                })
            )
        }
        else if (cell == '16') {
            cells.push(
                new Cell({
                    position: {
                        x: (122 * j) + 15,
                        y: (122 * i) + 15
                    },
                    color: 'rgb(31, 103, 197)',
                    text: {
                        content: cell,
                        size: '45px',
                        color: 'black'
                    },
                    velocity: {
                        x: 0,
                        y: 0
                    }
                })
            )
        }
        else if (cell == '32') {
            cells.push(
                new Cell({
                    position: {
                        x: (122 * j) + 15,
                        y: (122 * i) + 15
                    },
                    color: 'rgb(21, 58, 191)',
                    text: {
                        content: cell,
                        size: '45px',
                        color: 'black'
                    },
                    velocity: {
                        x: 0,
                        y: 0
                    }
                })
            )
        }
        else if (cell == '64') {
            cells.push(
                new Cell({
                    position: {
                        x: (122 * j) + 15,
                        y: (122 * i) + 15
                    },
                    color: 'blue',
                    text: {
                        content: cell,
                        size: '45px',
                        color: 'black'
                    },
                    velocity: {
                        x: 0,
                        y: 0
                    }
                })
            )
        }
        else if (cell == '128') {
            cells.push(
                new Cell({
                    position: {
                        x: (122 * j) + 15,
                        y: (122 * i) + 15
                    },
                    color: 'rgb(164, 99, 185)',
                    text: {
                        content: cell,
                        size: '45px',
                        color: 'black'
                    },
                    velocity: {
                        x: 0,
                        y: 0
                    }
                })
            )
        }
        else if (cell == '256') {
            cells.push(
                new Cell({
                    position: {
                        x: (122 * j) + 15,
                        y: (122 * i) + 15
                    },
                    color: 'rgb(159, 50, 196)',
                    text: {
                        content: cell,
                        size: '45px',
                        color: 'black'
                    },
                    velocity: {
                        x: 0,
                        y: 0
                    }
                })
            )
        }
        else if (cell == '512') {
            cells.push(
                new Cell({
                    position: {
                        x: (122 * j) + 15,
                        y: (122 * i) + 15
                    },
                    color: 'rgb(192, 30, 192)',
                    text: {
                        content: cell,
                        size: '45px',
                        color: 'black'
                    },
                    velocity: {
                        x: 0,
                        y: 0
                    }
                })
            )
        }
        else if (cell == '1024') {
            cells.push(
                new Cell({
                    position: {
                        x: (122 * j) + 15,
                        y: (122 * i) + 15
                    },
                    color: 'rgb(232, 8, 232)',
                    text: {
                        content: cell,
                        size: '40px',
                        color: 'black'
                    },
                    velocity: {
                        x: 0,
                        y: 0
                    }
                })
            )
        }
        else if (cell == '2048') {
            cells.push(
                new Cell({
                    position: {
                        x: (122 * j) + 15,
                        y: (122 * i) + 15
                    },
                    color: 'rgb(255, 0, 200)',
                    text: {
                        content: cell,
                        size: '40px',
                        color: 'black'
                    },
                    velocity: {
                        x: 0,
                        y: 0
                    }
                })
            )
        }
        else if (cell == '4096') {
            cells.push(
                new Cell({
                    position: {
                        x: (122 * j) + 15,
                        y: (122 * i) + 15
                    },
                    color: 'rgb(74, 7, 40)',
                    text: {
                        content: cell,
                        size: '40px',
                        color: '#e5e5e5'
                    },
                    velocity: {
                        x: 0,
                        y: 0
                    }
                })
            )
        }
    })
})

const animate = () => {
    window.requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)


    boardBackground.map((lin, i) => {
        lin.map((cell, j) => {
            ctx.beginPath()
            ctx.fillStyle = '#202020'
            ctx.fillRect((122 * j) + 18, (122 * i) + 18, 100, 100)
            ctx.closePath()
        })
    })
    cells.map((cell) => {
        cell.draw()
        if (cell.position.x + cell.velocity.x >= canvas.width - Cell.width + 20 || cell.position.x + cell.velocity.x <= 13 || cell.position.y + cell.velocity.y >= 500 - Cell.height || cell.position.y + cell.velocity.y <= 13) {
            cell.velocity.y = 0
            cell.velocity.x = 0
        }
        cells.map((other, i) => {
            if (other.text.content !== cell.text.content) {
                if (cell.position.x + cell.velocity.x <= other.position.x + Cell.width && cell.position.x + cell.velocity.x + Cell.width >= other.position.x &&
                    cell.position.y + cell.velocity.y <= other.position.y + Cell.width && cell.position.y + cell.velocity.y + Cell.width >= other.position.y) {
                    cell.velocity.y = 0
                    cell.velocity.x = 0
                }
            }
        })


        cell.update()
    })

}

document.addEventListener('keydown', ({ key }) => {
    if (key == 'ArrowRight') {
        cells.map((cell, i) => {
            if(cell.velocity.y === 0){
                cell.velocity.x = 40
                keyPressed = true
            }
        })
    }
    else if (key == 'ArrowUp') {
        cells.map((cell, i) => {
            cell.velocity.y = -40
            keyPressed = true
        })
    }
    else if (key == 'ArrowDown') {
        cells.map((cell, i) => {
            cell.velocity.y = 40
            keyPressed = true
        })
    }
    else if (key == 'ArrowLeft') {
        cells.map((cell, i) => {
            if(cell.velocity.y === 0){
                cell.velocity.x = -40
                keyPressed = true
            }
        })
    }


})
document.addEventListener('keyup', ({ key }) => {
    if (key == 'ArrowRight') {
        cells.map((cell, i) => {
            cell.velocity.x = 40
            keyPressed = true
        })
    }
    else if (key == 'ArrowUp') {
        cells.map((cell, i) => {
            cell.velocity.y = -40
            keyPressed = true
        })
    }
    else if (key == 'ArrowDown') {
        cells.map((cell, i) => {
            cell.velocity.y = 40
            keyPressed = true
        })
    }
    else if (key == 'ArrowLeft') {
        cells.map((cell, i) => {
            cell.velocity.x = -40
            keyPressed = true
        })
    }


})

animate()
