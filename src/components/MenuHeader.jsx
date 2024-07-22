import React from 'react'
import iconBackUrl from "/images/icon-back.svg";
import LinkRoundButton from './LinkRoundButton';

export default function MenuHeader({ pageTitle }) {
  return (
    <header className="menu-header | flex"> 
        <LinkRoundButton className="round-button" to="/" icon={iconBackUrl} ariaText={"go back to menu"}/>

        <h1> {pageTitle} </h1>
    </header>
  )
}
