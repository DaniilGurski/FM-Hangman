import React from 'react'
import { useParams } from 'react-router-dom';

export default function Game() {
  console.log(useParams());
  return (
    <div>Game</div>
  )
}
