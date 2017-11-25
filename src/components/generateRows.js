export default function generateRows(numberOfRows, firstRow, ruleset) {
	const rows = [firstRow]

	for(let i = 0; i < numberOfRows-1; i++)
		rows.push(generateNextRow(rows[i], ruleset))

	return rows
}

export function generateNextRow(previousRow, ruleset) {
	const nextRow = []

	for(let i = 0; i < previousRow.length; i++){
		let left = previousRow[i-1]
		let middle = previousRow[i]
		let right = previousRow[i+1]
		let cellIsActive = 0

		if(left == null)
			left = previousRow[previousRow.length-1]
		if(right == null)
			right = previousRow[0]
		if(ruleset.indexOf(''+left+middle+right) > -1)
			cellIsActive = 1

		nextRow.push(cellIsActive)
	}

	return nextRow
}
