import React from 'react';
import { IoDownloadOutline } from "react-icons/io5";
import { AiOutlineShareAlt } from "react-icons/ai";
import { MdMailOutline } from "react-icons/md";
import { GrAttachment } from "react-icons/gr";
import { BsSendFill } from "react-icons/bs";
import './CardLastPage.css';


function CardLastPage() {
    return (
        <>
         <div className='main_body bg-[#F6FCFE]'>
         <div className='mx-[50px] section'>
         <div className='card  flex flex-wrap lg:flex-no-wrap  max-w-[1200px] bg-[#fff] rounded-lg mx-auto border border-blue-200' style={{ borderRadius: '15px' }}>
                <div className='relative  w-full lg:w-[35%] xl:w-[35%]'>
                    <img src="/images/people.png" className=" w-[100%] h-[100%]" alt="" style={{ borderBottomLeftRadius: '11px', borderTopLeftRadius: '11px' }} />
                    <div className=''>
                        <img src="/images/Vess_robot_icon.png" className="h-[137.8px] w-[137.91px]  absolute right-[-67px] top-[17%]  rounded-full" alt="" />
                    </div>
                </div>
                <div className='lg:w-[65%] xl:w-[65%] w-full lg:px-0 px-5'>
                    <div className='max-w-[600px] mx-auto flex h-full flex-col justify-center'>
                        <div className='flex items-center gap-2 mb-5 mt-5 lg:mt-0'>
                            <img src="/images/Check_button.png" className='w-[40px] h-[40px] '/>
                        <h1 className='lg:text-[32px] text-[19px] font-medium  text-left'>Thanks you for your time!</h1>
                        </div>
                        <p className='text-[13px] font-normal text-[#00303C] leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer erat velit,
                            consequat ac erat quis, congue luctus mi. Aenean condimentum sem neque, eget congue felis pulvinar et.
                            Praesent turpis nunc, tristique vitae faucibus ac, fringilla a tortor. In vitae cursus felis.
                            Curabitur dictum tellus vitae eros pretium, at euismod ipsum mattis. In facilisis ipsum eu sem fermentum bibendum.
                            Maecenas justo orci, maximus id pretium ac, ultricies eu mi. Quisque cursus, ex ut vulputate volutpat,
                            nisl massa blandit dui, eget suscipit elit ligula non eros. Donec lobortis sem sed urna ultricies cursus.
                            Mauris et quam volutpat, auctor libero eu, sodales nisi.</p>
                        <div className='py-4'>
                            <div className='flex items-center gap-[20px] mt-2'>
                                <div className='edit_icon'>
                                    <IoDownloadOutline className='h-[20px] w-[20px]' style={{ color: '#fff' }} />
                                </div>
                                <div>
                                    <h3 className='lg:text-[17px] text-[15px]  font-medium'>Download your survey as a pdf</h3>
                                    <p className='text-[12px] text-[#3498DB]'>Cick here to download your survey as a pdf</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-[20px] mt-3'>
                                <div className='edit_icon mb-[46px]'>
                                    <AiOutlineShareAlt className='h-[20px] w-[20px]' style={{ color: '#fff' }} />
                                </div>
                                <div>
                                    <h3 className='lg:text-[17px] text-[15px] text-[#000] font-medium'>Share your survey</h3>
                                    <p className='text-[12px] text-[#00303C]'>Copy the link bellow to share your survey results</p>
                                    <div className='flex items-center gap-3 justify-center'>
                                    <div className="h-40px w-[210px] rounded-lg border border-[#7C8388] flex items-center  p-5 py-1 mt-2">
                                    <a
                                        href="#"
                                        className="text-[12px] border-b-2 text-[#3498DB]"
                                    >
                                       www.rate.nl/srvy/hxghgshg
                                    </a>
                                </div>
                                <div className='icons mt-3 '>
                                    <GrAttachment className='h-[15px] w-[15px]' style={{ color: '#fff' }} />
                                </div>
                                </div>
                                </div>
                                
                            </div>
                            
                           
                             <div className='flex items-center gap-[20px] mt-2'>
                                <div className='edit_icon mb-[46px]'>
                                    <MdMailOutline className='h-[20px] w-[20px]' style={{ color: '#fff' }} />
                                </div>
                                <div>
                                    <h3 className='lg:text-[17px] text-[15px] text-[#000] font-medium'>E-mail your survey</h3>
                                    <p className='text-[12px] text-[#00303C]'>Want a coy of your survey? Fill in your email bellow</p>
                                    <div className='flex items-center gap-3 justify-center'>
                                    <div className="h-40px w-[210px] rounded-lg border border-[#7C8388] flex items-center p-5 py-1 mt-2">
                                    <a
                                        href="#"
                                        className="text-[#3498DB] text-[12px] border-b-2"
                                    >
                                       abc@emailcorp.nl
                                    </a>
                                </div>
                                <div className='icons mt-3'>
                                    <BsSendFill className='h-[17px] w-[17px]' style={{ color: '#fff' }} />
                                </div>
                                </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
            </div>
      
          
        </>
    )
}

export default CardLastPage
