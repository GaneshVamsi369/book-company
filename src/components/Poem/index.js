import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Poem extends Component{
    state={one:''}

    submitted=event=>{
        console.log('1')
        event.preventDefault()
    }

    render(){
        return(
            <div className='bg'>
                <Header/>
                <div className='formcontainer'>
                    <form className='form'  onSubmit={this.submitted}>
                        <div className='container'>
                            <label htmlFor='title'>Title</label>
                            <input placeholder='Title'  />
                        </div>
                        <div className='container'>
                            <label htmlFor='title'>Poem</label>
                            <input placeholder='Poem'  />
                        </div>
                        <div className='container'>
                            <label htmlFor='title'>Author's Name</label>
                            <input placeholder='Name'  />
                        </div>
                        <div className='btnclass'>
                            <button type='submit' className='btn'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Poem