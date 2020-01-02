<!--
    Andrew Webb 2019
-->

<div class="container-fluid">
  <NavBar bind:pageComponent="{pageComponent}" />
  <svelte:component this="{pageComponent}" />
</div>

<script>
  import NavBar from "./NavBar.svelte";

  import List from "./pages/List.svelte";

  // set the first page
  let pageComponent = List;


  // text pasted anywhere on the window
  export let pastedText = null;

  $: if (pastedText !== null) {
    let text = pastedText;
    pastedText = null;
    alert(text);
    // todo: use the pasted text to search for a bookmark, or add a new bookmark if text is url and the site is
    // not already bookmarked
  }
</script>
