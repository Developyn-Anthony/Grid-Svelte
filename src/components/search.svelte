<script>
    let search = "";
    let games = [
        { name: "Farming Sim 22", img: "fs22.jpg" },
        { name: "Battlefield 2042", img: "bf2042.jpg" },
        { name: "Destiny", img: "dest1.jpg" },
        { name: "Destiny 2", img: "dest2.jpg" },
        { name: "Halo Infinite", img: "infinite.png" },
    ];

    $: games = games.filter((game) =>
        game.name.toLowerCase().includes(search.toLowerCase())
    );
</script>

<div id="search">
    <div>
        <input
            type="search"
            id="searchBar"
            bind:value={search}
            placeholder="Search"
        />
    </div>
    {#each games as game}
        <ul class="game-list" v-for="game in sortGames">
            <li>
                <a class="list-li-anchor" >
                    <img class="game-imgs" src={game.img} alt="Image of a game" />
                    <p class="img-text">{game.name}</p>
                </a>
            </li>
        </ul>
    {/each}
</div>

<style scoped>
    .game-list {
        list-style-type: none;
        border-bottom: 0.1rem white solid;
    }
    .game-imgs {
        display: table-cell;
        vertical-align: middle;
        width: 8rem;
        height: auto;
        padding-bottom: 5%;
    }
    .img-text {
        color: white;
        display: table-cell;
        vertical-align: middle;
        width: 100%;
        text-align: justify;
        font-size: 16pt;
    }
    #searchBar {
        width: 50%;
        height: 2rem;
        margin-left: 1rem;
        padding-left: 0.8rem;
        border-radius: 1rem;
    }
    </style>