<script>
    let products = [
        { name: "Battlefield 2042", price: 70, active: false },
        { name: "Jeans", price: 25, active: false },
        { name: "Socks", price: 5, active: false },
        { name: "Monitor", price: 135, active: false },
    ];

    let toggle = (e) => {
        e.active = !e.active;
    };


    let total = () => {
        let total = 0;
        products.forEach(function (e) {
            if (e.active) {
                total += e.price;
            }
            console.log(e)
        });
        return total;
    };

</script>

<div id="orderList">
    <form>
        <div>
            <ul class="item-list">
                {#each products as product}
                    <li class="list-items" value="product">
                        <label class="switch">
                            <input type="checkbox" />
                            <span class="slider" on:click={toggle(product)} />
                        </label>
                        £{product.price} - {product.name}
                    </li>
                {/each}
            </ul>
            {#if (total = total)}
            <div class="order-total">Total - £{total()}</div>
            {/if}
        </div>
    </form>
</div>

<style scoped>
    .item-list {
        list-style-type: none;
        width: fit-content;
        margin-top: -2rem;
        margin-left: -1rem;
        color: white;
    }
    .list-items {
        padding-bottom: 2rem;
    }

    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }
    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }
    input:checked + .slider {
        background-color: green;
    }
    input:focus + .slider {
        box-shadow: 0 0 1px darkgreen;
    }
    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }
    .order-total {
        text-align: right;
        margin-right: 0.5rem;
        margin-left: 0.5rem;
        margin-top: -1.8rem;
        color: white;
    }
</style>
