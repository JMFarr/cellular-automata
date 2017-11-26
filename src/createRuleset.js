const createRuleset = () => {
	const previousCellValues = [
		[0,0,0],
		[0,0,1],
		[0,1,0],
		[0,1,1],
		[1,0,0],
		[1,0,1],
		[1,1,0],
		[1,1,1]
	]

	return previousCellValues.map((prev, i) => {
		return {
			id: i,
			prev,
			next: 0
		}
	})
}

export default createRuleset