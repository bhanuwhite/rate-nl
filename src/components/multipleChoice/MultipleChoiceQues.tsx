import React from "react";

const MultipleChoiceQues = ({ onChange, EnterClicked, answer }: any) => {
  return (
    <div>
      <div className="max-w-[1200px] justify-start mx-auto">
        <div className="flex max-w-[1000px]">
          <div className="flex items-center gap-[20px] relative">
            <div>
              <img
                src="/images/chatbot.png"
                className="w-[150px] mt-[-19px]"
                alt=""
              />
            </div>
            <div className="mx-auto relative max-w-[1000px]">
              <div
                className="block p-6 ms-[5px] border relative rounded-lg shadow-bottom bg-[#ECF8FD] w-full"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Muliple Choise Question
                </h5>
                <p className="font-normal ms-[5px] text-gray-700 dark:text-gray-400 text-[18px] mb-4">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer erat velit, consequat ac erat quis, congue luctus mi.
                  Aenean condimentum sem neque.
                </p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  This is the Question we’re asking:
                </h5>
                <div
                  className="bg-[#fff] flex items-center h-[80px] py-5 px-3 rounded"
                  style={{ border: "1px solid #586166" }}
                >
                  <div className="flex items-center">
                    <input
                      defaultChecked
                      onChange={() =>
                        onChange("Chosen Answer out of Multiple Choice")
                      }
                      id="option1"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-[2rem] h-[2rem] text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-radio-2"
                      className="ml-2 text-[18px] font-semibold text-gray-900 dark:text-gray-300"
                    >
                      Chosen Answer out of Multiple Choice
                    </label>
                  </div>
                </div>
                <div
                  className="bg-[#fff] flex items-center h-[80px] rounded py-5 px-3 my-3"
                  style={{ border: "1px solid #586166" }}
                >
                  <div className="flex items-center">
                    <input
                      onChange={() =>
                        onChange("Possible Answer out of Multiple Choice")
                      }
                      id="option2"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-[2rem] h-[2rem] text-blue-600 bg-gray-100 border-gray-300   dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-radio-2"
                      className="ml-2 text-[18px] font-semibold text-gray-900 dark:text-gray-300"
                    >
                      Possible Answer out of Multiple Choice
                    </label>
                  </div>
                </div>
                <div
                  className="bg-[#fff] flex items-center h-[80px] rounded py-5 px-3 my-3"
                  style={{ border: "1px solid #586166" }}
                >
                  <div className="flex items-center">
                    <input
                      onChange={() =>
                        onChange("Possible Answer out of Multiple Choice")
                      }
                      id="option3"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-[2rem] h-[2rem] text-blue-600 bg-gray-100 border-gray-300   dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-radio-2"
                      className="ml-2 text-[18px] font-semibold text-gray-900 dark:text-gray-300"
                    >
                      Possible Answer out of Multiple Choice
                    </label>
                  </div>
                </div>
              </div>
              <div className="triangle-left"></div>
            </div>

            <div className="ms-3">
              <img
                src="/images/Speaker_button.png"
                className="w-[70px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      
       {answer!==null&& <div className="max-w-[1200px] justify-end mx-auto flex my-5">
          <div className="flex justify-end max-w-[1000px]">
            <div className="flex   items-center gap-[20px] w-full">
              <div className="me-3">
                <img
                  src="/images/Undo_button.png"
                  className="w-[150px]"
                  alt=""
                />
                <img
                  src="/images/Edit _button.png"
                  className="w-[150px] mt-2"
                  alt=""
                />
              </div>
              <div className=" mx-auto flex max-w-[1000px]">
                <div className="block  p-6 bg-white border border-gray-200 rounded-lg relative shadow-bottom w-full">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Muliple Choise Answer
                  </h5>
                  <div
                    className="bg-[#fff] me-2 flex items-center h-[80px] py-5 px-3 rounded min-w-[780px]"
                    style={{ border: "1px solid #586166" }}
                  >
                    <div className="flex items-center">
                      <input
                        checked={true}
                        id="default-radio-1"
                        type="radio"
                        value=""
                        name="default-radio-1"
                        className="w-[2rem] h-[2rem] text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="default-radio-1"
                        className="ml-2 text-[18px] font-semibold text-gray-900 dark:text-gray-300"
                      >
                        {answer}
                      </label>
                    </div>
                  </div>
                  <div className="angle-left"></div>
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

export default MultipleChoiceQues;
