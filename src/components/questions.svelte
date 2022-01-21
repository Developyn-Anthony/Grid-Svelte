<script>
    let questions = [
        {
            question: "What color is grass?",
            options: ["Green", "Red", "Purple", "What's grass?"],
            correctIndex: 0,
        },
        {
            question:
                "How old is Big Ben?",
            options: ["179", "152", "180", "215"],
            correctIndex: 0,
        },
        {
            question:
                "What is the capital of Australia?",
            options: ["Sydney", "Canberra", "Melbourne", "Perth"],
            correctIndex: 1,
        },
        {
            question:
                "Distance to the Moon in km?",
            options: [
                "400,800km",
                "383,500km",
                "395,800km",
                "384,400km"],
            correctIndex: 3,
        },
    ];

    let answers = new Array(questions.length).fill(null);
    let questionPointer = -1;
    let soundUrl = "https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3";

    let getScore = () => {
        let score = answers.reduce((acc, val, index) => {
            if (questions[index].correctIndex == val) {
                return acc + 1;
            }
            return acc;
        }, 0);
        return (score / questions.length) * 100 + "%";
    };
    function restartQuiz() {
        answers = new Array(questions.length).fill(null);
        questionPointer = 0;
    }
    function sound() {
    if (questionPointer === 4) {
      let sound = new Audio(soundUrl);
      sound.play();
    }
  }
</script>

<div class="app">
    {#if questionPointer == -1}
        <div class="start-screen">
            <button
                on:click={() => {
                    questionPointer = 0;
                }}
                class="quest-button"
            >
                Start Quiz
            </button>
        </div>
    {:else if !(questionPointer > answers.length - 1)}
        <div class="quiz-screen">
            <div class="main">
                <h4>
                    {questions[questionPointer].question}
                </h4>
                <div class="options">
                    {#each questions[questionPointer].options as opt, i}
                        <button
                            class={answers[questionPointer] == i
                                ? "selected"
                                : ""}
                            on:click={() => {
                                answers[questionPointer] = i;
                            }}
                        >
                            {opt}
                        </button>
                    {/each}
                </div>
            </div>
            <div class="footer">
                <div class="progress-bar">
                    <div
                        style="width:{(questionPointer / questions.length) *
                            100}%"
                    />
                </div>
                <div>
                    <button class="buttons"
                        disabled={questionPointer == 0}
                        on:click={() => {
                            questionPointer--;
                        }}
                    >
                        Prev
                    </button>
                    <button class="buttons"
                        on:click={() => {
                            questionPointer++;
                        }}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    {:else}
        <div class="score-screen">
            <h3>
                Your score: {getScore()}
            </h3>
            <p class="sound-hidden">{sound()}</p>
            <button on:click={restartQuiz} class="quest-button"> Restart Quiz </button>
        </div>
    {/if}
</div>

<style scoped>
    .app {
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 100%;
        color: #fff;
        text-align: center;
    }

    .buttons {
        margin-top: 0.5rem;
        background-color: crimson;
        width: 15%;
        height: 1.5rem;
        color: #fff;
        border-radius: 30%;
    }

    .sound-hidden {
        display: none;
    }

    .quest-button {
        background-color: darkgreen;
        width: 30%;
        height: 2rem;
        border: 0.1rem #fff solid;
        color: white;
        border-radius: 1.5rem;
    }
</style>
