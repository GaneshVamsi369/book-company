import {Component} from 'react'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'

class Landing extends Component{
    state={one:''}

    renderlink = () => {
        const {history} = this.props
        history.push('/marketplace')
      }

      renderpoem = () => {
        const {history} = this.props
        history.push('/poem')
      }

    render(){
        return(
            <div className='bg'>
            <Header/>
            <div className='body'>
                <h3 className='intro'>This website is a one-stop-solution for authors looking to bring their stories to life.
                     Our experienced team of publishing professionals provide expert guidance every step of
                      the way, from the initial decision to publish to the launch of the finished product. 
                      We make the publishing process easy and stress-free, so authors can focus on creating 
                      the best book possible. Furthermore, we provide 24*7 author support to help authors promote 
                      their books and answer any questions they might have.</h3>
                <h1 className='bookhead'>WANT TO PUBLISH YOUR BOOK?</h1>
                <p className='bookpara'>A novel concept which brings life to static images for an engaged
                     and immersive experience to the readers. These are 6D books. They 
                     use augmented and virtual reality so the readers can experience what 
                     is printed in the book. In addition to video, audio, downloadable PDF 
                     notes and 3D images, they come with 3D glasses.
                </p>
                <button className='landingbtn' type='button' onClick={this.renderlink}>Marketplace</button>
                <h1 className='bookhead'>GET YOUR POEM PUBLISHED HERE!</h1>
                <p className='bookpara'>The web is a one-stop-solution for authors looking to bring their stories to life.
                     Our experienced team of publishing professionals provide expert guidance every step of
                      the way, from the initial decision to publish to the launch of the finished product. 
                      We make the publishing process easy and stress-free, so authors can focus on creating 
                      the best book possible. Furthermore, we provide 24*7 author support to help authors promote 
                      their books and answer any questions they might have.
                </p>
                <button className='landingbtn' type='button' onClick={this.renderpoem}>CLICK HERE</button>
            </div>
            <Footer/>
            </div>
        )
    }
}
export default Landing