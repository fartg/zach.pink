"use client"
import text from "./text";
import { syntaxHighlight } from "./syntax_highlight";
import _console from "./console";

const command = {
    ["ls"]: {
        func: function(ref) { 
            const test = [];

            Object.keys(text).map((value) => {
                test.push(value + ".json");
            })

            return test.join(" ");
        }
    },
    ["test"]: {
        func: function(ref) {
            return "testing Asdf"
        }
    },
    ["cls"]: {
        func: function(ref) {
            _console.clearConsole(ref);
        }
    },
    ["cat"]: {
        func: function(ref, params) {
            const cat = text[params[0].slice(0, -5)];

            if(!cat) return "Error: No file under that name.";

            return syntaxHighlight(JSON.stringify(cat, undefined, 2));
        }
    }
}

export default function inputHandle (ref, text)  {
    _console.writeLn(ref, "PS C:\\Users\\Zach\\zach.pink> " + text);

    const text_array = text.split(" ");
    const cmd = text_array[0];

    // grab params
    text_array.shift();
    const params = text_array;

    if(command[cmd]) {
        let command_reply = command[cmd].func(ref, params);

        //if we have a reply, let's send it to the console
        if (command_reply) _console.writeLn(ref, command_reply);

        return true;
    }

    _console.writeLn(ref, "Error: No command found under that alias.");

    return false;
}
