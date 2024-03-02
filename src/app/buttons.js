
let buttons = {};

buttons.createButtons = function() {
    return ( 
        <div className = "flex text-lg gap-3">
            <text className = "text-center pt-0.5 w-8 h-8 hover:bg-[#3E3E3E]">─</text>
            <text className = "text-center w-8  h-8 hover:bg-[#3E3E3E]">□</text>
            <text className = "text-center pt-0.5 w-8 h-8 hover:bg-[#C42B1C]">✕</text>
        </div>
    )
}

buttons.closeButton  = function() {
    return (
        <text>Test</text>
    )
}

export default buttons;