import React, { useState, useEffect } from 'react'
import { Swords, Volume2, VolumeX } from 'lucide-react'
import CharacterList from './components/CharacterList'
import GameScreen from './components/GameScreen'
import { Character } from './types'

const characters: Character[] = [
  { id: 1, name: "モンキー・D・ルフィ", romanized: "Monkey D. Luffy" },
  { id: 2, name: "ロロノア・ゾロ", romanized: "Roronoa Zoro" },
  { id: 3, name: "ナミ", romanized: "Nami" },
  { id: 4, name: "ウソップ", romanized: "Usopp" },
  { id: 5, name: "サンジ", romanized: "Sanji" },
  { id: 6, name: "トニートニー・チョッパー", romanized: "Tony Tony Chopper" },
  { id: 7, name: "ニコ・ロビン", romanized: "Nico Robin" },
  { id: 8, name: "フランキー", romanized: "Franky" },
  { id: 9, name: "ブルック", romanized: "Brook" },
  { id: 10, name: "ジンベエ", romanized: "Jinbe" },
  { id: 11, name: "ゴール・D・ロジャー", romanized: "Gol D. Roger" },
  { id: 12, name: "シャンクス", romanized: "Shanks" },
  { id: 13, name: "エドワード・ニューゲート", romanized: "Edward Newgate" },
  { id: 14, name: "ポートガス・D・エース", romanized: "Portgas D. Ace" },
  { id: 15, name: "サボ", romanized: "Sabo" },
  { id: 16, name: "トラファルガー・ロー", romanized: "Trafalgar Law" },
  { id: 17, name: "ボア・ハンコック", romanized: "Boa Hancock" },
  { id: 18, name: "バギー", romanized: "Buggy" },
  { id: 19, name: "クロコダイル", romanized: "Crocodile" },
  { id: 20, name: "ドンキホーテ・ドフラミンゴ", romanized: "Donquixote Doflamingo" },
  { id: 21, name: "カタクリ", romanized: "Katakuri" },
  { id: 22, name: "マーシャル・D・ティーチ", romanized: "Marshall D. Teach" },
  { id: 23, name: "カイドウ", romanized: "Kaido" },
  { id: 24, name: "シャーロット・リンリン", romanized: "Charlotte Linlin" },
  { id: 25, name: "赤髪のシャンクス", romanized: "Akagami no Shanks" },
  { id: 26, name: "光月おでん", romanized: "Kozuki Oden" },
  { id: 27, name: "ヤマト", romanized: "Yamato" },
  { id: 28, name: "バルトロメオ", romanized: "Bartolomeo" },
  { id: 29, name: "ペローナ", romanized: "Perona" },
  { id: 30, name: "ビビ", romanized: "Vivi" }
]

function App() {
  const [gameStarted, setGameStarted] = useState(false)
  const [score, setScore] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    document.title = 'ワンピースタイピングゲーム'
    const audioElement = new Audio('/bgm.mp3')
    audioElement.loop = true
    audioElement.addEventListener('error', (e) => {
      console.warn('Audio file not found or cannot be played', e)
      setIsMuted(true)
    })
    setAudio(audioElement)

    return () => {
      audioElement.pause()
      audioElement.src = ''
    }
  }, [])

  useEffect(() => {
    if (audio) {
      if (gameStarted && !isMuted) {
        audio.play().catch(e => console.warn('Audio playback failed', e))
      } else {
        audio.pause()
      }
    }
  }, [gameStarted, isMuted, audio])

  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (audio) {
      if (isMuted) {
        audio.play().catch(e => console.warn('Audio playback failed', e))
      } else {
        audio.pause()
      }
    }
  }

  const startGame = () => {
    setGameStarted(true)
    setScore(0)
  }

  const endGame = () => {
    setGameStarted(false)
  }

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">ワンピースタイピングゲーム</h1>
      {!gameStarted ? (
        <div className="text-center">
          <CharacterList characters={characters} />
          <button
            onClick={startGame}
            className="mt-8 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded text-xl"
          >
            ゲームスタート
          </button>
        </div>
      ) : (
        <GameScreen
          characters={characters}
          score={score}
          setScore={setScore}
          endGame={endGame}
        />
      )}
      <button
        onClick={toggleMute}
        className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
      >
        {isMuted ? <VolumeX /> : <Volume2 />}
      </button>
    </div>
  )
}

export default App