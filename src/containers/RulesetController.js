import { connect } from 'react-redux'
import RuleList from '../components/RuleList'
import { toggleRule } from '../actions'

let mapStateToProps = ({ruleset}) => {
	return {
		ruleset
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		toggleRule: (id) => {
			dispatch(toggleRule(id))
		}
	}
}

let RulesetController = connect(
	mapStateToProps,
	mapDispatchToProps
)(RuleList)

export default RulesetController
