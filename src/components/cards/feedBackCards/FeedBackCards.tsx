import React from 'react'
import './FeedBackCards.css'
interface ChatInputProps {
    onEditIconClick: () => void;
    typedText: string;
  }

const  FeedBackCards: React.FC<ChatInputProps>=({ onEditIconClick,typedText }) => {
    return (
        <>
            <div className='mb-4'>
                <div className='max-w-[1200px] justify-start mx-auto'>
                    <div className='flex max-w-[1000px]'>
                        <div className='flex items-center gap-[20px] relative'>
                            <div>
                                <img src="/images/chatbot.png" className="w-[350px] " alt="" />
                            </div>
                            <div className='mx-auto relative max-w-[1000px]'>
                                <a href="#" className="block p-6 border relative rounded-lg shadow-bottom bg-[#ECF8FD] w-full">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Open Feedback Question</h5>
                                    <p className="font-normal ms-[5px] text-gray-700 dark:text-gray-400 text-[18px]"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eligendi voluptatibus aspernatur, repellendus, reiciendis illo ad ea voluptate est, maiores obcaecati corporis porro commodi! Culpa eius beatae itaque laudantium nam quaerat vel molestiae eveniet facere exercitationem est recusandae sit, repellendus voluptatem pariatur officiis architecto perferendis sint, sequi nobis nihil. Cum.</p>
                                    <div className="triangle-left"></div>
                                </a>

                            </div>
                            <div className='ms-3'>
                                <img src="/images/Speaker_button.png" className="w-[160px]" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            

                <div className='max-w-[1200px] justify-end mx-auto flex my-5' >
                    <div className='flex justify-end max-w-[1000px]'>
                        <div className='flex   items-center gap-[20px]'>
                            <div className='me-3' >
                                <img src="/images/Undo_button.png" className="w-[150px]" alt="" />
                                <img src="/images/Edit _button.png" className="w-[150px] mt-2"  onClick={onEditIconClick} alt="" />
                            </div>
                            <div className=' mx-auto flex max-w-[1000px]'>
                                <a href="#" className="block  p-6 bg-white border border-gray-200 rounded-lg relative shadow-bottom w-full">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Open Feedback Question</h5>
                                    <p className="font-normal text-gray-700 text-[18px] dark:text-gray-400">{typedText}</p>
                                    <div className="angle-left"></div>

                                </a>

                            </div>
                            <div>
                                <div className='h-[50px] w-[50px] flex ms-3 items-center justify-center font-bold rounded-full bg-[#FFB703]'>
                                    U.N
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

              


                {/* <div className='max-w-[1200px] justify-start mx-auto'>
                    <div className='flex max-w-[1000px]'>
                        <div className='flex items-center gap-[20px] relative'>
                            <div>
                                <img src="/images/chatbot.png" className="w-[150px] mt-[-19px]" alt="" />
                            </div>
                            <div className='mx-auto relative max-w-[1000px]'>
                                <a href="#" className="block p-6 ms-[5px] border relative rounded-lg shadow-bottom bg-[#ECF8FD] w-full">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Boolean Question</h5>
                                    <div className='flex gap-5'>
                                    <div className='bg-[#fff] flex items-center h-[80px] py-5 px-3 rounded min-w-[370px]' style={{ border: '1px solid #586166' }}>
                                        <div className="flex items-center">
                                            <input
                                                defaultChecked
                                                id="default-radio-2"
                                                type="radio"
                                                value=""
                                                name="default-radio"
                                                className="w-[2rem] h-[2rem] text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label htmlFor="default-radio-2" className="ml-2 text-[18px] font-semibold text-gray-900 dark:text-gray-300">
                                            Option 1
                                            </label>
                                        </div>
                                    </div>
                                    <div className='bg-[#fff] flex items-center h-[80px] py-5 px-3 rounded min-w-[370px]' style={{ border: '1px solid #586166' }}>
                                        <div className="flex items-center">
                                            <input
                                                defaultChecked
                                                id="default-radio-2"
                                                type="radio"
                                                value=""
                                                name="default-radio"
                                                className="w-[2rem] h-[2rem] text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label htmlFor="default-radio-2" className="ml-2 text-[18px] font-semibold text-gray-900 dark:text-gray-300">
                                            Option 2
                                            </label>
                                        </div>
                                    </div>
                                    </div>
                                    
                                </a>
                                <div className="triangle-left"></div>
                            </div>

                            <div className='ms-3'>
                                <img src="/images/Speaker_button.png" className="w-[70px]" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='max-w-[1200px] justify-end mx-auto flex my-5' >
                    <div className='flex justify-end max-w-[1000px]'>
                        <div className='flex   items-center gap-[20px] w-full'>
                            <div className='me-3' >
                                <img src="/images/Undo_button.png" className="w-[150px]" alt="" />
                                <img src="/images/Edit _button.png" className="w-[150px] mt-2" alt="" />
                            </div>
                            <div className=' mx-auto flex max-w-[1000px]'>
                                <div className="block  p-6 bg-white border border-gray-200 rounded-lg relative shadow-bottom w-full">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Boolean Answer</h5>
                                    <div className='bg-[#fff] me-2 flex items-center h-[80px] py-5 px-3 rounded min-w-[780px]' style={{ border: '1px solid #586166' }}>
                                        <div className="flex items-center">
                                            <input
                                                defaultChecked
                                                id="default-radio-2"
                                                type="radio"
                                                value=""
                                                name="default-radio"
                                                className="w-[2rem] h-[2rem] text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label htmlFor="default-radio-2" className="ml-2 text-[18px] font-semibold text-gray-900 dark:text-gray-300">
                                            Boolean Answer
                                            </label>
                                        </div>


                                    </div>
                                    <div className="angle-left"></div>

                                </div>

                            </div>
                            <div>
                                <div className='h-[50px] w-[50px] flex ms-3 items-center justify-center font-bold rounded-full bg-[#FFB703]'>
                                    U.N
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='max-w-[1200px] justify-start mx-auto'>
                    <div className='flex max-w-[1000px]'>
                        <div className='flex items-center gap-[20px] relative'>
                            <div>
                                <img src="/images/chatbot.png" className="w-[150px] mt-[-19px]" alt="" />
                            </div>
                            <div className='mx-auto relative max-w-[1000px]'>
                                <a href="#" className="block p-6 ms-[5px] border relative rounded-lg shadow-bottom bg-[#ECF8FD] w-full">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Star Rating Question</h5>
                                    <p className="font-normal ms-[5px] text-gray-700 dark:text-gray-400 text-[18px] mb-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer erat velit, consequat ac erat quis, congue luctus mi. Aenean condimentum sem neque.</p>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">This is the Question we’re asking:</h5>

                                    <div className='flex gap-5'>
                                    <div className='bg-[#CED4D6] h-[60px] w-[40px] flex items-center justify-center'><span className='flex items-center text-black font-bold text-[23px]'>1</span></div>
                                    <div className='bg-[#CED4D6] h-[60px] w-[40px] flex items-center justify-center'><span className='flex items-center text-black font-bold text-[23px]'>2</span></div>

                                    
                                    </div>
                                    
                                </a>
                                <div className="triangle-left"></div>
                            </div>

                            <div className='ms-3'>
                                <img src="/images/Speaker_button.png" className="w-[70px]" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='max-w-[1200px] justify-end mx-auto flex my-5' >
                    <div className='flex justify-end max-w-[1000px]'>
                        <div className='flex   items-center gap-[20px] w-full'>
                            <div className='me-3' >
                                <img src="/images/Undo_button.png" className="w-[50px]" alt="" />
                                <img src="/images/Edit _button.png" className="w-[50px] mt-2" alt="" />
                            </div>
                            <div className=' mx-auto flex max-w-[1000px]'>
                                <div className="block  p-6 bg-white border border-gray-200 rounded-lg relative shadow-bottom w-full">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Star Rating Answer</h5>
                                    
                                    <div className="angle-left"></div>

                                </div>

                            </div>
                            <div>
                                <div className='h-[50px] w-[50px] flex ms-3 items-center justify-center font-bold rounded-full bg-[#FFB703]'>
                                    U.N
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                

        </>

    )
}

export default FeedBackCards

