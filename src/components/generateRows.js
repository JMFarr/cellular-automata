export default function generateRows(numberOfRows, firstRow, ruleset) {
	const rows = [firstRow]

	for(let i = 0; i < numberOfRows-1; i++)
		rows.push(generateNextRow(rows[i], ruleset))
	
	return rows
}

export function generateNextRow(previousRow, ruleset) {
	const nextRow = []

	for(let i = 0; i < previousRow.length; i++) {
		let left = previousRow[i-1]
		let middle = previousRow[i]
		let right = previousRow[i+1]

		if(left == null)
			left = previousRow[ previousRow.length - 1]
		if(right == null)
			right = previousRow[0]

		let prev = [left, middle, right]
		let rule = ruleset.filter((rule) => {
			return arraysEqual(rule.prev, prev)
		})

		nextRow.push(rule[0].next)
	}
	return nextRow
}

function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }

    return true;
}