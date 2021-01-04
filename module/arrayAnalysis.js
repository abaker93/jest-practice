import { string } from "yargs";

export function average(arr) {
    let sum = 0;
    let length = arr.length;

    for (let i=0; i<arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum / length;
}

export function min(arr) {
    let min = arr[0]

    for (let i=0; i<arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i]
        }
    }

    return min
}

export function max(arr) {
    let max = arr[0]

    for (let i=0; i<arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }

    return max
}

export function length(arr) {
    return arr.length
}