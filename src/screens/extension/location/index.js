import React from 'react'
import PropTypes from 'prop-types'
import t from 't'

import Header from 'co/navigation/header'
import TreeContainer from 'co/collections/items'

class ExtensionLocation extends React.Component {
	static propTypes = {
		route:  PropTypes.shape({
            params: PropTypes.shape({
                overrideTitle:  PropTypes.string,
                type:			PropTypes.string,
				values:			PropTypes.array
			})
		})
	}

	static options = ({ route: { params={} } })=>({
		animationEnabled: false,
		title: params.overrideTitle || t.s('newBookmark'),
		headerStyle: {
			elevation: 0,
			shadowOpacity: 0
		}
    })

	treeOptions = {
        hideIds: [0, -99]
    }

	onItemPress = ({ _id })=>
        this.props.navigation.replace('save', {
            ...this.props.route.params,
            collectionId: _id,
        })

	render() {			
		return (
			<>
				<Header.Buttons left>
					<Header.Cancel onPress={this.props.navigation.goBack} />
				</Header.Buttons>
				<Header.Buttons />

				<TreeContainer 
					options={this.treeOptions}
					searchAutoFocus
					onItemPress={this.onItemPress} />
			</>
		)
	}
}

export default ExtensionLocation