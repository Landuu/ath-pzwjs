const willBeTrue = async () => {
    return new Promise((resolve, reject) => {
        let randomBool = Math.random() < 0.9;
        randomBool ? resolve('tak') : reject('nie');
    });
};
let res = await willBeTrue();
console.log(res);
export {};
