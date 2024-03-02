
let buttons = {};

buttons.createButtons = function() {
    return ( 
        <div className = "flex text-xl gap-3">
            <text className = "text-center pt-0.5 w-10 h-full hover:bg-[#3E3E3E]">─</text>
            <text className = "text-center w-10  h-full hover:bg-[#3E3E3E]">□</text>
            <text className = "text-center pt-0.5 w-10 h-full hover:bg-[#C42B1C]">✕</text>
        </div>
    )
}

buttons.closeButton  = function() {
    return (
        <text>Test</text>
    )
}

export default buttons;