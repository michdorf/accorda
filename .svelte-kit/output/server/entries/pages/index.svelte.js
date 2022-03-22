import { c as create_ssr_component, a as subscribe, d as each, b as add_attribute, e as escape } from "../../chunks/index-c46f8c98.js";
import { c as canzoniStore } from "../../chunks/canzoni-e1a635bd.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-1bgohwt{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1}h1.svelte-1bgohwt{width:100%}",
  map: null
};
const prerender = true;
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let titoli;
  let $canzoniStore, $$unsubscribe_canzoniStore;
  $$unsubscribe_canzoniStore = subscribe(canzoniStore, (value) => $canzoniStore = value);
  $$result.css.add(css);
  titoli = $canzoniStore.map((canzone) => {
    let match = canzone.plain.match(/{title: ?(.+?)}/);
    return match !== null ? match[1] : canzone.plain.split("\n")[0] || "Ukendt titel";
  });
  $$unsubscribe_canzoniStore();
  return `${$$result.head += `${$$result.title = `<title>Canzoni</title>`, ""}`, ""}

<section class="${"svelte-1bgohwt"}"><h1 class="${"svelte-1bgohwt"}">Chordspro
	</h1>

	${each(titoli, (titolo, i) => {
    return `<a${add_attribute("href", "/canzone/" + i, 0)}>${escape(titolo)}</a>`;
  })}
	${titoli.length < 1 ? `<h2 style="${"font-weight: bold;"}">Ingen sange...</h2>` : ``}
</section>`;
});
export { Routes as default, prerender };
