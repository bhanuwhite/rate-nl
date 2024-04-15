import React from 'react'

function Footer ()  {
  return (
    <div>
      <footer className='fixed bottom-0 w-full'>
          <div className='flex justify-between items-center bg-[#D3F0FA]  px-[60px] h-[40px]'>
            <div className='text-[16px] font-normal text-[#00303C] underline text-center'>More Information about Rate.nl</div>
            <div className='text-[16px] font-normal text-[#00303C] underline text-center'>General Terms and conditions.</div>
            <div className='text-[16px] font-normal text-[#00303C] underline text-center'>Data usage and privacy guidelines</div>
          </div>
        </footer>
    </div>
  )
}

export default Footer
