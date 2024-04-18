import React, { useState } from "react";
import { HiSpeakerWave } from "react-icons/hi2";
import { MdEdit, MdOutlineRefresh } from "react-icons/md";
import './BooleanQues.css'

const BooleanQues = ({ onChange, boolAns }: any) => {
  const [ans, setans] = useState();
  const handleOptionChange = (option: any) => {
    setans(option);
    onChange(option); 
  };
  return (
    <div>
        
      <div className="max-w-[1200px] justify-start mx-auto">
        <div className="flex max-w-[1000px]">
          <div className="flex items-center gap-[20px] relative">
            <div>
              <img
                src="/images/chatbot.png"
                className="w-[150px]"
                alt=""
              />
            </div>
            <div className="mx-auto relative max-w-[1000px]">
              <div
                className="block p-6 ms-[5px] border relative rounded-lg shadow-bottom bg-[#ECF8FD] w-full"
              >
                <h5 className="mb-2 lg:text-2xl text-[20px] font-bold tracking-tight text-gray-900 dark:text-white">
                  Boolean Question
                </h5>
                <div className="flex  gap-5 boolean_question">
                  <div
                    className="bg-[#fff] flex items-center h-[80px] py-5 px-3 rounded  boolean_input min-w-[370px]"
                    style={{ border: "1px solid #586166" }}
                  >
                    <div className="flex items-center">
                      <input
                        checked={ans === "Option1"}
                        id="default-radio-1"
                        onChange={() => {
                          handleOptionChange("Option1");
                        }}
                        type="radio"
                        value=""
                        name="default-radio-1"
                        className="w-[2rem] h-[2rem] text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="default-radio-1"
                        className="ml-2 lg:text-[18px] text-[15px] font-semibold text-gray-900 dark:text-gray-300"
                      >
                        Option 1
                      </label>
                    </div>
                  </div>
                  <div
                    className="bg-[#fff] flex items-center h-[80px] py-5 px-3 rounded boolean_input min-w-[370px]"
                    style={{ border: "1px solid #586166" }}
                  >
                    <div className="flex items-center">
                      <input
                        checked={ans === "Option2"}
                        id="default-radio-2"
                        onChange={() => {
                          handleOptionChange("Option2");
                        }}
                        type="radio"
                        value=""
                        name="default-radio-2"
                        className="w-[2rem] h-[2rem] text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="default-radio-2"
                        className="ml-2 lg:text-[18px] text-[15px] font-semibold text-gray-900 dark:text-gray-300"
                      >
                        Option 2
                      </label>
                    </div>
                  </div>
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

       
        {boolAns!==null &&<div className="max-w-[1200px] justify-end mx-auto flex my-5">
          <div className="flex justify-end max-w-[1000px]">
            <div className="flex items-center gap-[20px] w-full">
              <div className="me-3">
                <div className="edit_icon">
                  <MdOutlineRefresh
                    className="h-[25px] w-[25px]"
                    style={{ color: "#fff" }}
                  />
                </div>
                <div className="edit_icon mt-2">
                  <MdEdit
                    className="h-[25px] w-[25px]"
                    style={{ color: "#fff" }}
                  />
                </div>
              </div>
              <div className=" mx-auto flex">
                <div className="block p-[2rem] bg-white border border-gray-200 rounded-lg relative shadow-bottom w-full boolean_input min-w-[800px]">
                  <h5 className="mb-2 lg:text-2xl text-[20px] font-bold tracking-tight text-gray-900 dark:text-white">
                    Boolean Answer
                  </h5>
                  <div
                    className="bg-[#fff] me-2 flex items-center lg:w-[50%] w-[full] h-[80px] py-5 px-3 rounded"
                    style={{ border: "1px solid #586166" }}
                  >
                    <div className="flex items-center">
                      <input
                        checked={true}
                        id="default-radio"
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-[2rem] h-[2rem] text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="default-radio"
                        className="ml-2 lg:text-[18px] text-[15px] font-semibold text-gray-900 dark:text-gray-300"
                      >
                        {boolAns}
                      </label>
                    </div>
                  </div>
                  {/* <div className="angle-left"></div> */}
                  <img src='/images/right.png' className="w-[25px] h-[40px] right-[-25px] top-[50%] transform -translate-y-1/2 absolute" alt="" />

                </div>
              </div>
              <div>
                <div className="h-[50px] w-[50px] flex ms-3 items-center justify-center font-bold rounded-full bg-[#FFB703]">
                  U.N
                </div>
              </div>
            </div>
          </div>
        </div>}

    </div>
  );
};

export default BooleanQues;
