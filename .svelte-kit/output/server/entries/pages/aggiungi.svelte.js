import { c as create_ssr_component } from "../../chunks/index-c46f8c98.js";
import "../../chunks/canzoni-e1a635bd.js";
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
