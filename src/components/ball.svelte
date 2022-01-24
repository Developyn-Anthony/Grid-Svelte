<script>
    let responses = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes - definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Yes",
        "Signs point to yes",
        "Don't count on it",
        "My reply is no",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Ask again",
    ];

    let question = "";
    let response = "";
    let image = "magic-eight-ball.png";

    let getAnswer = () => {
        if (!question) {
            return;
        }
        let index = Math.floor(Math.random() * responses.length);
        response = responses[index];
    };
</script>

<div class="magic-ball">
    <div id="eightball">
        <form class="question-box" on:submit|preventDefault={getAnswer}>
            <div class="question-game">
                <input bind:value={question} placeholder=" Ask:" />
            </div>
            <button class="quest-button" type="submit">Submit</button>
        </form>
        <div class="circle">
            <img src={image} alt="Magic 8 Ball" />
            <div class="response-div">
                <p>{ response }</p>
            </div>
        </div>
    </div>
</div>

<style scoped>
    .circle {
      background-position: center;
      background-size: 100%;
      width: 80%;
      height: 80%;
      margin-left: auto;
      margin-right: auto;
      justify-content: center;
      align-items: center;
    }
    .circle img {
      width: 80%;
      position: absolute;
    }
    .circle p {
      position: relative;
      text-align: center;
      height: 100%;
      width: 100%;
      color: #fff;
      font-size: 12px;
      padding-top: 48%;
    }
    .question-game {
      width: 95%;
      height: 3rem;
    }
    .question-box {
      display: flex;
      flex-direction: row;
    }
    
    .question-box input {
      width: 9rem;
      height: 2rem;
      margin-left: 0.2rem;
    }

    .quest-button {
        background-color: teal;
        width: 30%;
        height: 2rem;
        border: 0.1rem #fff solid;
        color: white;
        border-radius: 1.5rem;
        transition-duration: 0.5s;
    }

    .quest-button:hover {
        background-color: #004e4f;/*DarkTeal*/
        width: 35%;
        height: 2rem;
        border: 0.1rem #fff solid;
        color: white;
        border-radius: 1.5rem;
        transition-duration: 0.5s;
    }
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1279px) {
      .circle p {
        font-size: 16px;
      }
    }
    </style>
