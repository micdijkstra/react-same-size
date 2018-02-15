import React from 'react'

class Container extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      height: 0,
    }

    this.checks = 0
    this.newHeight = 0

    this.resetHeight = this.resetHeight.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.resetHeight)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resetHeight)
  }

  resetHeight() {
    this.checks = 0
    this.setState({
      height: 0,
    })
  }

  registerChild(height) {
    const { children } = this.props
    this.checks = this.checks + 1

    if (height > this.newHeight) {
      this.newHeight = height
    }

    // Process all children before setting height
    if (this.checks === children.length) {
      this.setState({ height: this.newHeight })
    }
  }

  render() {
    const children = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        height: this.state.height,
        registerChild: height => this.registerChild(height),
      })
    })

    return <div>{children}</div>
  }
}

export default Container
