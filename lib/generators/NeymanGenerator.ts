import IGenerator from "../common/IGenerator";

/**
 * Это говнина сраная. Тут можно в качестве начального значения брать указатель мышки или еще что-то, но рано или поздно
 * эта срань все равно будет давать периодичные значения. Метод древний, как говно мамонта, и не рабочий, как Тю после 3 литра пива.
 */
class NeymanGenerator implements IGenerator {
    private _nextNumber: number = 9889;

    generate(): number {
        const result = this._nextNumber / 10000;
        this._nextNumber = this.getNewNextNumber();
        return result;
    }

    private getNewNextNumber(): number {
        const sq = this._nextNumber * this._nextNumber;
        return Math.floor((sq % 1000000) / 100);
    }

}

export default NeymanGenerator;