import React, { useState, useEffect, useRef } from 'react'
import { Character } from '../types'

interface GameScreenProps {
  characters: Character[]
  score: number
  setScore: React.Dispatch<React.SetStateAction<number>>
  endGame: () => void
}

const GameScreen: React.FC<GameScreenProps> = ({ characters, score, setScore, endGame }) => {
  const [currentCharacter, setCurrentCharacter] = useState<Character | null>(null)
  const [input, setInput] = useState('')
  const [questionCount, setQuestionCount] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    getNextCharacter()
  }, [])

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [currentCharacter])

  const getNextCharacter = () => {
    if (questionCount >= 20) {
      endGame()
      return
    }
    const nextCharacter = characters[Math.floor(Math.random() * characters.length)]
    setCurrentCharacter(nextCharacter)
    setInput('')
    setQuestionCount(prevCount => prevCount + 1)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInput(value)

    if (currentCharacter && value.toLowerCase() === currentCharacter.romanized.toLowerCase()) {
      setScore((prevScore) => prevScore + 1)
      getNextCharacter()
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <div className="flex justify-between mb-4">
        <span className="text-xl font-bold text-blue-800">スコア: {score}</span>
        <span className="text-xl font-bold text-green-600">問題: {questionCount}/20</span>
      </div>
      {currentCharacter && (
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{currentCharacter.name}</h2>
          <p className="text-lg text-gray-600">タイプしてください: {currentCharacter.romanized}</p>
        </div>
      )}
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={handleInputChange}
        className="w-full p-2 text-lg border-2 border-blue-300 rounded focus:outline-none focus:border-blue-500"
        placeholder="ここにタイプしてください"
      />
      <button
        onClick={endGame}
        className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded w-full"
      >
        ゲーム終了
      </button>
    </div>
  )
}

export default GameScreen