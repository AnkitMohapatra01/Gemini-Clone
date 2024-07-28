

import React, { useContext } from 'react';
import './Main.css';
import { FaUser } from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import { FaCode } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { FaMicrophone } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { Context } from '../../Context/Context';
import { SiGooglegemini } from "react-icons/si";

export default function Main() {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

  const handleCardClick = (prompt) => {
    onSent(prompt);
  };
  return (
    <div className='Main'>
      <div className="nav">
        <p>Gemini</p>
        <FaUser />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p><span>Hello, Ankit</span></p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card" onClick={() => handleCardClick("Suggest beautiful places to see on an upcoming road trip")}>
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <FaRegCompass />
              </div>
              <div className="card" onClick={() => handleCardClick("Briefly Summarize this concept: urban planning")}>
                <p>Briefly Summarize this concept: urban planning</p>
                <FaRegLightbulb />
              </div>
              <div className="card" onClick={() => handleCardClick("Brainstorm team bonding activities for our work retreat")}>
                <p>Brainstorm team bonding activities for our work retreat</p>
                <LuMessagesSquare />
              </div>
              <div className="card" onClick={() => handleCardClick("Improve the readability of the following code")}>
                <p>Improve the readability of the following code</p>
                <FaCode />
              </div>
            </div>
          </>
        ) : (
          <div className='result'>
            <div className="result-title">
              <FaUser />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <div><SiGooglegemini /></div>
              {loading ? (
                <div className='loader'>
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder='Enter a Prompt here'
            />
            <div>
              <GrGallery />
              <FaMicrophone />
              {input && <IoIosSend onClick={() => onSent(input)} />}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including people, so double check the prompt.
          </p>
        </div>
      </div>
    </div>
  );
}
