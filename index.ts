import {countValues, insertToNode} from "./lib/utils";
import GeneratorType from "./lib/common/GeneratorType";

const input = document.querySelector('#count-number-input');
const btn = document.querySelector('#count-action');

btn.addEventListener('click', (event) => {
    event.preventDefault();
    //@ts-ignore
    const count = input.value;

    if (!count) {
        alert('Неверное количество элементов');
        return;
    }

    const generatorBoxes = document.querySelectorAll('.results');

    insertToNode(generatorBoxes[0], countValues(GeneratorType.Random, count));
    insertToNode(generatorBoxes[1], countValues(GeneratorType.Neyman, count));
    insertToNode(generatorBoxes[2], countValues(GeneratorType.LCG, count));
    insertToNode(generatorBoxes[3], countValues(GeneratorType.ICG, count));
});