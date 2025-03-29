<script lang="ts">
  import { page } from "$app/state";
  import * as m from "$paraglide/messages";
  import { localizeHref } from "$paraglide/runtime";

  const query = $derived(page.url.searchParams.get("q"));
</script>

<h1>{m.hello_world({ name: "SvelteKit User" })}</h1>
<p>Current query:{query}</p>
<a href={localizeHref("/")}>This link used here is: {localizeHref("/")}</a>