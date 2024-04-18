import React from 'react'
import { HiSpeakerWave } from 'react-icons/hi2'

const Reviewing = () => {
  return (
    <div>
        <div className="max-w-[1200px] justify-start mx-auto">
          <div className="flex max-w-[1000px]">
            <div className="flex items-center gap-[20px] relative">
              <div>
                <img
                  src="/images/chatbot.png"
                  className="w-[350px] mt-[-19px]"
                  alt=""
                />
              </div>
              <div className="mx-auto relative min-w-[800px]">
                <div
                  className="block p-[2rem] ms-[5px] border relative rounded-lg shadow-bottom bg-[#ECF8FD] w-full"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Thank you for reviewing your input!
                  </h5>
                  <p className="font-normal ms-[5px] text-gray-700 dark:text-gray-400 text-[18px] mb-4">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer erat velit, consequat ac erat quis, congue luctus
                    mi. Aenean condimentum sem neque, eget congue felis pulvinar
                    et. Praesent turpis nunc, tristique vitae faucibus ac,
                    fringilla a tortor. In vitae cursus felis. Curabitur dictum
                    tellus vitae eros pretium.
                  </p>

                  <div className="flex gap-[20px]">
                    <button
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
                <div className="triangle-left"></div>
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
