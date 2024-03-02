"use client"

/*
  Author: Zach M.
  Startdate: 17/02/2024 (01:52)
  Purpose: Recreate zach.pink into a terminal environment that looks good!
*/

import { useEffect, useRef, useState } from "react";
import buttons from "./buttons";
import powershell from "./powershell";
import _console from './console'
import inputHandle from "./input-handle";

export default function Home() {
  const consoleState = useRef(null);
  const mobileTextFocus = useRef(null);

  const [keyString, setKeyString] = useState('');

  useEffect(() => {
    //I'll change this to be a textbox event instead when I get drunk
    const handleKeyDown = (event) => {

      //Thanks chatgpt
      const excludedKeys = ['Shift', 'Tab', 'Alt', 'CapsLock', ...Array.from({length: 12}, (_, i) => `F${i + 1}`), 'Control', 'Escape', "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
      var pattern = /^[0-9!@#$%^&*()\=\[\]{};':"\\|,<>\/?]*$/;

      if (pattern.test(event.key)) return
      if (excludedKeys.includes(event.key)) return;

      //Do you like my awesome backspace functionality
      if (event.key === "Backspace") {
        return setKeyString(prevKeyString => prevKeyString.slice(0, -1));
      }

      setKeyString(prevKeyString => prevKeyString + event.key);
      
      if (event.key === "Enter") {
        inputHandle(consoleState, keyString);
        setKeyString('');
      }
    };


    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  })
    return (
    <main className = "flex min-h-screen flex-col items-center p-5 " >
      <div className = "console rounded-md border border-rose-500" >

        {/*let's initialize the title bar with our text & buttons here*/}

        <div className = "console-title flex justify-between font-powershell">

          {/* left side first (powershell logo and text) */}

          <div className = "powershell flex h-64 -mt-0.5 overflow-hidden">

           {powershell.Example()}
          
          </div>

          {/* then the right side (minimize, maximize, close) */}
          {buttons.createButtons()}

        </div>

          {/* let's now initialize the console inner with our auto-generating text */}

        <div id = "console_inner" className="console-inner font-console justify-top align-right">
        {/* First we're going to do our init */}  
          <div>
            {_console.Init()}
          </div>

          {/* This is where the console history goes */}
          <div ref = {consoleState}/>

          {/* This is where our typing indicator goes */}
          <div>
            <br/>
            {"PS C:\\Users\\Zach\\zach.pink> "}{keyString}<textarea ref={mobileTextFocus} autoFocus className="console-text outline-none"readOnly={true}></textarea>
          </div>

        </div>
      </div>

      <div className = "footer">
        Made with ❤️ by Zach M
        <br/>
        <a href="https://github.com/fartg/zach.pink" target="null">Source</a>
        <br/>
        <text className = "text-sm">🐱</text>
      </div>
    </main>
  );
}
