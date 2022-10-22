/*
2. Zadania liczniki:
    - Co jedną sekundę wyświetlpięć razy literę‘a’ w odstępach10 ms,
*/

let counter = 0;

const print = () => {
    setTimeout(() => {
        if (counter > 3) {
            counter = 0;
            return;
        }
        console.log("A");
        counter++;
        print();
    }, 10)
};

setInterval(() => {
    print();
}, 1000);


