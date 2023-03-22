import { c as create_ssr_component, a as add_attribute } from "../../chunks/index3.js";
const welcome = "/_app/immutable/assets/svelte-welcome.c18bcf5a.webp";
const welcome_fallback = "/_app/immutable/assets/svelte-welcome.6c300099.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-t32ptj_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="${"description"}" content="${"Svelte demo app"}"><!-- HEAD_svelte-t32ptj_END -->`, ""}

<section><h1><span class="${"welcome"}"><picture><source${add_attribute("srcset", welcome, 0)} type="${"image/webp"}">
				<img${add_attribute("src", welcome_fallback, 0)} alt="${"Welcome"}"></picture></span>

		to your new<br>SvelteKit app
	</h1>

	<h2>try editing <strong>src/routes/+page.svelte</strong></h2></section>`;
});
export {
  Page as default
};
