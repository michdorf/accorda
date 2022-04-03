import { c as create_ssr_component } from "../../chunks/index-19e9ff0b.js";
import "../../chunks/canzoni-7e3dbe35.js";
var aggiungi_svelte_svelte_type_style_lang = "";
const css = {
  code: ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}",
  map: null
};
const Aggiungi = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Aggiungi canzone</title>`, ""}`, ""}

<div class="${"content svelte-cf77e8"}"><textarea>${""}</textarea>
	<button>Salva</button>
</div>`;
});
export { Aggiungi as default };
