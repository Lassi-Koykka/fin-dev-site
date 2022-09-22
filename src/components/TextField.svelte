<script lang="ts">
    export let label: string;
</script>

<div class="form-control">
    {#if label}
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">
            <span class="label-text">
                {label}
            </span>
        </label>
    {/if}
    <input type="text" class="input input-bordered border-current w-full max-w-xs" />
</div>
