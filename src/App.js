import React from 'react';
import './App.css';
import QrCodeImage from './images/image-qr-code.png';

function App() {
   return (
      <main className='qr-code-container'>
         <div className='img-container'>
            <img
               src={QrCodeImage}
               alt='Qr code'
               className='block max-w-[90%] m-auto rounded-[10px] mt-5 cursor-pointer'
            />
         </div>
         <div className='qr-info p-[1.2rem]'>
            <h1 > Improve your front-end skills by building projects</h1>
            <p>
               Scan the QR code to visit Frontend Mentor and take your coding
               skills to the next level
            </p>
         </div>
      </main>
   );
}

export default App;
