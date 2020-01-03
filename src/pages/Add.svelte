<!-- -->

<div class="row">
    <div class="col-md">
        <form class="form-inline d-flex justify-content-center">
            <label for="urlToAddInput" class="mr-2">address:</label>
            <input type="url" style="width: 50%;" class="form-control mr-2" id="urlToAddInput" placeholder="full url of new bookmark">
            <button type="submit" class="btn btn-primary">add</button>
        </form>
    </div>
</div>

<script>
    import { afterUpdate } from 'svelte';

    afterUpdate(() => {
        document.getElementById("urlToAddInput").focus(); 
    });    
</script>
