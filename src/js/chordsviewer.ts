import ChordSheetJS from 'chordsheetjs';

export default function applyStyling() {
    let s = document.createElement('style');
    s.innerHTML = ChordSheetJS.HtmlDivFormatter.cssString();
    document.head.appendChild(s);
}