<!--
    Andrew Webb 2019
-->

<div class="container">
  <div class="row">
    <div class="col">
      <form>
        <input />
        <input type="checkbox" />
      </form>
      <p>Hello {name.toUpperCase()}!</p>
      <p>
        Visit the
        <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
        to learn how to build Svelte apps.
      </p>
    </div>
  </div>
</div>

<script>
  export let name = "";
  export let pastedText = null;

  $: if (pastedText !== null) {
    let text = pastedText;
    pastedText = null;
    alert(text);
    // todo: use the pasted text to search for a bookmark, or add a new bookmark if text is url and the site is
    // not already bookmarked
  }
</script>
