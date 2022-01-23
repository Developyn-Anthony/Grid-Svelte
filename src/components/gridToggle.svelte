<script>
    let layout = "grid";
    let layoutGridList = [
        {
            name: "Farming Sim 22",
            img: {
                large: "fs22.jpg",
                small: "fs22.jpg",
            },
        },
        {
            name: "Battlefield 2042",
            img: {
                large: "bf2042.jpg",
                small: "bf2042.jpg",
            },
        },
        {
            name: "Destiny",
            img: {
                large: "dest1.jpg",
                small: "dest1.jpg",
            },
        },
        {
            name: "Destiny 2",
            img: {
                large: "dest2.jpg",
                small: "dest2.jpg",
            },
        },
        {
            name: "Halo Infinite",
            img: {
                large: "infinite.png",
                small: "infinite.png",
            },
        },
    ];
    console.log(layout);
</script>

<div id="switch-grid-list">
    <div class="switchbar">
      <button class="list-swh" on:click={layout.list} bind="{ layout == 'list' }" title="List">
        List
      </button>
      <button class="grid-swh" on:click={layout.grid} bind="{ layout == 'grid' }" title="Grid">
        Grid
      </button>
    </div>
    {#if layout === "grid"}
    <ul class="grid">
        {#each layoutGridList as layouts}
            <li class="grid-li">
                <img class="grid-list-anchor" src={layouts.img.large} alt="game images" />
            </li>
      {/each}
    </ul>
    {/if}
    {#if layout === "list"}
    <ul class="list">
        {#each layoutGridList as layouts}
            <li class="list-li">
                <a class="list-li-anchor" ><img class="list-li-img" :src={layouts.img.small} />
                <p class="list-li-p">{ layouts.name }</p>
             </a>
            </li>
        {/each}
    </ul>
    {/if}
  </div>

<style scoped>
    /* panel 8 */
    .grid,
    .list {
        list-style-type: none;
    }
    .switchbar {
        width: 100%;
        height: auto;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }
    .list-swh {
        margin-right: 1rem;
        background-color: white;
        color: black;
        width: 20%;
        font-size: 11pt;
        height: 2rem;
        cursor: pointer;
        border-radius: 1rem;
    }
    .list-swh:hover,
    .grid-swh:hover {
        background-color: teal;
        color: white;
        transition-duration: 0.8s;
    }
    .grid-swh {
        background-color: white;
        width: 20%;
        font-size: 11pt;
        height: 2rem;
        cursor: pointer;
        border-radius: 1rem;
    }
    /* panel 8 grid */
    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 16rem);
        grid-gap: 0.8rem;
        padding: 0px;
        color: white;
    }
    .grid-li {
        display: inline-block;
        position: relative;
        width: 95%;
        margin-left: auto;
        margin-right: auto;
    }
    .grid-list-anchor {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 50%;
        border-radius: 0.2rem;
        position: absolute;
        width: 100%;
    }
    /* panel 8 / listy */
    .list {
        margin: 0 auto;
        padding: 0;
        text-align: left;
        width: 100%;
        color: white;
    }
    .list-li {
        width: 100%;
        height: 1.875rem;
        padding: 0.625rem;
        margin-left: 1.563rem;
    }
    .list-li-anchor {
        display: table;
        width: 100%;
    }
    .list-li-img {
        display: table-cell;
        height: 2.5rem;
        width: 2.5rem;
        vertical-align: middle;
    }
    .list-li-p {
        display: table-cell;
        vertical-align: middle;
        width: 100%;
        text-align: justify;
        padding-left: 0.938rem;
        font-size: 25px;
    }
    /* Media queries */
    /* small devices */
    @media only screen and (min-width: 500px) {
        .game-imgs {
            display: block;
            margin-left: auto;
            margin-right: auto;
            padding-right: 10rem;
        }
        .grid-list-anchor {
            height: 80%;
        }
    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
        .game-imgs {
            display: block;
            margin-left: auto;
            margin-right: auto;
            padding-right: 10rem;
        }
        .grid-list-anchor {
            height: 80%;
        }
    }
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1279px) {
        .grid-list-anchor {
            height: 75%;
        }
    }
    @media only screen and (min-width: 1650px) {
        .grid-list-anchor {
            height: 100%;
        }
    }
</style>
