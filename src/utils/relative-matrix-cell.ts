export function getUpperCell(matrix: number[][] | null, row: number, col: number): number | null {
    if (matrix === null) return null
    if (row === 0) {
        return null; // Top edge
    }
    return matrix[row - 1][col];
}

export function getRightCell(matrix: number[][] | null, row: number, col: number): number | null {
    if (matrix === null) return null
    if (col === matrix[0].length - 1) {
        return null; // Right edge
    }
    return matrix[row][col + 1];
}

export function getLowerCell(matrix: number[][] | null, row: number, col: number): number | null {
    if (matrix === null) return null
    if (row === matrix.length - 1) {
        return null; // Bottom edge
    }
    return matrix[row + 1][col];
}

export function getLeftCell(matrix: number[][] | null, row: number, col: number): number | null {
    if (matrix === null) return null
    if (col === 0) {
        return null; // Left edge
    }
    return matrix[row][col - 1];
}
