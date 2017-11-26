const cellSize = 5
const activeColor = "#070707"
const inactiveColor = "#F4F4F4"

const renderCellsIntoCanvas = (cells, ctx) => {	
	ctx.clearRect(0,0,500,500)

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

export default renderCellsIntoCanvas