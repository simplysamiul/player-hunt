import footerImg from '../../../assets/logo-footer.png'
import './FooterContent.css'

const FooterContent = () => {
    return (
        <div>
            <img className='mx-auto mb-8' src={footerImg} alt="Footer-logo" />
            <div className='grid grid-cols-3 justify-items-center items-center'>
                <div>
                    <h4 className='text-white mb-2'>About Us</h4>
                    <p className='text-gray-500 text-sm w-3/5'>We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>
                <div>
                    <h4 className='text-white mb-4'>Quick Links</h4>
                    <li className='text-gray-500 mb-2'><a href="">Home</a></li>
                    <li className='text-gray-500 mb-2'><a href="">Services</a></li>
                    <li className='text-gray-500 mb-2'><a href="">About</a></li>
                    <li className='text-gray-500 mb-2'><a href="">Contact</a></li>
                </div>
                <div>
                    <h5 className='text-white mb-2'>Subscribe</h5>
                    <p className='mb-4 text-gray-500 text-sm w-3/5'>Subscribe to our newsletter for the latest updates.</p>
                    <div className='footer-input'>
                        <input type="email" name="" id="" placeholder='Enter your email' />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterContent;