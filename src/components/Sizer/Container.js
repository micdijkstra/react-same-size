import React from 'react'

class Container extends React.Component {
  state = {}

  registerChild = obj => {
    const newHeight = obj.element && obj.element.clientHeight

    if (!this.state[obj.id]) {
      this.setState({ [obj.id]: newHeight })
    } else {
      const existingHeight = this.state[obj.id]

      if (existingHeight < newHeight) {
        this.setState({ [obj.id]: newHeight })
      }
    }

    return newHeight
  }

  render() {
    const { registerChild, state: heights } = this
    const { children, render } = this.props
    const obj = { registerChild, heights }

    return render ? render(obj) : children(obj)
  }
}

export default Container
