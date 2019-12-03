import IGenerator from "./common/IGenerator";
import GeneratorType from "./common/GeneratorType";
import RandomGenerator from "./generators/RandomGenerator";
import NeymanGenerator from "./generators/NeymanGenerator";

export const RandomGeneratorFabric = {
    getGenerator(type: GeneratorType): IGenerator {
        switch (type) {
            case GeneratorType.Random: return new RandomGenerator();
            case GeneratorType.Neyman: return new NeymanGenerator();
            default: throw new Error(`Unresolved generator type: ${type}`);
        }
    }
};
