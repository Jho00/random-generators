import IGenerator from "../common/IGenerator";

/**
 * Это говнина сраная. Тут можно в качестве начального значения брать указатель мышки или еще что-то, но рано или поздно
 * эта срань все равно будет давать периодичные значения. Метод древний, как говно мамонта, и не рабочий, как Тю после 3 литра пива.
 */
class NeymanGenerator implements IGenerator {
    private _nextNumber: number = 9889;

    private _defaultValue = 0.9876;
    private _startValue = this._defaultValue;
    private _decrement = 0.1234;

    generate(): number {
        const rand =  NeymanGenerator.nextRand(this._startValue);
        if (rand == 0) {
            this._defaultValue = +(this._defaultValue - this._decrement).toFixed(4);
            this._startValue = this._defaultValue;
            const newRand = NeymanGenerator.nextRand(this._startValue);
            this._startValue = newRand;

            return  newRand;
        }
        this._startValue = rand;

        return rand;
    }

    private static checkCorrect(num: string): string {
        if (num.length < 11) {
            const zeroCount = 10 - num.length;

            const numberValue = num.substring(2);

            // @ts-ignore
            return `0.${'0'.repeat(zeroCount)}${numberValue}`;
        }
            return num;
    };

    private static nextRand(startValue ): number {
        const multiplyValue = `${(startValue ** 2).toFixed(8)}`.replace(
            /0+$/g,
            ''
        );

        const correctValue = NeymanGenerator.checkCorrect(multiplyValue);

        const index = (correctValue.length - 2) / 2;

        return +correctValue.substring(index, index + 4) / 10000;
    };
}

export default NeymanGenerator;