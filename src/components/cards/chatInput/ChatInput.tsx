import React, { useState } from "react";
import FeedBackCards from "../feedBackCards/FeedBackCards";
import MultipleChoiceQues from "../../multipleChoice/MultipleChoiceQues";
import BooleanQues from "../../booleanQuestion/BooleanQues";
import RatingQues from "../../ratingQues/RatingQues";
import MultipleCheck from "../../multipleCheck/MultipleCheck";
import Reviewing from "../../reviewing/Reviewing";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { BsFillMicMuteFill } from "react-icons/bs";
import { MdEdit, MdOutlineRefresh } from "react-icons/md";
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";
import { AiFillAudio } from "react-icons/ai";


const ChatInput = () => {
  const [answer, setAnswer] = useState(null);
  const handleSelectOption = (option: any) => {
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
  const [boolAns, setBoolAns] = useState(null);
  const handleBoolSelect = (option: any) => {
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
  // const [EnterClicked, setEnterClicked] = useState<boolean>(false);
  // const [BoolEnterClicked, setBoolEnterClicked] = useState<boolean>(false);
  // const [clicked, setClicked] = useState<boolean>(false);
  // const [checkBox, setCheckBox] = useState(true);
  const [isListening, setIsListening] = useState(false);
  // const handleCheckPress = (event: any) => {
  //   if (event.key === "Enter") {
  //     setClicked(true);
  //     setCheckBox(false);
  //   }
  // };
  const handleEditIconClick = () => {
    setDisplayText(onEnterText);
  };
  // const [bool, setBool] = useState(true);
  // const handleBoolPress = (event: any) => {
  //   if (event.key === "Enter") {
  //     setBoolEnterClicked(true);
  //     setBool(false);
  //   }
  // };
  // const [radio, setRadio] = useState(true);
  // const handlePress = (event: any) => {
  //   if (event.key === "Enter") {
  //     setEnterClicked(true);
  //     setRadio(false);
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

  const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  const startListening = () => {
    setIsListening(true);
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  };

  const stopListening = () => {
    setIsListening(false);
    SpeechRecognition.stopListening();
    setDisplayText(transcript);
    resetTranscript();
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
              // EnterClicked={EnterClicked}
              answer={answer}
            />
          )}

          {next === 2 && (
            <BooleanQues
              onChange={handleBoolSelect}
              // EnterClicked={BoolEnterClicked}
              boolAns={boolAns}
            />
          )}

          {next === 3 && <RatingQues />}

          {next === 4 && (
            <MultipleCheck
              onChange={handleChecked}
              // EnterClicked={clicked}
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
            {(next !== 0 ||
              inputnext === 1 ||
              inputnext === 2 ||
              inputnext === 4) && (
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
                value={displayText || transcript}
                // readOnly
                // value={displayText}
                onChange={handleChange}
                onKeyDown={handleTextareaKeyPress}
                // className="block p-2.5 w-full focus:outline-none text-sm text-gray-700 bg-white rounded-lg border h-[50px] border-gray-300 overflow-hidden  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                onKeyPress={handleTextareaKeyPress}
                className="block p-2.5 w-full focus:outline-none text-sm text-gray-700 bg-white rounded-lg border min-h-[50px] overflow-y-auto border-gray-300   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Write your short answer here"
              ></textarea>
            )}

            {/* {inputnext === 3 && (
              <textarea
                id="message"
                value={displayText}
                onChange={handleChange}
                onKeyPress={handleTextareaKeyPress}
                className="block p-2.5 w-full focus:outline-none text-sm text-gray-700 bg-white rounded-lg border overflow-y-auto min-h-[50px] border-gray-300  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Write your short answer here"
              ></textarea>
            )} */}

            {displayText !== "" ? (
              <button
                onClick={handleSubmit}
                type="button"
                className="text-white  min-w-[120px] justify-center bg-[#7C8388]   focus:outline-none   font-medium rounded-full text-sm px-2 py-[0.75rem] flex dark:bg-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Submit
              </button>
            ) : (
              <React.Fragment>
                {inputnext !== 1 &&
                inputnext !== 2 &&
                inputnext !== 3 &&
                inputnext !== 4 ? (
                  <React.Fragment>
                    {isListening ? (
                      <BsFillMicMuteFill  className="h-[32px] w-[32px] cursor-pointer"
                       onClick={stopListening}/>
                    ) : (
                      <div className="edit_icon">
                      <AiFillAudio
                        className="h-[25px] w-[25px]"
                        style={{ color: "#fff" }}
                        onClick={startListening}
                      />
                    </div>
                    )}
                  </React.Fragment>
                ) : null}
              </React.Fragment>
            )}

              
            {/* )} */}

            {/* {inputnext === 1 && radio ? (
              <div className="max-w-[1200px] justify-end mx-auto flex my-5">
                <div className="flex justify-end max-w-[1000px]">
                  <div className="flex   items-center gap-[20px] w-full">
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
            )} */}

            {/* {inputnext === 2 && (
              <textarea
                id="message"
                value={displayText}
                onChange={handleChange}
                onKeyPress={handleTextareaKeyPress}
                className="block p-2.5 w-full focus:outline-none text-sm text-gray-700 bg-white rounded-lg border h-[50px] border-gray-300 overflow-y-auto  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Write your short answer here"
              ></textarea>
            )}
{inputnext === 1 && (
              <textarea
                id="message"
                value={displayText}
                onChange={handleChange}
                onKeyPress={handleTextareaKeyPress}
                className="block p-2.5 w-full focus:outline-none text-sm text-gray-700 bg-white rounded-lg border h-[50px] border-gray-300 overflow-y-auto   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Write your short answer here"
              ></textarea>
            )}
            {inputnext === 4 && (
              <textarea
                id="message"
                value={displayText}
                onChange={handleChange}
                onKeyPress={handleTextareaKeyPress}
                className="block p-2.5 w-full focus:outline-none text-sm text-gray-700 bg-white rounded-lg border h-[50px] border-gray-300 overflow-y-auto  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Write your short answer here"
              ></textarea>
            )} */}

           
            <button
              type="button"
              onClick={handleNext}
              className="text-white  min-w-[120px] justify-center bg-[#7C8388]   focus:outline-none   font-medium rounded-full text-sm px-2 py-[0.75rem] flex dark:bg-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
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
