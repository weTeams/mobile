import React from 'react'
import { connect } from 'react-redux'
import { makeCollectionPath } from 'data/selectors/collections'

import Icon from 'co/collections/item/icon'
import Goto from 'co/goto'

class EditBookmarkPath extends React.Component {
    static defaultProps = {
        _id:        0,
        last:       false,
        collectionId: 0
    }

    onPress = ()=>
        this.props.navigation.navigate('path', { _id: this.props.item._id })

    render() {
        const {
            last,
            path
        } = this.props

        if (!path.length)
            return null;

        const pathText = path.map((p)=>p.title).join(' / ')
        const { _id, cover=[] } = path[path.length-1]
        
        return (
            <Goto 
                last={last}
                onPress={this.onPress}
                icon={<Icon collectionId={_id} src={cover[0]} color='accent' />}
                label={pathText} />
        )
    }
}

export default connect(
	() => {
        const getCollectionPath = makeCollectionPath()
        const options = { self: true }
            
        return (state, { item: { collectionId } })=>({
            path: getCollectionPath(state, collectionId, options)
        })
    },
	undefined
)(EditBookmarkPath)