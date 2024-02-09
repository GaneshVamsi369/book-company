import './index.css'

const Footer=()=>{
    return(
        <div className='foot'>
            <div className='footdiv'>
                <div className='cont'>
                    <img
                        src="https://static.wixstatic.com/media/05fb18_b313a1f0a7934460993f88ebaace2816~mv2.png"
                        alt="website logo" className='logoimg'
                    />
                    <p>The web is a one-stop-solution for authors looking to bring their stories to life.
                        Furthermore, we provide 24*7 author support to help authors promote their books and
                         answer any questions they might have.
                    </p>
                </div>
                <div className='cont'>
                    <h3 className='foothead'>COMPANY</h3>
                    <p>HOME</p>
                    <p>ABOUT US</p>
                    <p>BOOKS</p>
                    <p>POEM</p>
                </div>
                <div className='cont'>
                    <h3 className='foothead'>IMPORTANT LINKS</h3>
                    <p>Privacy Policy</p>
                    <p>FAQs</p>
                    <p>Terms of Services</p>
                </div>
            </div>
            <div className='footerfoot'>
                <p>&#169; Wordings. 2024 ALL Rights Reserved.</p>
                <p>Privacy | Terms of Services</p>
            </div>
        </div>
    )
}
export default Footer