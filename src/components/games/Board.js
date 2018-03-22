import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Square from './Square'
import './Board.css'

export class Board extends PureComponent {
  static propTypes = {
    board: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.number)
    ).isRequired
  }

  renderSquare= (value, index) => {
    return (
      <Square
      key={index}
      index={index}
      value={value}
      />
    )
  }

  render() {
    // const {game, users, authenticated, userId} = this.props

    return (
      <div className="Board">
        {this.props.board.map(this.renderSquare.bind(this))}
      </div>
    )
  }
}

const mapStateToProps = ({ board }) => ({ board })

export default connect(mapStateToProps)(Board)
