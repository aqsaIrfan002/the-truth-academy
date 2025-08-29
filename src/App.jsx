import React, { useState, useEffect } from 'react';
import { casesData } from './casesData.js';

const howToPlayContent = `
  Welcome, Detective. Your mission is to find the truth behind the news.
  Each case presents you with an article. Your investigation kit contains four essential tools to help you analyze the evidence:

  - **Check Source:** Investigate the publication's credibility.
  - **Check Image:** Examine the photo for authenticity and context.
  - **Check for Bias:** Look for one-sided or emotional language.
  - **Check AI:** Scan the text for signs of artificial intelligence.

  After your investigation, you will deliver your verdict by choosing one of three options:

  - **True:** The article is accurate and reports on verifiable facts.
  - **False:** The entire article is a fabrication with no basis in reality.
  - **Misleading:** The article contains some true facts but uses bias or a lack of context to deceive the reader.

  Good luck, Detective.
`;

const Modal = ({ title, content, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
      <div className="bg-[#C8B9A0] rounded-lg p-8 relative max-w-lg w-full max-h-[80vh] overflow-y-auto border-2 border-[#332924] shadow-xl backdrop-blur-sm [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#332924] hover:text-[#8E7C67] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-2xl font-semibold text-[#332924] mb-4 font-['Playfair Display'] capitalize">
          {title}
        </h2>
        <p className="text-[#332924] text-lg leading-relaxed font-['EB Garamond']" dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br/>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></p>
      </div>
    </div>
  );
};

const App = () => {
  const [currentCaseIndex, setCaseCaseIndex] = useState(0);
  const [shuffledCases, setShuffledCases] = useState([]);
  const [activeDetectiveTool, setActiveDetectiveTool] = useState(null);
  const [userAnswer, setUserAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [showDetectiveToolModal, setShowDetectiveToolModal] = useState(false);
  const [showHowToPlayModal, setShowHowToPlayModal] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);

  // Shuffle cases on component mount
  useEffect(() => {
    const shuffled = [...casesData].sort(() => Math.random() - 0.5);
    setShuffledCases(shuffled);
    setGameStarted(true);
  }, []);

  const currentCase = shuffledCases[currentCaseIndex];

  const handleDetectiveToolClick = (tool) => {
    setActiveDetectiveTool(tool);
    setShowDetectiveToolModal(true);
  };

  const closeDetectiveToolModal = () => {
    setShowDetectiveToolModal(false);
    setActiveDetectiveTool(null);
  };

  const closeCompletionModal = () => {
    setShowCompletionModal(false);
  };

  const handleAnswerClick = (answer) => {
    setUserAnswer(answer);
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentCaseIndex < shuffledCases.length - 1) {
      setCaseCaseIndex(currentCaseIndex + 1);
      setActiveDetectiveTool(null);
      setUserAnswer(null);
      setShowExplanation(false);
    } else {
      // Game completed - could add completion screen here
      setShowCompletionModal(true);
      setCurrentCaseIndex(0); 
      setActiveDetectiveTool(null);
      setUserAnswer(null); 
      setShowExplanation(false);
    }
  };

  if (!gameStarted || !currentCase) {
    return (
      <div className="min-h-screen bg-[#FAF8F0] flex items-center justify-center">
        <div className="text-2xl font-semibold text-[#332924]">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F0]">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b-2 border-[#332924]">
        <img src='/images/menu.png' alt="Info Icon" className="w-9 h-9" />
        <h1 className="text-4xl font-bold text-[#332924] font-['Playfair Display']">
          THE TRUTH ACADEMY
        </h1>
        <img src='/images/help circle.png' alt="Info Icon" className="w-9 h-9 opacity-100 hover:opacity-60" onClick={() => setShowHowToPlayModal(true)} />
      </header>

      <div className="max-w-5xl mx-auto p-6">
        {!showExplanation ? (
          <div className="mb-8">
            {/* Case Content */}
            <div className="bg-[#E6E3DB] rounded-lg flex gap-8 px-8 py-5 mb-5">
              <div className="flex-shrink-0 pr-5 border-r-2 border-[#332924]">
                <img 
                  src={currentCase.image} 
                  alt="Case image"
                  className="w-52 h-60 object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-[1.75em] text-[#332924] mb-4">
                  {currentCase.title}
                </h2>
                <p className="text-[#332924] text-xl leading-relaxed">
                  {currentCase.content}
                </p>
              </div>
            </div>

            {/* Detective Tools */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              <button
                onClick={() => handleDetectiveToolClick('source')}
                className="text-xl bg-[#C8B9A0] hover:bg-[#B8A990] transition-colors rounded-lg p-4 border-2 border-[#332924] flex justify-center items-center gap-3"
              >
                <img src='/images/source.png' alt="Source Icon" className="w-8 h-8"/>
                Check Source
              </button>
              <button
                onClick={() => handleDetectiveToolClick('image')}
                className="text-xl bg-[#C8B9A0] hover:bg-[#B8A990] transition-colors rounded-lg p-4 border-2 border-[#332924] flex justify-center items-center gap-3"
              >
                <img src='/images/eye.png' alt="Image Icon" className="w-8 h-8" />
                Check Image
              </button>
              <button
                onClick={() => handleDetectiveToolClick('bias')}
                className="text-xl bg-[#C8B9A0] hover:bg-[#B8A990] transition-colors rounded-lg p-4 border-2 border-[#332924] flex justify-center items-center gap-3"
              >
                <img src='/images/bias.png' alt="Bias Icon" className="w-8 h-8" />
                Check Bias
              </button>
              <button
                onClick={() => handleDetectiveToolClick('ai')}
                className="text-xl bg-[#C8B9A0] hover:bg-[#B8A990] transition-colors rounded-lg p-4 border-2 border-[#332924] flex justify-center items-center gap-3"
              >
                <img src='/images/ai.png' alt="AI Icon" className="w-8 h-8" />
                Check AI
              </button>
            </div>

            {/* Answer Buttons */}
            <div className="border-t-2 border-[#332924] pt-8">
              <div className="flex items-center justify-center gap-8">
                <span className="text-2xl font-semibold text-[#332924]">
                  Is this news:
                </span>
                <button
                  onClick={() => handleAnswerClick('True')}
                  className="bg-[#332924] hover:bg-[#442f28] text-[#FAF8F0] px-8 py-3 rounded-lg text-xl transition-colors"
                >
                  True
                </button>
                <span className="text-2xl text-[#332924]">,</span>
                <button
                  onClick={() => handleAnswerClick('False')}
                  className="bg-[#332924] hover:bg-[#442f28] text-[#FAF8F0] px-8 py-3 rounded-lg text-xl transition-colors"
                >
                  False
                </button>
                <span className="text-2xl text-[#332924]">
                  or
                </span>
                <button
                  onClick={() => handleAnswerClick('Misleading')}
                  className="bg-[#332924] hover:bg-[#442f28] text-[#FAF8F0] px-8 py-3 rounded-lg text-xl transition-colors"
                >
                  Misleading
                </button>
                <span className="text-3xl text-[#332924]">?</span>
              </div>
            </div>
          </div>
        ) : (
          /* Explanation Screen */
          <div>
            <div className="bg-[#E6E3DB] rounded-lg p-10 mb-8">
              <h2 className="text-3xl text-[#332924] pb-6 mb-6 border-b-2 border-[#332924]">
                The Correct Answer Is: {currentCase.correctAnswer}!
              </h2>
              <p className="text-[#332924] text-lg leading-relaxed">
                {currentCase.explanation}
              </p>
            </div>
            
            <div className="flex justify-center">
              <button
                onClick={handleNext}
                className="bg-[#332924] hover:bg-[#442f28] text-[#FAF8F0] px-12 py-3 rounded-lg text-xl transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Conditional rendering of the detective tool modal */}
      {showDetectiveToolModal && activeDetectiveTool && (
        <Modal
          title={activeDetectiveTool}
          content={currentCase.detectiveTools[activeDetectiveTool]}
          onClose={closeDetectiveToolModal}
        />
      )}

      {/* Conditional rendering of the "How to Play" modal */}
      {showHowToPlayModal && (
        <Modal
          title="How to Play"
          content={howToPlayContent}
          onClose={() => setShowHowToPlayModal(false)}
        />
      )}

      {/* Conditional rendering of the completion modal */}
      {showCompletionModal && (
        <Modal
          title="Game Completed!"
          content="Congratulations, Detective! You've completed all cases. More cases coming soon!"
          onClose={closeCompletionModal}
        />
      )}
    </div>
  );
};

export default App;