import { syntaxHighlight } from "./syntax_highlight";
import text from "./text";

let console = {};

console.createLine = function(element) {
    return (
        <text key = {element}>
          {"PS C:\\Users\\Zach\\zach.pink> "}
          <text className="string">cat </text>
          {element}.json
          <pre
          dangerouslySetInnerHTML={{
            __html: syntaxHighlight(JSON.stringify(text[element], undefined, 2))
          }}/>
          <br/><br/>
        </text>
        )
}

console.Init = function() {
  return (
    <div>
      Windows PowerShell 
      <br/>
      Copyright (C) Microsoft Corporation. All rights reserved.
      <br/><br/>
      Install the lastest PowerShell for new features and improvements! https://aka.ms/PSWindows
      <br/><br/>
    </div>
  )
}

console.Populate = function() {
  return Object.keys(text).map((element) => {
    return console.createLine(element);
  })
}

console.Footer = function () {
  return (
    <div>
      Testing
      <br/><br/>
      this
      <br/><br/>
      Thing.
    </div>
  )
}

export default console;