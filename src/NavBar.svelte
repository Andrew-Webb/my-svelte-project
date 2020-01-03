<!-- -->

<div class="row">
  <div class="col">
    <div class="text-center">
      <nav>
        <a class="btn btn-light" role="button" href="/list">list</a>
        <a class="btn btn-light" role="button" href="/tags">tags</a>
        <a class="btn btn-light" role="button" href="/folders">folders</a>
        <a class="btn btn-light" role="button" href="/add">add</a>
        <a class="btn btn-light" role="button" href="/search">search</a>
        <a class="btn btn-light" role="button" href="/settings">settings</a>
        <a class="btn btn-light" role="button" href="/about">about</a>
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
</script>
