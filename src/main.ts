import { bufferToFile, fileToBuffer, print } from "kolmafia";

export default function main(): void {
  const stacks = [
    ["S", "C", "V", "N"],
    ["Z", "M", "J", "H", "N", "S"],
    ["M", "C", "T", "G", "J", "N", "D"],
    ["T", "D", "F", "J", "W", "R", "M"],
    ["P", "F", "H"],
    ["C", "T", "Z", "H", "J"],
    ["D", "P", "R", "Q", "F", "S", "L", "Z"],
    ["C", "S", "L", "H", "D", "F", "P", "W"],
    ["D", "S", "M", "P", "F", "N", "G", "Z"],
  ];

  const stacks2 = [
    ["S", "C", "V", "N"],
    ["Z", "M", "J", "H", "N", "S"],
    ["M", "C", "T", "G", "J", "N", "D"],
    ["T", "D", "F", "J", "W", "R", "M"],
    ["P", "F", "H"],
    ["C", "T", "Z", "H", "J"],
    ["D", "P", "R", "Q", "F", "S", "L", "Z"],
    ["C", "S", "L", "H", "D", "F", "P", "W"],
    ["D", "S", "M", "P", "F", "N", "G", "Z"],
  ];

  const input = fileToBuffer("input.txt")
    .trim()
    .split(/\n/g)
    .map((element) => element.split(/(move|from|to)/g))
    .map((element) => [parseInt(element[2]), parseInt(element[4]), parseInt(element[6])]);

  input.forEach((element) => {
    for (let i = 0; i < element[0]; i++) {
      stacks[element[2] - 1].push(stacks[element[1] - 1].pop()!);
    }
  });

  input.forEach((element) => {
    let subStack: string[] = [];
    for (let i = 0; i < element[0]; i++) {
      subStack.push(stacks2[element[1] - 1].pop()!);
    }
    subStack.reverse().forEach((letter) => stacks2[element[2] - 1].push(letter));
  });

  const solution1 = stacks.map((element) => element[element.length - 1]).join("");
  const solution2 = stacks2.map((element) => element[element.length - 1]).join("");

  print(solution1);
  print(solution2);
}
