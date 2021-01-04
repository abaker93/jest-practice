export default function reverseString(string) {
    let newString = "";

    for(let i=string.length-1; i>=0; i--) {
        let char = string.charAt(i);
        newString = newString.concat(char);
    }

    return newString;
}