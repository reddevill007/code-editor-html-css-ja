const collapse = document.querySelectorAll('.collapse');
const edit = document.querySelectorAll('.code-box');
const copy = document.getElementsByClassName('copy');


function run() {
    let htmlCode = document.getElementById('html-code').value;
    let cssCode = "<style>" + document.getElementById('css-code').value + "</style>";
    let jsCode = document.getElementById('js-code').value;
    let output = document.getElementById('output');
    // console.log(htmlCode, cssCode, jsCode, output)
    output.contentDocument.body.innerHTML = cssCode + htmlCode;
    output.contentWindow.eval(jsCode);
}

document.getElementById('html-code').addEventListener("keyup", run);
document.getElementById('css-code').addEventListener("keyup", run);
document.getElementById('js-code').addEventListener("keyup", run);

collapse[0].addEventListener("click", function () {
    edit[0].style.height = "calc(100vh - 150px)";
    edit[1].style.height = "50px";
    edit[2].style.height = "50px";
});

collapse[1].addEventListener("click", function () {
    edit[1].style.height = "calc(100vh - 150px)";
    edit[0].style.height = "50px";
    edit[2].style.height = "50px";
});

collapse[2].addEventListener("click", function () {
    edit[2].style.height = "calc(100vh - 150px)";
    edit[1].style.height = "50px";
    edit[0].style.height = "50px";
});

document.getElementById('html-code').addEventListener('keydown', function (e) {
    if (e.key == 'Tab') {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;

        // set textarea value to: text before caret + tab + text after caret
        this.value = this.value.substring(0, start) +
            "\t" + this.value.substring(end);

        // put caret at right position again
        this.selectionStart =
            this.selectionEnd = start + 1;
    }
});

document.getElementById('css-code').addEventListener('keydown', function (e) {
    var start = this.selectionStart;
    var end = this.selectionEnd;
    if (e.key == 'Tab') {
        e.preventDefault();

        // set textarea value to: text before caret + tab + text after caret
        this.value = this.value.substring(0, start) +
            "\t" + this.value.substring(end);

        // put caret at right position again
        this.selectionStart =
            this.selectionEnd = start + 1;
    }
});

document.getElementById('js-code').addEventListener('keydown', function (e) {
    if (e.key == 'Tab') {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;

        // set textarea value to: text before caret + tab + text after caret
        this.value = this.value.substring(0, start) +
            "\t" + this.value.substring(end);

        // put caret at right position again
        this.selectionStart =
            this.selectionEnd = start + 1;
    }
});
