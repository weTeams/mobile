import React from 'react'
import Collections from 'co/collections/items'

class SearchResultsCollections extends React.Component {
	onItemPress = async({ _id })=>
		this.props.onCollectionPress(_id)

	render() {
        const { query='', spaceId } = this.props

        if (spaceId!='0s' || !query.trim())
            return null

		return (
            <Collections 
                options={{search: query, showCreateNew: false}}
                SearchComponent={null}
                disableVirtualization={true}
                onItemPress={this.onItemPress} />
		)
	}
}

export default SearchResultsCollections