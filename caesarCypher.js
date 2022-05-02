function caesarCypher(secret, shift) {
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === " ") {
            result += secret[i];
        } else {
            let letter = secret[i];
            let foundIndex = null;
            for (let j = 0; j < alphabets.length; j++) {
                if (alphabets[j] === letter) {
                    foundIndex = j;
                    break;
                }
            }
            let indexPlusShift = foundIndex + shift;
            console.log({ indexPlusShift });
            if (indexPlusShift < alphabets.length - 1) {
                result += alphabets[indexPlusShift];
            }
            if (indexPlusShift > alphabets.length - 1) {
                result +=
                    alphabets[indexPlusShift - (alphabets.length - 1) - 1];
            }
        }
    }
    return result;
}

describe("Caesar Cypher", () => {
    it("is a function?", () => {
        expect(typeof caesarCypher).toEqual("function");
    });

    it("rotates a letter by the number passed in", () => {
        let returnedValue = caesarCypher("a", 2);
        expect(returnedValue).toEqual("c");
    });

    it("rotates every letter in the string by the supplied letter", () => {
        let returnedValue = caesarCypher("doggo", 7);
        expect(returnedValue).toEqual("kvnnv");
    });

    it("wraps around to the beginning of the alphabet when necessary", () => {
        let returnedValue = caesarCypher("hello", 13);
        expect(returnedValue).toEqual("uryyb");
    });

    it("retains spaces between encrypter world", () => {
        let returnedValue = caesarCypher("hello world", 13);
        expect(returnedValue).toEqual("uryyb jbeyq");
    });
});
