
<script>
    let loggedOn = false;

    function handleClick() {
        loggedOn = !loggedOn;
    }
</script>

{#if !loggedOn}
	<button type="button" class="btn btn-primary" on:click={handleClick}>
		Log On
	</button>
{:else}
	<button type="button" class="btn btn-warning" on:click={handleClick}>
		Log Off
	</button>
{/if}
