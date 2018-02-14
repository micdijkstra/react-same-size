import React from 'react'

class Child extends React.Component {
  state = { height: 'auto' }

  thisRef = element => {
    const { childId: id } = this.props
    const { registerChild } = this.props.utils
    registerChild({ element, id })
  }

  render() {
    const { childId, children, utils } = this.props
    const height = utils.heights[childId] || 'auto'
    return (
      <div ref={this.thisRef} style={{ height, backgroundColor: 'tomato' }}>
        {children()}
      </div>
    )
  }
}

export default Child
