import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AiFillAudio } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";
import { HiSpeakerWave } from "react-icons/hi2";




function Cards() {
  const history = useNavigate();
  const handleClick = () => {
    history('/SurveyStarted')
  }
  return (
    <>
      {/* <div className='card  flex max-w-[1200px] bg-[#fff] rounded-lg mx-auto border border-blue-200'>
            <div className='relative w-[35%]'>
              <img src="/images/people.png" className=" w-[100%] h-[100%]" alt="" />
              <div className=''>
                <img src="/images/emoji1.png" className="h-[127.8px] w-[127.91px]  absolute right-[-67px] top-[13%] border-3 border-gray-300 rounded-full" alt="" />
              </div>
            </div>
            <div className='w-[65%]'>
              <div className='max-w-[600px] mx-auto flex h-full flex-col justify-center'>
                <h1 className='text-[32px] font-medium mb-5 text-left'>Welcome to the survey!</h1>
                <p className='text-[13px] font-normal text-[#00303C] leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer erat velit,
                  consequat ac erat quis, congue luctus mi. Aenean condimentum sem neque, eget congue felis pulvinar et.
                  Praesent turpis nunc, tristique vitae faucibus ac, fringilla a tortor. In vitae cursus felis.
                  Curabitur dictum tellus vitae eros pretium, at euismod ipsum mattis. In facilisis ipsum eu sem fermentum bibendum.
                  Maecenas justo orci, maximus id pretium ac, ultricies eu mi. Quisque cursus, ex ut vulputate volutpat,
                  nisl massa blandit dui, eget suscipit elit ligula non eros. Donec lobortis sem sed urna ultricies cursus.
                  Mauris et quam volutpat, auctor libero eu, sodales nisi.</p>
                <div className='py-4'>
                  <div className='flex items-center gap-[20px] mt-3'>
                    <div>
                      <img src="/images/Record_button.png" className="h-[32px] w-[32px] " alt="" />
                    </div>
                    <div>
                      <h3 className='text-[17px]  font-medium'>Speech Input Button</h3>
                      <p className='text-[12px] text-[#00303C]'>If you click this button you can use speech for your input</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-[20px] mt-3'>
                    <div>
                      <img src="/images/Edit _button.png" className="h-[32px] w-[32px] " alt="" />
                    </div>
                    <div>
                      <h3 className='text-[17px] text-[#000] font-medium'>Edit Button</h3>
                      <p className='text-[12px] text-[#00303C]'>Want to make a simple edit or clear a typo? This button is your friend!</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-[20px] mt-3'>
                    <div>
                      <img src="/images/Undo_button.png" className="h-[32px] w-[32px] " alt="" />
                    </div>
                    <div>
                      <h3 className='text-[17px] text-[#000] font-medium'>Reset Input Button</h3>
                      <p className='text-[12px] text-[#00303C]'>You can reset your input by clicking this button</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-[20px] mt-3'>
                    <div>
                      <img src="/images/Speaker_button.png" className="h-[32px] w-[32px] " alt="" />

                    </div>
                    <div>
                      <h3 className='text-[17px] text-[#000] font-medium'>Speaker Button</h3>
                      <p className='text-[12px] text-[#00303C]'>With this button you can let the chatbot read the survey questions for you</p>
                    </div>
                  </div>
                  <div className='mt-[35px]'>
                    <button type="button" onClick={handleClick} className="text-white bg-[#7C8388] w-[full] h-[30px] flex items-center font-medium rounded-full text-sm py-2 px-[35px] mb-2">Start</button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
      <div className='card  flex flex-wrap lg:flex-no-wrap  max-w-[1200px] bg-[#fff] rounded-lg mx-auto border border-blue-200' style={{ borderRadius: '15px' }}>
        <div className='relative   w-full lg:w-[35%] xl:w-[35%]'>
          <img src="/images/people.png" className=" w-[100%] h-[100%]" alt="" style={{ borderBottomLeftRadius: '11px', borderTopLeftRadius: '11px' }} />
          <div className='hidden lg:block'>
            <img src="/images/Vess_robot_icon.png" className="h-[137.8px] w-[137.91px]  absolute right-[-67px] top-[17%]  rounded-full" alt="" />
          </div>
        </div>
        <div className='lg:w-[65%] xl:w-[65%] w-full lg:px-0 sm:px-5'>
          <div className='max-w-[600px] mx-auto flex h-full flex-col justify-center'>
            <h1 className='lg:text-[32px] text-[20px] font-medium mb-5 text-left'>Welcome to the survey!</h1>
            <p className='text-[13px] font-normal text-[#00303C] leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer erat velit,
              consequat ac erat quis, congue luctus mi. Aenean condimentum sem neque, eget congue felis pulvinar et.
              Praesent turpis nunc, tristique vitae faucibus ac, fringilla a tortor. In vitae cursus felis.
              Curabitur dictum tellus vitae eros pretium, at euismod ipsum mattis. In facilisis ipsum eu sem fermentum bibendum.
              Maecenas justo orci, maximus id pretium ac, ultricies eu mi. Quisque cursus, ex ut vulputate volutpat,
              nisl massa blandit dui, eget suscipit elit ligula non eros. Donec lobortis sem sed urna ultricies cursus.
              Mauris et quam volutpat, auctor libero eu, sodales nisi.</p>
            <div className='py-4'>
              <div className='flex items-center gap-[20px] mt-3'>
                <div className='edit_icon'>
                  <AiFillAudio className='h-[20px] w-[20px]' style={{ color: '#fff' }} />
                </div>
                <div>
                  <h3 className='text-[17px]  font-medium'>Speech Input Button</h3>
                  <p className='text-[12px] text-[#00303C]'>If you click this button you can use speech for your input</p>
                </div>
              </div>
              <div className='flex items-center gap-[20px] mt-3'>
                <div className='edit_icon'>
                  <MdModeEdit className='h-[20px] w-[20px]' style={{ color: '#fff' }} />
                </div>
                <div>
                  <h3 className='text-[17px] text-[#000] font-medium'>Edit Button</h3>
                  <p className='text-[12px] text-[#00303C]'>Want to make a simple edit or clear a typo? This button is your friend!</p>
                </div>
              </div>
              <div className='flex items-center gap-[20px] mt-3'>
                <div className='edit_icon'>
                  <IoMdRefresh className='h-[20px] w-[20px]' style={{ color: '#fff' }} />
                </div>
                <div>
                  <h3 className='text-[17px] text-[#000] font-medium'>Reset Input Button</h3>
                  <p className='text-[12px] text-[#00303C]'>You can reset your input by clicking this button</p>
                </div>
              </div>
              <div className='flex items-center gap-[20px] mt-3'>
                <div className='edit_icon'>
                  <HiSpeakerWave className='h-[20px] w-[20px]' style={{ color: '#fff' }} />
                </div>
                <div>
                  <h3 className='text-[17px] text-[#000] font-medium'>Speaker Button</h3>
                  <p className='text-[12px] text-[#00303C]'>With this button you can let the chatbot read the survey questions for you</p>
                </div>
              </div>
              <div className='mt-[35px]'>
                <button type="button" onClick={handleClick} className="text-white bg-[#7C8388] cursor-pointer w-[full] h-[30px] flex items-center font-medium rounded-full text-sm py-2 px-[35px] mb-2">Start</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Cards
