import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';


// registerServiceWorker();
class Header extends Component {
    render(){
        return(
            <div>
                <Title/>
                <h2>This is Header </h2>
            </div>
        )
    }
}
class Title extends Component{
    handleClickOnTitle(e){
        console.log(e.target.innerHTML)
    }
    render(){
        return(
            <h1 onClick={this.handleClickOnTitle}>React 小书</h1>
        )
    }
}

class Main extends Component {
    render () {
      return (
      <div>
        <h2>This is main content</h2>
      </div>
      )
    }
  }
  
  class Footer extends Component {
    render () {
      return (
      <div>
        <h2>This is footer</h2>
      </div>
      )
    }
  }

  class Index extends Component{
      render(){
          return(
              <div>
                  <Header />
                  <Main />
                  <Footer />
                  <div>
                    <LikeButton likedText='已赞' unlikedText='赞' />
                  </div>
              </div>
          )
      }
  }
  class LikeButton extends Component {
    constructor () {
      super()
      this.state = { isLiked: false }
    }
  
    handleClickOnLikeButton () {
        console.log(this.state.isLiked)
        this.setState({
            isLiked: !this.state.isLiked
        })
        console.log(this.state.isLiked)
        
    }
  
    render () {
        const likedText = this.props.likedText || '取消'
        const unlikedText = this.props.unlikedText || '点赞'
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
            {this.state.isLiked ? '取消' : '点赞'} 👍
            </button>
        )
    }
  }

ReactDOM.render(<Index />, document.getElementById('root'));