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
  //@ts-ignore
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

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
                // value={transcript}
                // readOnly
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
              onClick={handleSubmit}
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
                onClick={startListening}
              />
            )}
            {inputnext === 1 && (
              <textarea
                id="message"
                value={displayText}
                onChange={handleChange}
                onKeyPress={handleTextareaKeyPress}
                className="block p-2.5 w-full focus:outline-none text-sm text-gray-700 bg-white rounded-lg border h-[50px] border-gray-300 overflow-hidden  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Write your short answer here"
              ></textarea>
            )}

            {inputnext === 2 && (
              <textarea
                id="message"
                value={displayText}
                onChange={handleChange}
                onKeyPress={handleTextareaKeyPress}
                className="block p-2.5 w-full focus:outline-none text-sm text-gray-700 bg-white rounded-lg border h-[50px] border-gray-300 overflow-hidden  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Write your short answer here"
              ></textarea>
            )}

            {inputnext === 4 && (
              <textarea
                id="message"
                value={displayText}
                onChange={handleChange}
                onKeyPress={handleTextareaKeyPress}
                className="block p-2.5 w-full focus:outline-none text-sm text-gray-700 bg-white rounded-lg border h-[50px] border-gray-300 overflow-hidden  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Write your short answer here"
              ></textarea>
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
