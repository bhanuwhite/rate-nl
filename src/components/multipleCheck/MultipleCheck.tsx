import React from "react";
import { HiSpeakerWave } from "react-icons/hi2";
import { MdEdit, MdOutlineRefresh } from "react-icons/md";

const MultipleCheck = ({ onChange, check }: any) => {
    console.log(check)
  return (
    <div>

      <div className="max-w-[1200px] justify-start mx-[15px] lg:mx-auto">
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
                  Muliple Choise / Multiple Answer Question
                </h5>
                <p className="font-normal ms-[5px] text-gray-700 dark:text-gray-400 lg:text-[18px] text-[15px] mb-4">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer erat velit, consequat ac erat quis, congue luctus mi.
                  Aenean condimentum sem neque.
                </p>
                <h5 className="mb-2 lg:text-2xl text-[20px] font-bold tracking-tight text-gray-900 dark:text-white">
                  This is the Question we’re asking:
                </h5>
                <div
                  className="bg-[#fff] mt-2 flex items-center h-[80px] py-5 px-3 rounded"
                  style={{ border: "1px solid #586166" }}
                >
                  <div className="flex items-center">
                    <input
                      onChange={() =>
                        onChange("Chosen Answer out of Multiple Choice")
                      }
                      id="checked-checkbox"
                      type="checkbox"
                      className="w-[2rem] h-[2rem] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checked-checkbox"
                      className="ms-2 lg:text-[18px] text-[15px] font-semibold text-gray-900 dark:text-gray-300"
                    >
                      Chosen Answer out of Multiple Choice
                    </label>
                  </div>
                </div>
                <div
                  className="bg-[#fff] mt-2 flex items-center h-[80px] py-5 px-3 rounded"
                  style={{ border: "1px solid #586166" }}
                >
                  <div className="flex items-center">
                    <input
                      onChange={() =>
                        onChange("Possible Answer out of Multiple Answers")
                      }
                      id="checked-checkbox"
                      type="checkbox"
                      className="w-[2rem] h-[2rem] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checked-checkbox"
                      className="ms-2 lg:text-[18px] text-[15px] font-semibold text-gray-900 dark:text-gray-300"
                    >
                      Possible Answer out of Multiple Answers
                    </label>
                  </div>
                </div>
                <div
                  className="bg-[#fff] mt-2 flex items-center h-[80px] py-5 px-3 rounded"
                  style={{ border: "1px solid #586166" }}
                >
                  <div className="flex items-center">
                    <input
                      onChange={() =>
                        onChange("Chosen Answer out of Multiple Choice1")
                      }
                      id="checked-checkbox"
                      type="checkbox"
                      className="w-[2rem] h-[2rem] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checked-checkbox"
                      className="ms-2 lg:text-[18px] text-[15px] font-semibold text-gray-900 dark:text-gray-300"
                    >
                      Chosen Answer out of Multiple Choice1
                    </label>
                  </div>
                </div>
                <div
                  className="bg-[#fff] mt-2 flex items-center h-[80px] py-5 px-3 rounded"
                  style={{ border: "1px solid #586166" }}
                >
                  <div className="flex items-center">
                    <input
                      onChange={() =>
                        onChange("Chosen Answer out of Multiple Choice2")
                      }
                      id="checked-checkbox"
                      type="checkbox"
                      className="w-[2rem] h-[2rem] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checked-checkbox"
                      className="ms-2 lg:text-[18px] text-[15px] font-semibold text-gray-900 dark:text-gray-300"
                    >
                      Chosen Answer out of Multiple Choice2
                    </label>
                  </div>
                </div>
                <div
                  className="bg-[#fff] mt-2 flex items-center h-[80px] py-5 px-3 rounded"
                  style={{ border: "1px solid #586166" }}
                >
                  <div className="flex items-center">
                    <input
                      onChange={() =>
                        onChange(" Other: Write your short answer here")
                      }
                      id="checked-checkbox"
                      type="checkbox"
                      className="w-[2rem] h-[2rem] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checked-checkbox"
                      className="ms-2 lg:text-[18px] text-[15px] font-semibold text-gray-900 dark:text-gray-300"
                    >
                      Other: Write your short answer here
                    </label>
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

        {check.length>0&&<div className="max-w-[1200px] justify-end mx-[15px] lg:mx-auto flex my-5">
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
              <div className=" mx-auto flex max-w-[1000px]">
                <div className="block p-6 bg-white border border-gray-200 rounded-lg relative shadow-bottom w-full">
                  <h5 className="mb-2 lg:text-2xl text-[20px] font-bold tracking-tight text-gray-900 dark:text-white">
                    Your Answer(s) to the Muliple Choise / Multiple Answer
                    Question
                  </h5>
                  {check.map((option: string, index: number) => (
                      <div
                        key={index}
                        className="bg-[#fff] flex items-center h-[80px] py-5 px-3 rounded"
                        style={{ border: "1px solid #586166" }}
                      >
                        <div className="flex items-center">
                          <input
                            id={`checked-checkbox-${index}`}
                            type="checkbox"
                            className="w-[2rem] h-[2rem] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            checked // Checkbox is always checked for selected options
                          />
                          <label
                            htmlFor={`checked-checkbox-${index}`}
                            className="ms-2 text-[18px] font-semibold text-gray-900 dark:text-gray-300"
                          >
                            {option}
                          </label>
                        </div>
                      </div>
                  
                    ))}
                  <p className="font-normal ms-[5px] mt-4 text-gray-700 dark:text-gray-400 lg:text-[18px] text-[15px] mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer erat velit, consequat ac erat quis, congue luctus
                    mi. Aenean condimentum sem neque, eget congue felis pulvinar
                    et. Praesent turpis nunc, tristique vitae faucibus ac,
                    fringilla a tortor. In vitae cursus felis. Curabitur dictum
                    tellus vitae eros pretium, at euismod ipsum mattis. In
                    facilisis ipsum eu sem fermentum bibendum.
                  </p>

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

export default MultipleCheck;
