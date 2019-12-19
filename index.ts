import RandomGeneratorFabric from "./lib/RandomGeneratorFabric";
import IGenerator from "./lib/common/IGenerator";
import GeneratorType from "./lib/common/GeneratorType";
import {dispersion} from "./lib/utils";

const randomCounts = 10000;
//------------------------------
let generator: IGenerator = RandomGeneratorFabric.getGenerator(GeneratorType.Neyman);
let numbers: number[] = [];

for (let i = 0; i < randomCounts; ++i) {
    numbers.push(generator.generate());
}

console.log('Neyman: ' + dispersion(numbers));
//------------------------------
generator = RandomGeneratorFabric.getGenerator(GeneratorType.Random);
numbers = [];

for (let i = 0; i < randomCounts; ++i) {
    numbers.push(generator.generate());
}

console.log('Random: ' + dispersion(numbers));
//------------------------------
generator = RandomGeneratorFabric.getGenerator(GeneratorType.LCG);
numbers = [];

for (let i = 0; i < randomCounts; ++i) {
    numbers.push(generator.generate());
}

console.log('LCG: ' + dispersion(numbers));
//------------------------------
generator = RandomGeneratorFabric.getGenerator(GeneratorType.ICG);
numbers = [];

for (let i = 0; i < randomCounts; ++i) {
    numbers.push(generator.generate());
}

console.log('ICG: ' + dispersion(numbers));