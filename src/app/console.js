import { syntaxHighlight } from "./syntax_highlight";
import text from "./text";

let _console = {};

_console.highlightAndSanitize = function(element) {
  let sanitized = syntaxHighlight(JSON.stringify(text[element], undefined, 2))
  
  return sanitized;
}

_console.Init = function() {
  return (
    <div>
      Windows PowerShell
      <br/>
      Copyright (C) Microsoft Corporation. All rights reserved.
      <br/><br/>
      Install the lastest PowerShell for new features and improvements! https://aka.ms/PSWindows
      <br/><br/>
      (Try typing "help")
      <br/><br/>
    </div>
  )
}


_console.clearConsole = async function(console_ref) {
  if(!console_ref.current) return;
  console_ref.current.innerHTML = "";
}

_console.writeLn = async function(console_ref, line) {
  if(!console_ref.current) return;
  console_ref.current.innerHTML += line + "<br/>";
}

_console.write = async function(console_ref, line) {
  if(!console_ref.current) return;
  console_ref.current.innerHTML += line;
}

_console.Populate = function() {
  return Object.keys(text).map((element) => {
    return _console.createLine(element);
  })
}


export default _console;