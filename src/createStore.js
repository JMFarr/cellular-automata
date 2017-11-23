const createStore = (onUpdate) => {
	let store = {}
	const proto = {
		updateStore: (obj) => {
			Object.assign(store, obj)
			onUpdate()
		},
		getStore: () => store,
		removePropertyFromStore: (propName) => {
			delete store[propName]
			onUpdate()
		}
	}
	return Object.create(proto)
}

export default createStore