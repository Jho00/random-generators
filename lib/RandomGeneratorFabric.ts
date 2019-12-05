import IGenerator from "./common/IGenerator";
import GeneratorType from "./common/GeneratorType";
import RandomGenerator from "./generators/RandomGenerator";
import NeymanGenerator from "./generators/NeymanGenerator";
import LCGenerator from "./generators/LCGenerator";
import ICGenerator from "./generators/ICGenerator";

const RandomGeneratorFabric = {
    getGenerator(type: GeneratorType): IGenerator {
        switch (type) {
            case GeneratorType.Random:
                return new RandomGenerator();
            case GeneratorType.Neyman:
                return new NeymanGenerator();
            case GeneratorType.LCG:
                return new LCGenerator();
            case GeneratorType.ICG:
                return new ICGenerator();
            default:
                throw new Error(`Unresolved generator type: ${type}`);
        }
    }
};

export default RandomGeneratorFabric;