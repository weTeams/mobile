import React from 'react'
import t from 't'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { appendTagsSelected } from 'data/actions/bookmarks'
import { makeSelectMode } from 'data/selectors/bookmarks'

import TagPicker from 'co/tags/picker'
import { Buttons, Button } from 'co/navigation/header'

class BookmarksTagSelected extends React.Component {
	static propTypes = {
		route:  PropTypes.shape({
            params: PropTypes.shape({
				spaceId: PropTypes.number
			})
		})
	}

	static options = {
		title: t.s('addTags')
	}

	state = {
		selected: []
	}

	onChange = (selected)=>
		this.setState({ selected })

	onSubmit = ()=>{
        this.props.appendTagsSelected(this.props.route.params.spaceId, this.state.selected)
		this.props.navigation.goBack()
	}

	render() {
		const { selected } = this.state
		const count = selected.length

		return (
			<>
				<Buttons count={count}>
					<Button 
						title={!count ? t.s('addTags') : `${t.s('add')} ${count} ${t.s('tags').toLowerCase()}`}
						bold
						disabled={!count}
						onPress={this.onSubmit} />
				</Buttons>

				<TagPicker
					selected={selected}
					onChange={this.onChange}
					onSubmit={this.onSubmit} />
			</>
		)
	}
}

export default connect(
	() => {
		const getSelectMode = makeSelectMode()
	
		return (state, { route: { params={} } })=>
			getSelectMode(state, params.spaceId)
	},
	{ appendTagsSelected }
)(BookmarksTagSelected)