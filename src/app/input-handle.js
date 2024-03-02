"use client"
import text from "./text";
import { syntaxHighlight } from "./syntax_highlight";
import _console from "./console";

let command = {
    ["help"]: {
        alias: "help",
        description: "Displays this window.",
        func: function(ref) {
            let help_storage = "";

            for(var i in command) help_storage += (command[i].alias + " | " + command[i].description + "<br/>")

            return help_storage
        }
    },
    ["ls"]: {
        alias: "ls",
        description: "Lists files in current directory.",
        func: function(ref) { 
            const test = [];

            Object.keys(text).map((value) => {
                test.push(value + ".json");
            })

            return test.join(" ");
        }
    },
    ["test"]: {
        alias: "test",
        description: "A test command.",
        func: function(ref) {
            return "testing Asdf"
        }
    },
    ["cls"]: {
        alias: "cls",
        description: "Clears the console.",
        func: function(ref) {
            _console.clearConsole(ref);
        }
    },
    ["cat"]: {
        alias: "cat",
        description: "Reads a file in current directory.",
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
