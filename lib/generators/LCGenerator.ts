import IGenerator from "../common/IGenerator";

/**
 * Линейный конгруэнтный генератор. Он вроде норм, но нихера не периодичен и не обладает криптографической стойкостью
 * Прослеживаются последовательности и повторения
 */
class LCGenerator implements IGenerator {
    private _a = 45;
    private _c = 21;
    private _m = 67;
    private _seed = 2;

    generate(): number {
        this._seed = (this._a * this._seed + this._c) % this._m;
        return this._seed / 100;
    }
}

export default LCGenerator;