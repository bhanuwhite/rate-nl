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
                <div className='flex  max-w-[1000px]'>
                    <div className='flex   items-center gap-[20px]'>
                        <div >
                            <img src="/images/chatbot.png" className="w-[500px]" alt="" />
                        </div>
                        <div className=' mx-auto flex'>
                            <a href="#" className="block  p-6 border relative  rounded-lg shadow bg-[#ECF8FD] ">

                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Open Feedback Question</h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Illum eligendi voluptatibus aspernatur, repellendus, reiciendis illo ad ea voluptate est, maiores obcaecati corporis
                                    porro commodi! Culpa eius beatae itaque laudantium nam quaerat vel molestiae eveniet facere exercitationem est recusandae sit,
                                    repellendus voluptatem pariatur officiis architecto perferendis sint, sequi nobis nihil. Cum.</p>
                            </a>
                            <div className="triangle"></div>
                        </div>
                        <div className='ms-3'>
                            <img src="/images/Record_button.png" className="w-[150px] " alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-[1200px] justify-end mx-auto flex my-4' >
                <div className='flex justify-end max-w-[1000px]'>
                    <div className='flex   items-center gap-[20px]'>
                        <div className='me-3' >
                            <img src="/images/Undo_button.png" className="w-[150px]" alt="" />
                            <img src="/images/Edit _button.png" className="w-[150px] mt-2" onClick={onEditIconClick} alt="" />
                        </div>
                        <div className=' mx-auto flex'>
                            <a href="#" className="block  p-6 bg-white border border-gray-200 rounded-lg relative shadow ">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Open Feedback Question</h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    {typedText}
                                    </p>
                                <div className="triangle"></div>
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
            <div className='max-w-[1200px] justify-start mx-auto'>
                <div className='flex  max-w-[1000px]'>
                    <div className='flex   items-center gap-[20px]'>
                        <div >
                            <img src="/images/chatbot.png" className="w-[500px]" alt="" />
                        </div>
                        <div className=' mx-auto flex'>
                            <a href="#" className="block  p-6 border relative  rounded-lg shadow bg-[#ECF8FD] ">

                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Open Feedback Question</h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Illum eligendi voluptatibus aspernatur, repellendus, reiciendis illo ad ea voluptate est, maiores obcaecati corporis
                                    porro commodi! Culpa eius beatae itaque laudantium nam quaerat vel molestiae eveniet facere exercitationem est recusandae sit,
                                    repellendus voluptatem pariatur officiis architecto perferendis sint, sequi nobis nihil. Cum.</p>
                            </a>
                            <div className="triangle"></div>
                        </div>
                        <div className='ms-3'>
                            <img src="/images/Record_button.png" className="w-[150px] " alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
        </>

    )
}

export default FeedBackCards

