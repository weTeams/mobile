import React from 'react'
import { isTablet } from 'modules/native'
import Header from 'co/navigation/header'

import Context from '../context'
import Profile from './profile'
import Search from './search'
import Collections from 'co/collections/items'
import FiltersTags from './filters_tags'

class HomeScreen extends React.Component {
	static contextType = Context

	static options = {
		headerTitleAlign: 'left',
		headerStyle: {
			elevation: 0,
			shadowOpacity: 0
		}
	}

	onItemPress = async(item)=>
		this.props.navigation.navigate('browse', {spaceId: item._id})

	render() {
		return (
			<>
				<Header.Title>
					<Profile />
				</Header.Title>

				<Header.Buttons>
					<Header.Button 
						icon='settings-2'
						onPress={()=>this.props.navigation.navigate('settings')} />
				</Header.Buttons>
				
				<FiltersTags navigation={this.props.navigation}>
					{(customRows, customRowRenderer)=>
						<Collections 
							SearchComponent={isTablet ? undefined : <Search {...this.props} />}
							selectedId={this.context.spaceId}
							showEmptyState={true}
							onItemPress={this.onItemPress}

							customRows={customRows}
							customRowRenderer={customRowRenderer} />
					}
				</FiltersTags>
			</>
		)
	}
}

export default HomeScreen