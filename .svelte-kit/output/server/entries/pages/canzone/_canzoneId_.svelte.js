import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../../chunks/index-19e9ff0b.js";
import { p as page } from "../../../chunks/stores-f4051a70.js";
import { C as Canzoni } from "../../../chunks/canzoni-7e3dbe35.js";
import ChordSheetJS from "chordsheetjs";
const ChordsViewer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { canzone } = $$props;
  const chordSheet = canzone.plain;
  let parser;
  if (canzone.formato == "chords-pro") {
    parser = new ChordSheetJS.ChordProParser();
  }
  let song = parser.parse(chordSheet);
  const formatter = new ChordSheetJS.HtmlDivFormatter();
  const disp = formatter.format(song);
  if ($$props.canzone === void 0 && $$bindings.canzone && canzone !== void 0)
    $$bindings.canzone(canzone);
  return `<div><!-- HTML_TAG_START -->${disp}<!-- HTML_TAG_END --></div>`;
});
const U5BcanzoneIdu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let canzone = Canzoni.trova(parseInt($page.params.canzoneId));
  $$unsubscribe_page();
  return `${typeof canzone !== "undefined" ? `${validate_component(ChordsViewer, "ChordsViewer").$$render($$result, { canzone }, {}, {})}` : ``}`;
});
export { U5BcanzoneIdu5D as default };
