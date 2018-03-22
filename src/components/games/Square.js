import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { move } from '../../actions/games';
import './Square.css'

class Square extends PureComponent {
  static propTypes = {
    value: PropTypes.number.isRequired,
    makeMove: PropTypes.func.isRequired
  }

  handleClick = () => {
    const { makeMove, index } = this.props
    makeMove(index)
  }

  render() {
    const { value, index } = this.props

    return (
      <div
      className={`Square fill-${value || 0}`}
      onClick={this.handleClick}
      />
    )
  }
}

export default connect(null, { makeMove: move})(Square)
