const Instructions =() =>{
    return (
        <div className='mb-5 mt-5'>
            <p className='text-[15px] font-bold'>General Instructions</p>
            <div className='text-[14px] ml-[10px]'>
                <li className='mt-3'>Make sure you have a stable internet connection before you start the
                    test.
                </li>
                <li>Once test has begun, you cannot go back as you would be forced to submit.</li>
                <li>Once you have submitted an answer, you can’t go back.</li>
                <li>You may exit the test, but the timer will continue to run.</li>
                <li>You will see a time notice when you have 10 minutes left for the test.</li>
                <li>If the test can be retaken, your latest score will be the score used.</li>
            </div>
        </div>
    )
}
export default Instructions;