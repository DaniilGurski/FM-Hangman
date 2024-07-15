import React from 'react'
import iconBackUrl from "/images/icon-back.svg"
import RoundButton from "../components/RoundButton";

export default function MenuHeader({ pageTitle }) {
  return (
    <header className="menu-header | flex"> 
        <RoundButton className="round-button" to="/" iconUrl={iconBackUrl} ariaText={"go back to menu"}/>

        <h1> {pageTitle} </h1>
    </header>
  )
}