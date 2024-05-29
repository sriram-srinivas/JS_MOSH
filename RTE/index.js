//b,i,u,stike, ul, ol
const keyEvents = [37,38,39,40]
const editor = document.querySelector("#editor");
const toolBar = document.querySelector("#toolBar");

const boldBtn = document.querySelector("#bold");
const iBtn = document.querySelector("#itlaics");
const uBtn = document.querySelector("#underline");


const getSelection = () => window.getSelection().toString();
const setFormat = (event) => {
    const target = event.target.id
    const selection = getSelection();
    switch(target){
        case "bold":
            executeStyle('bold');
            break;
        case "italics":
            executeStyle('italic');
            break;
        case "underline":
            executeStyle('underline');
            break;
        case "strike":
            executeStyle('strikeThrough');
            break;
        case "bullets":
            executeStyle('insertUnorderedList');
            break;
        case "numbering":
            executeStyle('insertorderedlist');
            break;
        default:
            break;
    }
}
const executeStyle = (tag) => {
    document.execCommand(tag, false, null);
}


const highlightFormatting = (event) => {
    const key = event.keyCode;
    if(keyEvents.includes(key)){
        console.log('check',event,document.queryCommandState('bold'));
    }
};

editor.addEventListener("keydown", highlightFormatting);
toolBar.addEventListener("click", setFormat);
