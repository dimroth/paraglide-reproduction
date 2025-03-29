<script lang="ts">
  import { page } from "$app/state";
  import * as m from "$paraglide/messages.js";

  const query = $derived(page.url.searchParams.get("q"));
</script>

<h1>{m.hello_world({ name: "SvelteKit User" })}</h1>
<p>{query}</p>