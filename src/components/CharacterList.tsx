import React from 'react'
import { Character } from '../types'

interface CharacterListProps {
  characters: Character[]
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">キャラクター一覧</h2>
      <ul className="grid grid-cols-2 gap-4">
        {characters.map((character) => (
          <li key={character.id} className="flex items-center">
            <span className="text-lg font-medium text-gray-700">{character.name}</span>
            <span className="ml-2 text-sm text-gray-500">({character.romanized})</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CharacterList