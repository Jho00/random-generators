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
        max: max,
        numbers
    };
};

export const insertToNode = (node: Element, values: CountValues) => {
  node.querySelector('.avg-value > span').innerHTML = String(values.avg);
  node.querySelector('.dispersion-value > span').innerHTML = String(values.dispersion);
  node.querySelector('.min-value > span').innerHTML = String(values.min);
  node.querySelector('.max-value > span').innerHTML = String(values.max);
  return values.numbers;
};

export const prepareChartData = (values: number[]): number[] => {
    const preparedData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let val of values) {
        if (val > 0 && val < 0.05) preparedData[0] +=1;
        if (val > 0.05 && val < 0.1) preparedData[1] += 1;
        if (val > 0.1 && val < 0.15) preparedData[2] += 1;
        if (val > 0.15 && val < 0.2) preparedData[3] += 1;
        if (val > 0.2 && val < 0.25) preparedData[4] += 1;
        if (val > 0.25 && val < 0.3) preparedData[5] += 1;
        if (val > 0.3 && val < 0.35) preparedData[6] += 1;
        if (val > 0.35 && val < 0.4) preparedData[7] += 1;
        if (val > 0.4 && val < 0.45) preparedData[8] += 1;
        if (val > 0.45 && val < 0.5) preparedData[9] += 1;
        if (val > 0.5 && val < 0.55) preparedData[10] += 1;
        if (val > 0.55 && val < 0.6) preparedData[11] += 1;
        if (val > 0.6 && val < 0.65) preparedData[12] += 1;
        if (val > 0.65 && val < 0.7) preparedData[13] += 1;
        if (val > 0.7 && val < 0.75) preparedData[14] += 1;
        if (val > 0.75 && val < 0.8) preparedData[15] += 1;
        if (val > 0.8 && val < 0.85) preparedData[16] += 1;
        if (val > 0.85 && val < 0.9) preparedData[17] += 1;
        if (val > 0.9 && val < 0.95) preparedData[18] += 1;;
        if (val > 0.95 && val < 1) preparedData[19] += 1;;
    }

    return preparedData;
}