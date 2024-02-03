import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {IoMenu, IoCloseOutline} from 'react-icons/io5'
import './index.css'

class Header extends Component {
  state = {menudisplay: false}

  menuclicked = () => {
    this.setState(prev => ({menudisplay: !prev.menudisplay}))
  }

  closebtn = () => {
    this.setState({menudisplay: false})
  }

  render() {
    const {menudisplay} = this.state
    const {history} = this.props
    const loca = history.location.pathname
    const homeli = loca === '/' ? `${'active'} headerlistli` : 'headerlistli'
    const marketplaceli = loca === '/marketplace' ? `${'active'} headerlistli` : 'headerlistli'
    const poemli = loca === '/poem' ? `${'active'} headerlistli` : 'headerlistli'

    return (
      <nav className='nav'>
        <div className="largenav">
          <Link to="/">
            <img
              src="https://static.wixstatic.com/media/05fb18_b313a1f0a7934460993f88ebaace2816~mv2.png"
              alt="website logo" className='logoimg'
            />
          </Link>
          <ul className="headerlist">
            <Link to="/" className="linkstyle">
              <li className={homeli}> Home</li>
            </Link>

            <Link to="/marketplace" className="linkstyle">
              <li className={marketplaceli}> Marketplace</li>
            </Link>

            <Link to="/poem" className="linkstyle">
              <li className={poemli}> Poem</li>
            </Link>

          </ul>
        </div>
        <div className="shortnav">
          <Link to="/">
            <img
              src="https://static.wixstatic.com/media/05fb18_b313a1f0a7934460993f88ebaace2816~mv2.png"
              alt="website logo" className='logoimg'
            />
          </Link>
          <button
            type="button"
            className="hamburgerbtn"
            onClick={this.menuclicked}
          >
            <IoMenu />
          </button>
        </div>
        {menudisplay && (
          <div className="menu">
            <ul className="headerlist">
              <Link to="/" className="linkstyle">
                <li className={homeli}> Home</li>
              </Link>

              <Link to="/marketplace" className="linkstyle">
                <li className={marketplaceli}> Marketplace</li>
              </Link>

              <Link to="/poem" className="linkstyle">
                <li className={poemli}> Poem</li>
              </Link>

              <button
                type="button"
                className="hamburgerbtn"
                onClick={this.closebtn}
              >
                <IoCloseOutline />
              </button>
            </ul>
          </div>
        )}
      </nav>
    )
  }
}
export default withRouter(Header)
