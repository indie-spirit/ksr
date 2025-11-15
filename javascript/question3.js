function minSteps(grid, energy) {
    let n = grid.length;
    let m = grid[0].length;

    let directions = [[0,1],[0,-1],[1,0],[-1,0]];
    let teleportCells = [];
    let start, end;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 'S') start = [i, j];
            if (grid[i][j] === 'X') end = [i, j];
            if (grid[i][j] === 'T') teleportCells.push([i, j]);
        }
    }

    let queue = [[0, energy, start]];  
    let visited = new Set();

    while (queue.length > 0) {
        let [steps, e, [x, y]] = queue.shift();

        if (x === end[0] && y === end[1]) {
            return steps;
        }

        let key = `${x},${y},${e}`;
        if (visited.has(key)) continue;
        visited.add(key);

        
        if (grid[x][y] === 'T') {
            for (let [tx, ty] of teleportCells) {
                if (!(tx === x && ty === y)) {
                    let tkey = `${tx},${ty},${e}`;
                    if (!visited.has(tkey)) {
                        queue.push([steps, e, [tx, ty]]);
                    }
                }
            }
        }


        for (let [dx, dy] of directions) {
            let nx = x + dx, ny = y + dy;

            if (nx >= 0 && nx < n &&
                ny >= 0 && ny < m &&
                grid[nx][ny] !== '#') {

                let cost = 1;

                
                if (grid[nx][ny] >= '0' && grid[nx][ny] <= '9') {
                    cost += parseInt(grid[nx][ny]);
                }

                if (e >= cost) {
                    queue.push([steps + 1, e - cost, [nx, ny]]);
                }
            }
        }
    }

    return -1;
}


let grid = [
    ['S', '.', '.', '#', 'T'],
    ['.', '3', '.', '#', '.'],
    ['.', '.', '#', '.', 'T'],
    ['T', '.', '.', '.', 'X']
];
let energy = 20;

console.log(minSteps(grid, energy));
