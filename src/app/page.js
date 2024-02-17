/*
  Author: Zach M.
  Startdate: 17/02/2024 (01:52)
  Purpose: Recreate zach.pink into a terminal environment that looks good!
*/

import text from "./text";

//thank you so much to gauravadhikari1997!
export function syntaxHighlight(json) {
  if (!json) return ""; //no JSON from response

  json = json
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    function (match) {
      var cls = "number";
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = "key";
        } else {
          cls = "string";
        }
      } else if (/true|false/.test(match)) {
        cls = "boolean";
      } else if (/null/.test(match)) {
        cls = "null";
      }
      return '<span class="' + cls + '">' + match + "</span>";
    }
  );
}


export default function Home() {
  return (
    <main className = "flex min-h-screen flex-col items-center p-5 ">
      <div className = "console rounded-md border border-rose-500 ">

        {/*let's initialize the title bar with our text & buttons here*/}

        <div className = "console-title flex justify-between font-powershell">


          {/* left side first (powershell logo and text) */}

          <div className = "powershell flex h-64 -mt-0.5 overflow-hidden">

            <text className="powershell-inner flex gap-x-2 ml-2 rounded-lg h-10 text-xs">
              <img alt="Powershell Icon" src = "/PowerShell_5.0_icon.png" className="powershell-icon ml-3 mt-1.5"/>
              
              <text className="text-sm mt-1">Windows Powershell</text>
              
              <text className="text-justify flex ml-12  text-base"> x </text>
            </text>
            
            {/* right side of the powershell now! (+ and v) */}

          </div>

          {/* then the right side (minimize, maximize, close) */}
          <div className = "flex text-2xl gap-3">
            <text className = "text-center pt-0.5 w-10 h-full hover:bg-[#3E3E3E]">─</text>
            <text className = "text-center w-10  h-full hover:bg-[#3E3E3E]">□</text>
            <text className = "text-center pt-0.5 w-10 h-full hover:bg-[#C42B1C]">✕</text>
          </div>

        </div>

          {/* let's now initialize the console inner with our auto-generating text */}

          <div className="console-inner font-console">
            Windows PowerShell 
            <br/>
            Copyright (C) Microsoft Corporation. All rights reserved.

            <br/><br/>

            Install the lastest PowerShell for new features and improvements! https://aka.ms/PSWindows

            <br/><br/>

            {
            Object.keys(text).map((element) => {
              return (

              <text key = {element}>
                {"PS C:\\Users\\Zach\\zach.pink> "}
                <text className="string">cat </text>
                {element}
                <pre
                dangerouslySetInnerHTML={{
                  __html: syntaxHighlight(JSON.stringify(text[element], undefined, 2))
                }}/>

                <br/><br/>

              </text>

              )
            })
            }

            <br/>

          </div>
      </div>
    </main>
  );
}
