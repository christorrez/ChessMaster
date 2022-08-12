const WIDTH = 800;
const HEIGHT = 800;

const FILES = 8;
const RANKS = 8;

const CELL_WIDTH = WIDTH / FILES;
const CELL_HEIGHT = HEIGHT / RANKS;

const PIECE_OFFSET = 1.2;

const theme = {
    light: '#eeeed2',
    dark: '#769656',
}

//♘♙♖♗♕♔
const pieces = {
    king : '♔',
    queen : '♕',
    rook : '♖',
    bishop : '♗',
    knight : '♘',
    pawn : '♙',
}

const $canvas = document.createElement('canvas');
const ctx = $canvas.getContext('2d'); //ESTE CONTEXTO NOS DA OPERACIONES PARA DIBUJAR EN 2D

$canvas.width= WIDTH;
$canvas.height= HEIGHT;


document.body.appendChild($canvas);

const renderBoard = () => {
    for (let x = 0; x < FILES; x += 1) {
        for (let y = 0; y < RANKS; y += 1) {
            let rectColor = theme.light;
            let textColor = theme.dark;
            
            if ((x + y) % 2) {
                rectColor = theme.dark;
                textColor = theme.light;
            }
    
            ctx.fillStyle = rectColor;
            ctx.fillRect(x * CELL_WIDTH, y * CELL_HEIGHT, CELL_WIDTH, CELL_HEIGHT);
    
            ctx.fillStyle = textColor;
            
            ctx.textBaseline = 'top';
            ctx.textAlign = 'start';
            ctx.font ='8px Arial'
            ctx.fillText(`[${x};${y}]`, x * CELL_WIDTH + 10, y * CELL_HEIGHT + 10)
            
            const piece = boardMatrix[x][y];
            if (piece) {
            ctx.textBaseline = 'middle';
            ctx.textAlign = 'center';
            ctx.font = '64px Arial';
            ctx.fillText(piece.type, x * CELL_WIDTH + (CELL_WIDTH / 2), y * CELL_HEIGHT + (CELL_HEIGHT / 2) * PIECE_OFFSET)
            }
        }
    }
}

//Initialize board
const boardMatrix = [];
for (let x = 0; x < FILES; x += 1) {
    boardMatrix[x] = [];
    for (let y = 0; y < RANKS; y += 1) {
        boardMatrix[x][y] = null;
    }
}

//Ubicar las piezas
boardMatrix[0][0] = {
    type: pieces.rook,
    color: theme.light,
}

boardMatrix[1][0] = {
    type: pieces.knight,
    color: theme.light,
}

boardMatrix[1][1] = {
    type: pieces.pawn,
    color: theme.light,
}

boardMatrix[0][1] = {
    type: pieces.pawn,
    color: theme.light,
}

boardMatrix[2][1] = {
    type: pieces.pawn,
    color: theme.light,
}

boardMatrix[3][1] = {
    type: pieces.pawn,
    color: theme.light,
}

boardMatrix[4][1] = {
    type: pieces.pawn,
    color: theme.light,
}

boardMatrix[5][1] = {
    type: pieces.pawn,
    color: theme.light,
}

boardMatrix[6][1] = {
    type: pieces.pawn,
    color: theme.light,
}

boardMatrix[7][1] = {
    type: pieces.pawn,
    color: theme.light,
}

boardMatrix[2][0] = {
    type: pieces.bishop,
    color: theme.light,
}

boardMatrix[3][0] = {
    type: pieces.queen,
    color: theme.light,
}

boardMatrix[4][0] = {
    type: pieces.king,
    color: theme.light,
}

boardMatrix[5][0] = {
    type: pieces.bishop,
    color: theme.light,
}

boardMatrix[6][0] = {
    type: pieces.knight,
    color: theme.light,
}

boardMatrix[7][0] = {
    type: pieces.rook,
    color: theme.light,
}

renderBoard();

