import './NewsLetter.css';

const NewsLetter = () => {
    return (
        <div className='newletter-container text-center'>
            <h1 className='font-bold text-2xl mb-2'>Subscribe to our Newsletter</h1>
            <p className='text-sm text-gray-400 mb-4'>Get the latest updates and news right in your inbox!</p>
            <div className='newsletter-input'>
                <input type="email" name="" id="" placeholder='Enter your email' />
                <button>Subscribe</button>
            </div>
        </div>
    );
};

export default NewsLetter;