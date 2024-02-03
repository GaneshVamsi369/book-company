import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

class Marketplace extends Component{
    state={searchinput:'all',list:[],statuss:''}

    componentDidMount=()=>{
        this.getbooks()
    }

    getbooks=async ()=>{
        const {searchinput}=this.state
        this.setState({statuss:'LOAD'})
        const url=`https://api.itbook.store/1.0/search/${searchinput}`
        const response=await fetch(url)
        if (response.ok){
            const data=await response.json()
            this.setState({list:data.books,statuss:'SUCCESS'})
        }else{
            this.setState({statuss:'FAIL'})
        }
        
    }

    inputchange=event=>{
        this.setState({searchinput:event.target.value},this.getbooks)
    }

    loading = () => (
        <div className="loader-container" testid="loader">
          <Loader type="TailSpin" color="#8284C7" height={50} width={50} />
        </div>
    )

    successcall=()=>{
        const {list,searchinput}=this.state
        console.log(list.length)

        if(list.length===0){
            return(
            <p>Your search for {searchinput} did not find any matches.</p>
        )}

        return(
            <ul className='successcon'>

                {list.map(each=>(
                    <li>
                        <Link to={`/books/${each.isbn13}`} className='linkstyle'>
                        <img src={each.image} alt={each.subtitle} />
                        <h2>{each.title}</h2>
                        <h3 className='price'>{each.price}</h3>
                        </Link>
                    </li>
                ))}
            </ul>
        )
    }

    failcall=()=>{
        const {searchinput}=this.state
        return(
        <div className='loader-container'>
            <p>Your search for {searchinput} did not find any matches.</p>
        </div>
    )}

    getlist=()=>{
        const {statuss}=this.state
        switch (statuss) {
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

    render(){
        const {searchinput}=this.state
        return(
            <div className='bg'>
                <Header/>
                <div className='marketcontainer'>
                    <div className="searchbar">
                        <input
                        type="search"
                        className="searchinput"
                        placeholder="Search for books"
                        value={searchinput}
                        onChange={this.inputchange}
                        />
                        <button
                        type="button"
                        className="searchbtn"
                        onClick={this.getbooksitem}
                        testid="searchButton"
                        >
                            <BsSearch />
                        </button>
                </div>
                {this.getlist()}
              </div>
            </div>
        )
    }
}
export default Marketplace