import React, { useState } from "react";
import { HiSpeakerWave } from "react-icons/hi2";
import { MdEdit, MdOutlineRefresh } from "react-icons/md";

const RatingQues = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const handleNumberSelection = (number: any) => {
    setSelectedNumber(number);
  };
  const handleOne = () => {
    handleNumberSelection(1);
  };
  const handleTwo = () => {
    handleNumberSelection(2);
  };
  const handleThree = () => {
    handleNumberSelection(3);
  };
  const handleFour = () => {
    handleNumberSelection(4);
  };
  const handleFive = () => {
    handleNumberSelection(5);
  };
  const handleSix = () => {
    handleNumberSelection(6);
  };
  const handleSeven = () => {
    handleNumberSelection(7);
  };
  const handleEight = () => {
    handleNumberSelection(8);
  };
  const handleNine = () => {
    handleNumberSelection(9);
  };
  const handleTen = () => {
    handleNumberSelection(10);
  };
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
              <div className="block p-6 ms-[5px] border relative rounded-lg shadow-bottom bg-[#ECF8FD] w-full">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Star Rating Question
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

                <div className="flex gap-2 w-[100%]">
                  <div
                    className="bg-[#CED4D6] h-[70px] w-[10%] flex items-center justify-center"
                    onClick={handleOne}
                  >
                    <span className="flex items-center text-black font-bold text-[27px]">
                      1
                    </span>
                  </div>
                  <div
                    className="bg-[#CED4D6] h-[70px] w-[10%] flex items-center justify-center"
                    onClick={handleTwo}
                  >
                    <span className="flex items-center text-black font-bold text-[27px]">
                      2
                    </span>
                  </div>
                  <div
                    className="bg-[#CED4D6] h-[70px] w-[10%] flex items-center justify-center"
                    onClick={handleThree}
                  >
                    <span className="flex items-center text-black font-bold text-[27px]">
                      3
                    </span>
                  </div>
                  <div
                    className="bg-[#CED4D6] h-[70px] w-[10%] flex items-center justify-center"
                    onClick={handleFour}
                  >
                    <span className="flex items-center text-black font-bold text-[27px]">
                      4
                    </span>
                  </div>
                  <div
                    className="bg-[#CED4D6] h-[70px] w-[10%] flex items-center justify-center"
                    onClick={handleFive}
                  >
                    <span className="flex items-center text-black font-bold text-[27px]">
                      5
                    </span>
                  </div>
                  <div
                    className="bg-[#CED4D6] h-[70px] w-[10%] flex items-center justify-center"
                    onClick={handleSix}
                  >
                    <span className="flex items-center text-black font-bold text-[27px]">
                      6
                    </span>
                  </div>
                  <div
                    className="bg-[#CED4D6] h-[70px] w-[10%] flex items-center justify-center"
                    onClick={handleSeven}
                  >
                    <span className="flex items-center text-black font-bold text-[27px]">
                      7
                    </span>
                  </div>
                  <div
                    className="bg-[#CED4D6] h-[70px] w-[10%] flex items-center justify-center"
                    onClick={handleEight}
                  >
                    <span className="flex items-center text-black font-bold text-[27px]">
                      8
                    </span>
                  </div>
                  <div
                    className="bg-[#CED4D6] h-[70px] w-[10%] flex items-center justify-center"
                    onClick={handleNine}
                  >
                    <span className="flex items-center text-black font-bold text-[27px]">
                      9
                    </span>
                  </div>
                  <div
                    className="bg-[#CED4D6] h-[70px] w-[10%] flex items-center justify-center"
                    onClick={handleTen}
                  >
                    <span className="flex items-center text-black font-bold text-[27px]">
                      10
                    </span>
                  </div>
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

      {selectedNumber && (
        <div className="max-w-[1200px] justify-end mx-auto flex my-5">
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
                  <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    Star Rating Answer
                  </h5>

                  <div className="flex justify-center">
                    <div className="bg-[#47BFE8] h-[70px] w-[30%] flex items-center justify-center">
                      <span className="flex items-center text-white font-bold text-[23px]">
                        {selectedNumber}
                      </span>
                    </div>
                  </div>
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
      )}
    </div>
  );
};

export default RatingQues;
