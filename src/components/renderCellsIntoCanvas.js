export default function renderCellsIntoCanvas(cells, canvas) {
	const cellSize = 5
	const activeColor = "#000000"
	const inactiveColor = "#0099ff"
	const ctx = canvas.getContext("2d")

	for(let i = 0; i < cells.length; i++){
		for(let j = 0; j < cells[i].length; j++){
			if(cells[i][j])
				ctx.fillStyle = activeColor
			else 
				ctx.fillStyle = inactiveColor
			ctx.fillRect(j*cellSize, i*cellSize, cellSize, cellSize)
		}	
	}
}