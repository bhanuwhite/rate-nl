import React, { useState } from "react";
import FeedBackCards from "../feedBackCards/FeedBackCards";
import MultipleChoiceQues from "../../multipleChoice/MultipleChoiceQues";
import BooleanQues from "../../booleanQuestion/BooleanQues";
import { MdEdit, MdOutlineRefresh } from "react-icons/md";
import RatingQues from "../../ratingQues/RatingQues";
import MultipleCheck from "../../multipleCheck/MultipleCheck";
import Reviewing from "../../reviewing/Reviewing";

const ChatInput = () => {
  const [answer, setAnswer] = useState<String>(
    "Chosen Answer out of Multiple Choice"
  );
  const handleSelectOption = (option: string) => {
    setAnswer(option);
  };
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const handleChecked = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  const [boolAns, setBoolAns] = useState<String>("Option1");
  const handleBoolSelect = (option: string) => {
    setBoolAns(option);
  };
  const [next, setNext] = useState(0);
  const [inputnext, setInputNext] = useState(0);
  const handleNext = () => {
    setNext((prev) => prev + 1);
    setInputNext((prev) => prev + 1);
  };
  const handlePrevious = () => {
    setNext((prev) => prev - 1);
    setInputNext((prev) => prev - 1);
  };
  const [displayText, setDisplayText] = useState("");
  const [onEnterText, setOnEnterText] = useState<any>("");
  const [EnterClicked, setEnterClicked] = useState<boolean>(false);
  const [BoolEnterClicked, setBoolEnterClicked] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);
  const [checkBox, setCheckBox] = useState(true);
  const handleCheckPress = (event: any) => {
    if (event.key === "Enter") {
      setClicked(true);
      setCheckBox(false);
    }
  };
  const handleEditIconClick = () => {
    setDisplayText(onEnterText);
  };
  const [bool, setBool] = useState(true);
  const handleBoolPress = (event: any) => {
    if (event.key === "Enter") {
      setBoolEnterClicked(true);
      setBool(false);
    }
  };
  const [radio, setRadio] = useState(true);
  const handlePress = (event: any) => {
    if (event.key === "Enter") {
      setEnterClicked(true);
      setRadio(false);
    }
  };

  // const handleTextareaKeyPress = (event: any) => {
  //   if (event.key === "Enter") {
  //     setDisplayText("");
  //     setOnEnterText(displayText);
  //   }
  // };

  const handleSubmit = () => {
    setDisplayText("");
    setOnEnterText(displayText);
  };

  const handleTextareaKeyPress = (event: any) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    } else if (event.key === "Enter" && event.shiftKey) {
      setDisplayText((prevText) => prevText);
    }
  };

  const handleChange = (e: any) => {
    setDisplayText(e.target.value);
  };


  return (
    <>
      <div className="main_body">
        <div className="section1">
          {next === 0 && (
            <FeedBackCards
              onEditIconClick={handleEditIconClick}
              typedText={onEnterText}
            />
          )}
          {next === 1 && (
            <MultipleChoiceQues
              onChange={handleSelectOption}
              EnterClicked={EnterClicked}
              answer={answer}
            />
          )}

          {next === 2 && (
            <BooleanQues
              onChange={handleBoolSelect}
              EnterClicked={BoolEnterClicked}
              boolAns={boolAns}
            />
          )}

          {next === 3 && <RatingQues />}

          {next === 4 && (
            <MultipleCheck
              onChange={handleChecked}
              EnterClicked={clicked}
              check={selectedOptions}
            />
          )}

          {next === 5 && <Reviewing />}
        </div>
        <div
          className=" py-4  bg-[#F2F4F5] rounded-lg shadow-md fixed bottom-[43px] left-0 w-full"
          style={{
            borderTop: "1px solid #D9DCDD",
            borderBottom: "1px solid #D9DCDD",
          }}
        >
          <div className="flex items-center justify-between max-w-[1200px] mx-auto gap-[20px]">
            {next !== 0 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="text-gray-900  border border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2 text-center   dark:text-gray-400  dark:focus:ring-gray-800"
              >
                Previous
              </button>
            )}

            {(inputnext === 0 || inputnext === 5) && (
              <textarea
                id="message"
                value={displayText}
                onChange={handleChange}
                onKeyPress={handleTextareaKeyPress}
                className="block p-2.5 w-full focus:outline-none text-sm text-gray-700 bg-white rounded-lg border h-[50px] border-gray-300 overflow-hidden  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Write your short answer here"
              ></textarea>
            )}

            {inputnext === 3 && (
              <textarea
                id="message"
                value={displayText}
                onChange={handleChange}
                onKeyPress={handleTextareaKeyPress}
                className="block p-2.5 w-full focus:outline-none text-sm text-gray-700 bg-white rounded-lg border h-[50px] border-gray-300 overflow-hidden  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Write your short answer here"
              ></textarea>
            )}

            {displayText !== "" ? (
              <button
                type="button"
                className="text-white w-[10%] bg-gray-700 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2 flex justify-center dark:bg-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Submit
              </button>
            ) : (
              <img
                src="/images/Record_button.png"
                className="h-[32px] w-[32px] "
                alt=""
              />
            )}

            {inputnext === 1 && radio ? (
              <div className="max-w-[1200px] justify-end mx-auto flex my-5">
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
                              onKeyDown={handlePress}
                              checked={true}
                              // id="default-radio-1"
                              type="radio"
                              value=""
                              // name="default-radio-1"
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
              </div>
            ) : (
              inputnext === 1 && (
                <textarea
                  id="message"
                  value={displayText}
                  onChange={handleChange}
                  onKeyPress={handleTextareaKeyPress}
                  className="block p-2.5 w-full focus:outline-none text-sm text-gray-700 bg-white rounded-lg border h-[50px] border-gray-300 overflow-hidden  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Write your short answer here"
                ></textarea>
              )
            )}

            {inputnext === 2 && bool ? (
              <div className="max-w-[1200px] justify-end mx-auto flex my-5">
                <div className="flex justify-end max-w-[1000px]">
                  <div className="flex items-center gap-[20px] w-full">
                    <div className="me-3"></div>
                    <div className=" mx-auto flex min-w-[800px]">
                      <div className="block p-[2rem] bg-white border border-gray-200 rounded-lg relative shadow-bottom w-full">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          Boolean Answer
                        </h5>
                        <div
                          className="bg-[#fff] me-2 flex items-center w-[50%] h-[80px] py-5 px-3 rounded"
                          style={{ border: "1px solid #586166" }}
                        >
                          <div className="flex items-center">
                            <input
                              onKeyDown={handleBoolPress}
                              checked={true}
                              // id="default-radio-2"
                              type="radio"
                              value=""
                              // name="default-radio-2"
                              className="w-[2rem] h-[2rem] text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              htmlFor="default-radio-2"
                              className="ml-2 text-[18px] font-semibold text-gray-900 dark:text-gray-300"
                            >
                              {boolAns}
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
              </div>
            ) : (
              inputnext === 2 && (
                <textarea
                  id="message"
                  value={displayText}
                  onChange={handleChange}
                  onKeyPress={handleTextareaKeyPress}
                  className="block p-2.5 w-full focus:outline-none text-sm text-gray-700 bg-white rounded-lg border h-[50px] border-gray-300 overflow-hidden  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Write your short answer here"
                ></textarea>
              )
            )}

            {inputnext === 4 && checkBox ? (
              <div className="max-w-[1200px] justify-end mx-auto flex my-5">
                <div className="flex justify-end max-w-[1000px]">
                  <div className="flex items-center gap-[20px] w-full">
                    <div className="me-3"></div>
                    <div className=" mx-auto flex max-w-[1000px]">
                      <div className="block p-6 bg-white border border-gray-200 rounded-lg relative shadow-bottom w-full">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          Your Answer(s) to the Muliple Choise / Multiple Answer
                          Question
                        </h5>
                        {selectedOptions.map((option, index) => (
                          <div
                            key={index}
                            className="bg-[#fff] flex items-center h-[80px] py-5 px-3 rounded"
                            style={{ border: "1px solid #586166" }}
                          >
                            <div
                              key={index}
                              className="flex items-center mr-4 mb-2"
                            >
                              <input
                                onKeyDown={handleCheckPress}
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
                        <p className="font-normal ms-[5px] mt-4 text-gray-700 dark:text-gray-400 text-[18px] mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer erat velit, consequat ac erat quis,
                          congue luctus mi. Aenean condimentum sem neque, eget
                          congue felis pulvinar et. Praesent turpis nunc,
                          tristique vitae faucibus ac, fringilla a tortor. In
                          vitae cursus felis. Curabitur dictum tellus vitae eros
                          pretium, at euismod ipsum mattis. In facilisis ipsum
                          eu sem fermentum bibendum.
                        </p>

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
              </div>
            ) : (
              inputnext === 4 && (
                <textarea
                  id="message"
                  value={displayText}
                  onChange={handleChange}
                  onKeyPress={handleTextareaKeyPress}
                  className="block p-2.5 w-full focus:outline-none text-sm text-gray-700 bg-white rounded-lg border h-[50px] border-gray-300 overflow-hidden  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Write your short answer here"
                ></textarea>
              )
            )}

            <button
              type="button"
              onClick={handleNext}
              className="text-white w-[15%] bg-gray-700 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2 flex dark:bg-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Next Question
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatInput;
