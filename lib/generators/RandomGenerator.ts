import IGenerator from "../common/IGenerator";

/**
 * Вот этот стандартный рандом. Он Самый пиздатый. Это твой бро.
 */
class RandomGenerator implements IGenerator {
    generate(): number {
        return Math.random();
    }
}

export default RandomGenerator;