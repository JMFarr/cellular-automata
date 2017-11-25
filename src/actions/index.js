export const toggleRule = (ruleName) => {
	return {
		type: "TOGGLE_RULE",
		ruleName
	}
}

export const addRule = (rule) => {
	return {
		type: "ADD_RULE",
		rule
	}
}