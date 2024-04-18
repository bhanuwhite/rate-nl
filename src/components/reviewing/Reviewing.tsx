import React from 'react'
import { HiSpeakerWave } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'

const Reviewing = () => {
  const history=useNavigate();
  const handleApprove=()=>{
    history('/cardLastPage')
  }
  return (
    <div>
        <div className="max-w-[1200px] justify-start mx-[15px] lg:mx-auto">
          <div className="flex max-w-[1000px]">
            <div className="flex items-center gap-[20px] relative">
              <div>
                <img
                  src="/images/chatbot.png"
                  className="w-[350px]"
                  alt=""
                />
              </div>
              <div className="mx-auto relative">
                <div
                  className="block p-[2rem] ms-[5px] border relative rounded-lg shadow-bottom bg-[#ECF8FD] w-full"
                >
                  <h5 className="mb-2 lg:text-2xl text-[20px] font-bold tracking-tight text-gray-900 dark:text-white">
                    Thank you for reviewing your input!
                  </h5>
                  <p className="font-normal ms-[5px] text-gray-700 dark:text-gray-400 lg:text-[18px] text-[15px] mb-4">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer erat velit, consequat ac erat quis, congue luctus
                    mi. Aenean condimentum sem neque, eget congue felis pulvinar
                    et. Praesent turpis nunc, tristique vitae faucibus ac,
                    fringilla a tortor. In vitae cursus felis. Curabitur dictum
                    tellus vitae eros pretium.
                  </p>

                  <div className="flex flex-wrap lg:flex-no-wrap gap-[10px] sm:justify-center lg:gap-[20px]">
                    <button
                    onClick={handleApprove}
                      type="button"
                      className="text-white min-w-[135px] bg-[#35AC7A] focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
                    >
                      Approve
                    </button>
                    <button
                      type="button"
                      className="text-white min-w-[135px] bg-[#D1105A] focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      Make Changes
                    </button>
                  </div>
                </div>
                {/* <div className="triangle-left"></div> */}
                <img src='/images/left.png' className="w-[25px] h-[40px] left-[-19px] top-[50%] transform -translate-y-1/2 absolute" alt="" />

              </div>

              <div className="ms-3">
                <div className="edit_icon">
                  <HiSpeakerWave
                    className="h-[25px] w-[25px]"
                    style={{ color: "#fff" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div> 

    </div>
  )
}

export default Reviewing
