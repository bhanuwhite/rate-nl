import React,{useState} from 'react'
import FeedBackCards from '../feedBackCards/FeedBackCards'
import MultipleChoiceQues from '../../multipleChoice/MultipleChoiceQues';
import MultipleChoiceAns from '../../multipleChoice/MultipleChoiceAns';


const ChatInput = () => {
    const [next,setNext]=useState(0)
    const handleNext=()=>{
        setNext((prev)=>(prev+1))
    }
    const handlePrevious=()=>{
        setNext((prev)=>(prev-1))
    }
    const [displayText, setDisplayText] = useState(''); 
    const [onEnterText,setOnEnterText]=useState("Lorem ipsum dolor sit amet consectetur adipisicing elit.Illum eligendi voluptatibus aspernatur, repellendus, reiciendis illo ad ea voluptate est, maiores obcaecati corporis porro commodi! Culpa eius beatae itaque laudantium nam quaerat vel molestiae eveniet facere exercitationem est recusandae sit,repellendus voluptatem pariatur officiis architecto perferendis sint, sequi nobis nihil. Cum.")

  const handleEditIconClick = () => {
    setDisplayText(onEnterText)
  };

  const handleTextareaKeyPress = (event:any) => {
    if (event.key === 'Enter') {
      setDisplayText('');
      setOnEnterText(displayText)
    }
  };

  const handleChange=(e:any)=>{
    setDisplayText(e.target.value)
  }
  
  return (
    <>
    <div className="main_body">
      <div className='section1'>
        <FeedBackCards onEditIconClick={handleEditIconClick} typedText={onEnterText}/>
       {next===1&&<MultipleChoiceQues/>}
       {next===5&&<MultipleChoiceAns/>}

        </div>
        <div className=" py-4  bg-[#F2F4F5] rounded-lg shadow-md fixed bottom-[43px] left-0 w-full" style={{ borderTop: '1px solid #D9DCDD', borderBottom: '1px solid #D9DCDD' }}>
          <div className='flex items-center justify-between max-w-[1200px] mx-auto gap-[20px]'>
            <button type="button" onClick={handlePrevious} className="text-gray-900  border border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2 text-center   dark:text-gray-400  dark:focus:ring-gray-800">Previous</button>
            <textarea
              id="message"
              value={displayText}
              onChange={handleChange}
              onKeyPress={handleTextareaKeyPress}
              className="block p-2.5 w-full focus:outline-none text-sm text-gray-700 bg-white rounded-lg border h-[50px] border-gray-300 overflow-hidden  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Write your short answer here"
            ></textarea>
            <img src="/images/Record_button.png" className="h-[32px] w-[32px] " alt="" />
            <button type="button" onClick={handleNext} className="text-white w-[15%] bg-gray-700 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2 flex dark:bg-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Next Question</button>
          </div>
        </div>
        </div>

        </>
  )
}

export default ChatInput
