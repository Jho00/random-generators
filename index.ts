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

    const valuesMap = new Map<number, Element>();
    document.querySelectorAll('.generators-result').forEach(el => valuesMap.set(+el.querySelector('.results > .dispersion-value > span').innerHTML, el));
    const calculatingResult = document.querySelector('.calculating-result') as HTMLElement;
    calculatingResult.innerHTML = calculatingResult.innerHTML + ' ' + valuesMap.get(Math.min(...valuesMap.keys())).querySelector('h3').innerHTML;
    calculatingResult.style.display = 'block';
});