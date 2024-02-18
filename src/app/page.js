/*
  Author: Zach M.
  Startdate: 17/02/2024 (01:52)
  Purpose: Recreate zach.pink into a terminal environment that looks good!
*/

import text from "./text";
import buttons from "./buttons";
import powershell from "./powershell";
import console from './console'

export default function Home() {
  return (
    <main className = "flex min-h-screen flex-col items-center p-5 ">
      <div className = "console rounded-md border border-rose-500 ">

        {/*let's initialize the title bar with our text & buttons here*/}

        <div className = "console-title flex justify-between font-powershell">

          {/* left side first (powershell logo and text) */}

          <div className = "powershell flex h-64 -mt-0.5 overflow-hidden">

           {powershell.Example()}
            
            {/* right side of the powershell now! (+ and v) */}

          </div>

          {/* then the right side (minimize, maximize, close) */}
          {buttons.createButtons()}

        </div>

          {/* let's now initialize the console inner with our auto-generating text */}

          <div className="console-inner font-console">
            {console.Init()}

            {console.Populate()}

            {console.Footer()}
          </div>
      </div>
    </main>
  );
}
