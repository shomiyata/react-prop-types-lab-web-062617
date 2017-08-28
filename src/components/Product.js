import React from 'react'
import PropTypes from 'prop-types'

export default class Product extends React.Component {
	render() {
		return (
			<div>
			<p>this.prop.name</p>
			<p>this.prop.producer</p>
			<p>this.prop.hasWatermark</p>
			<p>this.prop.color</p>
			<p>this.prop.weight</p>
			</div>
			)
	}
}

Product.defaultProps = {
	hasWatermark: false
}

Product.propTypes = {
	name: PropTypes.string.isRequired,
	producer: PropTypes.string,
	hasWatermark: PropTypes.bool,
	color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
	weight: (props, propName) => {
		const weight = props[propName];

		if (weight === undefined) {
			return new Error('No good')
		}

		if (isNaN(weight)) {
			return new Error('The `weight` prop is not a number.')
		}
		
		if (!(weight > 80 && weight < 300)){
			return new Error('The `weight` prop should range between 80 and 300.')
		}
	}
}