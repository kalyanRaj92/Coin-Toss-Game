// Write your code here
// import {Component} from 'react'

// class CoinToss extends Component {
//   state = {isHeads: true, totalScore: 0, totalHeads: 0, totalTails: 0}

//   getTossResult = () => Math.floor(Math.random() * 2)

//   onClickCoinToss = () => {
//     const randomNumber = this.getTossResult()

//     if (randomNumber === 0) {
//       this.setState(prevState => ({
//         isHeads: true,
//         totalScore: prevState.totalScore + 1,
//         totalHeads: prevState.totalHeads + 1,
//       }))
//     } else if (randomNumber === 1) {
//       this.setState(prevState => ({
//         isHeads: false,
//         totalScore: prevState.totalScore + 1,
//         totalTails: prevState.totalTails + 1,
//       }))
//     }
//   }

//   render() {
//     const {isHeads, totalScore, totalHeads, totalTails} = this.state
//     const srcImg = isHeads
//       ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
//       : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
//     return (
//       <div>
//         <h1>Coin Toss Game</h1>
//         <p>Heads (or) Tails</p>
//         <img src={srcImg} alt="toss result" />
//         <button type="button" onClick={this.onClickCoinToss}>
//           Toss coin
//         </button>
//         <div>
//           <p>Total:{totalScore}</p>
//           <p>Heads:{totalHeads}</p>
//           <p>Tails:{totalTails}</p>
//         </div>
//       </div>
//     )
//   }
// }
// export default CoinToss
import {Component} from 'react'

import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: HEADS_IMG_URL,
    headsCount: 0,
    tailsCount: 0,
  }

  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount

    if (toss === 0) {
      tossImage = HEADS_IMG_URL
      latestHeadsCount += 1
    } else {
      tossImage = TAILS_IMG_URL
      latestTailsCount += 1
    }
    this.setState({
      tossResultImage: tossImage,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img
            src={tossResultImage}
            alt="toss result"
            className="toss-result-img"
          />
          <button type="button" className="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
