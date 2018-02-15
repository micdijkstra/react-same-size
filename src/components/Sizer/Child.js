import React from 'react'

class Child extends React.Component {
  constructor(props) {
    super(props)

    this.updateHeight = this.updateHeight.bind(this)
  }

  componentDidUpdate() {
    this.updateHeight()
  }

  componentDidMount() {
    this.updateHeight()
  }

  updateHeight() {
    const height = this.element.clientHeight
    this.props.registerChild(height)
  }

  render() {
    let { height } = this.props
    if (height <= 0) height = 'auto'
    return (
      <div ref={el => (this.element = el)} style={{ height: height }}>
        {this.props.children}
      </div>
    )
  }
}

export default Child
