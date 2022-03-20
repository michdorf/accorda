<script lang="ts">
/* https://github.com/martijnversluis/ChordSheetJS#how-to- */
import ChordSheetJS from 'chordsheetjs';
import type {CanzoneInterfaccia} from '../js/canzoni';

export let canzone: CanzoneInterfaccia;
/** 
 * `
       Am         C/G        F          C
Let it be, let it be, let it be, let it be
C                G              F  C/E Dm C
Whisper words of wisdom, let it be`.substring(1);
const chordSheetPro = `Let it [Am ]be, let it [C/G ]be, let it [F ]be, let it [C]be 
[C ]Whisper words of [G ]wisdom, let it [F ]be[C/E][Dm][C]`
 */

const chordSheet = canzone.plain;

let parser;
if (canzone.formato == 'chords-pro') {
	parser = new ChordSheetJS.ChordProParser();
}
let song = parser.parse(chordSheet);

const formatter = new ChordSheetJS.HtmlDivFormatter();
const disp = formatter.format(song);
</script>

<div>
	{@html disp}
</div>
