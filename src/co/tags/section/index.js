import React from 'react'
import t from 't'
import { mediumFade } from 'co/style/animation'
import { connect } from 'react-redux'
import { hideSection } from 'data/actions/config'
import { RectButton } from 'react-native-gesture-handler'

import { SectionView, SectionText } from 'co/style/section'
import Button, { Buttons } from 'co/button'

class TagsItemsHeader extends React.Component {
    onSectionPress = ()=>{
        mediumFade()
        this.props.hideSection('tags', !this.props.hidden)
    }

    render() {
        const { hidden } = this.props

        return (
            <RectButton onPress={this.onSectionPress}>
                <SectionView>
                    <SectionText>{t.s('tags')}</SectionText>
    
                    <Buttons>
                        {!!hidden && (
                            <Button 
                                icon='arrow-down-s'
                                color='text.secondary'
                                onPress={this.onSectionPress} />
                        )}
                    </Buttons>
                </SectionView>
            </RectButton>
        )
    }
}

export default connect(
	(state) => ({
        hidden: state.config.tags_hide
    }),
	{ hideSection }
)(TagsItemsHeader)