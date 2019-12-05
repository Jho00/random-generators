import RandomGeneratorFabric from "./lib/RandomGeneratorFabric";
import IGenerator from "./lib/common/IGenerator";
import GeneratorType from "./lib/common/GeneratorType";

const generator: IGenerator = RandomGeneratorFabric.getGenerator(GeneratorType.Neyman);

for (let i = 0; i < 100; ++i) {
    console.log(generator.generate());
}