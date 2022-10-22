/*
    Za pomocą liczników wykonaj zdarzenie wyświetlania czasu, który upłynął od startu aplikacji, co 1 sekundę,
*/

const startTimestamp = Date.now();

const print = () => {
    setTimeout(() => {
        const elapsed = (Date.now() - startTimestamp) / 1000;
        console.log(elapsed);
        print();
    }, 1000)    
};

print();

