<!-- -->

<div class="row">
  <div class="col">
    <div class="text-center">
      <nav>
        <button type="button" class="btn btn-light" on:click="{() => click('/list')}">list</button>
        <button type="button" class="btn btn-light" on:click="{() => click('/tags')}">tags</button>
        <button type="button" class="btn btn-light" on:click="{() => click('/folders')}">folders</button>
        <button type="button" class="btn btn-light" on:click="{() => click('/add')}">add</button>
        <button type="button" class="btn btn-light" on:click="{() => click('/search')}">search</button>
        <button type="button" class="btn btn-light" on:click="{() => click('/settings')}">settings</button>
        <button type="button" class="btn btn-light" on:click="{() => click('/about')}">about</button>
      </nav>
    </div>
  </div>
</div>

<script>
  import router from "page";

  import List from "./pages/List.svelte";
  import Tags from "./pages/Tags.svelte";
  import Folders from "./pages/Folders.svelte";
  import Add from "./pages/Add.svelte";
  import Search from "./pages/Search.svelte";
  import Settings from "./pages/Settings.svelte";
  import About from "./pages/About.svelte";

  export let pageComponent;

  // set up the router
  router("/", () => router.redirect("/list"));
  router("/list", () => { pageComponent = List; });
  router("/tags", () => { pageComponent = Tags; });
  router("/folders", () => { pageComponent = Folders; });
  router("/add", () => { pageComponent = Add; });
  router("/search", () => { pageComponent = Search; });
  router("/settings", () => { pageComponent = Settings; });
  router("/about", () => { pageComponent = About; });
  router('*', () => router.redirect("/list"));
  router.start();

  function click(route) {
    window.location.pathname = route;
  }
</script>
