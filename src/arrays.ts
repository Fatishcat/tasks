import { isQuestion } from "./functions";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const bookEnds = [numbers[0], numbers[numbers.length - 1]];
    if (numbers.length < 1) {
        return [];
    }
    return bookEnds;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripleNumberArray = numbers.map(
        (numbers: number): number => numbers * 3,
    );
    return tripleNumberArray;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const integers = numbers.map(
        (stringToParse: string) => parseInt(stringToParse, 10) || 0,
    );
    return integers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const newAmounts = amounts.map((amount) => amount.replace("$", ""));
    const newNewAmounts = stringsToIntegers(newAmounts);
    return newNewAmounts;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQuestions = messages.filter(
        (message: string): boolean => !isQuestion(message),
    );
    const newMessages = noQuestions.map((newMessage: string): string =>
        newMessage[newMessage.length - 1] === "!" ?
            newMessage.toUpperCase()
        :   newMessage,
    );
    return newMessages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string): boolean => word.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const truthValue = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green",
    );
    return truthValue;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0,
    );
    if (addends.length < 1) {
        return sum + "=" + 0;
    }
    const math: string = sum + "=" + addends.join("+");
    return math;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let indexOf = values.findIndex((value: number): boolean => value < 0);
    if (indexOf === -1) {
        indexOf = values.length;
    }
    const subset = values.slice(0, indexOf);
    const sum: number = subset.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0,
    );
    const newReturn = [
        ...values.slice(0, indexOf + 1),
        sum,
        ...values.slice(indexOf + 1),
    ];
    //newReturn.splice(indexOf, 0, sum);

    return newReturn;
}
