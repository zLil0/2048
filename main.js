const canvas = document.getElementById('board')
const ctx = canvas.getContext('2d')

canvas.width = 502
canvas.height = 502

class Cell {
    constructor({ position, color, text}) {
        this.position = position
        this.height = 107
        this.width = 107
        this.color = color
        this.text = text
    }
    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        ctx.closePath()
        if(this.text.content != '-'){
            ctx.beginPath()
            ctx.fillStyle = this.text.color
            ctx.font = `bold ${this.text.size} Arial`
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'
            ctx.fillText(this.text.content, this.position.x + this.width / 2, this.position.y + this.height / 2)
            ctx.closePath()
        }

    }
}

const board = [
    ['512', '1024', '2048', '4096'],
    ['256', '128', '64', '32'],
    ['2', '4', '8', '16'],
    ['-', '-', '-', '-']
]

const cells = []

board.map((lin, i) => {
    lin.map((cell, j) => {
        if (cell == '-') {
            cells.push(
                new Cell({
                    position: {
                        x: (122 * j) + 15,
                        y: (122 * i) + 15
                    },
                    color: '#202020',
                    text: {
                        content: cell,
                        size: '50px',
                        color: 'black'
                    }
                })
            )
        }
        else if (cell == '2') {
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
                    }
                })
            )
        }
    })
})

cells.map((cell) => {
    cell.draw()
})
