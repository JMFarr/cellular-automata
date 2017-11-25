import renderCellsIntoCanvas from './renderCellsIntoCanvas'

it('draws the correct amount of cells', () => {
	
	const cells = [
		[1,0,1],
		[0,1,0],
		[1,0,1]
	]
	const mockFillRect = jest.fn()
	const mockCanvas = {
		getContext: (x) => {
			return {
				fillStyle: '',
				fillRect: mockFillRect
			}
		}		
	}

	renderCellsIntoCanvas(cells, mockCanvas)

	expect(mockFillRect.mock.calls.length).toBe(9)	
})