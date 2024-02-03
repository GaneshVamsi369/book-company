import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import './index.css'

class BookDetails extends Component {
  state = {status: '', book: {}}

  componentDidMount = () => {
    this.getbook()
  }

  getbook = async () => {
    this.setState({status: 'LOAD'})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const bookDetailsApi = `https://api.itbook.store/1.0/books/${id}`
    const options = {
      method: 'GET'
    }

    const response = await fetch(bookDetailsApi, options)
    if (response.ok) {
      const data = await response.json()
      this.setState({book: data, status: 'SUCCESS'})
    } else {
      this.setState({status: 'FAIL'})
    }
  }

  loading = () => (
    <div className="loader-container" testid="loader">
      <Loader type="TailSpin" color="#8284C7" height={50} width={50} />
    </div>
  )

  successcall = () => {
    const {book} = this.state
    console.log(book)

    return (
      <div className="fullclass">
        <img src={book.image} alt={book.subtitle} />
        <h1 className='orangered'>{book.title}</h1>
        <p>{book.authors}</p>
        <h3 className='orangered'>{book.price}</h3>
        <p>{book.desc}</p>
      </div>
    )
  }

  failcall = () => (
    <div className="failureview">
      <img
        src="https://res.cloudinary.com/dwqcnoig0/image/upload/v1702135344/Group_7522_tebdpe.png"
        alt="failure view"
      />
      <p className="top-rated-book-author">
        Something went wrong, Please try again.
      </p>
      <button type="button" className="logoutbutton" onClick={this.getbook}>
        Try Again
      </button>
    </div>
  )

  renderbookitem = () => {
    const {status} = this.state
    switch (status) {
      case 'LOAD':
        return this.loading()
      case 'SUCCESS':
        return this.successcall()
      case 'FAIL':
        return this.failcall()

      default:
        return null
    }
  }

  render() {
    return (
      <div className="bg">
        <Header />
        <div className="itembody">{this.renderbookitem()}</div>
      </div>
    )
  }
}
export default BookDetails
