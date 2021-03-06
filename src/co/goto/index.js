import React from 'react'
import Icon from 'co/icon'
import {
	ImageView,
	GotoTap,
	GotoView,
	GotoTitleText,
	GotoActionText,
	ActionButton
} from './style'

const Goto = ({
	icon,
	variant,
	color,

	action='arrow-right-s',
	label, 
	subLabel,
	last, 
	onPress,
	onActionPress
})=>{
	let actionIcon
	if (action)
		actionIcon = <Icon name={action} />

	let iconItself
	switch(typeof icon) {
		case 'string': iconItself = <Icon name={icon} variant={variant} color={color} />; break
		case 'object': iconItself = icon; break
	}

	return (
		<GotoTap onPress={onPress}>
			<GotoView last={last}>
				{iconItself ? <ImageView>{iconItself}</ImageView> : null}
				<GotoTitleText>{label}</GotoTitleText>
				<GotoActionText>{subLabel}</GotoActionText>
				{onActionPress ? <ActionButton onPress={onActionPress}>{actionIcon}</ActionButton> : actionIcon}
			</GotoView>
		</GotoTap>
	)
}

export default Goto