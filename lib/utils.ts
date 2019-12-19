import GeneratorType from "./common/GeneratorType";
import {CountValues} from "./common/CountValues";
import IGenerator from "./common/IGenerator";
import RandomGeneratorFabric from "./RandomGeneratorFabric";

export const dispersion = (numbers: number[], avg?: number): number => {
    let res = 0;
    if (!avg) {
        avg = getAvg(numbers);
    }

    numbers.forEach((item: number) => {
        const sqr = item - avg;
        res+= sqr * sqr;
    });

    return res / numbers.length;
};

export const getAvg = (numbers: number[]): number => numbers.reduce((sum: number, curr: number): number => sum + curr) / numbers.length;

export const countValues = (generatorType: GeneratorType, countNumber: number): CountValues => {
    let min: number;
    let max: number;
    let avg: number;
    let dispers: number;

    const generator: IGenerator = RandomGeneratorFabric.getGenerator(generatorType);
    const numbers: number[] = [];

    const first = generator.generate();
    min = max = first;
    numbers.push(first);

    for (let i = 0; i < countNumber - 1; i++) {
        const value = generator.generate();
        if (value < min) {
            min = value;
        }
        if (value > max) {
            max = value
        }
        numbers.push(value);
    }

    avg = getAvg(numbers);
    dispers = dispersion(numbers,avg);

    return {
        dispersion: dispers,
        avg: avg,
        min: min,
        max: max
    };
};

export const insertToNode = (node: Element, values: CountValues) => {
  node.querySelector('.avg-value > span').innerHTML = String(values.avg);
  node.querySelector('.dispersion-value > span').innerHTML = String(values.dispersion);
  node.querySelector('.min-value > span').innerHTML = String(values.min);
  node.querySelector('.max-value > span').innerHTML = String(values.max);
};