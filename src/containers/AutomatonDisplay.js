import { connect } from 'react-redux'
import AutomatonCanvas from '../components/AutomatonCanvas'

const mapStateToProps = ({ruleset}) => {
	return {
		ruleset
	}
}

const AutomatonDisplay = connect(
	mapStateToProps
)(AutomatonCanvas)

export default AutomatonDisplay
