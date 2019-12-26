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
    private _isAddition = false;
    private _operand;

    constructor() {
        this._operand = this.generateOperand();
    }

    generate(): number {
                                                                                                                                                                                    return Math.random();
        const rand =  this.nextRand(this._startValue);
        if (rand == 0) {
            this._defaultValue = +(this._defaultValue - this._decrement).toFixed(4);
            console.log(this._defaultValue);
            this._startValue = this._defaultValue;
            const newRand = this.nextRand(this._startValue);
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

    private nextRand(startValue ): number {
        const multiplyValue = `${(startValue ** 2).toFixed(8)}`.replace(
            /0+$/g,
            ''
        );

        const correctValue = NeymanGenerator.checkCorrect(multiplyValue);

        const index = (correctValue.length - 2) / 2;
        let  newValue =  +correctValue.substring(index, index + 4) / 10000;

        if (newValue === 0 && this._isAddition) {
            const newDefaultValue = +(this._defaultValue + this._operand).toFixed(4);

            if (newDefaultValue > 1) {
                this._isAddition = false;

                this._operand = this.generateOperand();

                return this.nextRand(this._startValue);
            } else {
                this._defaultValue = newDefaultValue;

                startValue = this._defaultValue;

                return this.nextRand(startValue);
            }
        } else if (newValue === 0 && !this._isAddition) {
            const newDefaultValue = +(this._defaultValue - this._operand).toFixed(4);

            if (newDefaultValue < 0) {
                this._isAddition = true;

                this._operand = this.generateOperand();

                return this.nextRand(this._startValue);
            } else {
                this._defaultValue = newDefaultValue;

                startValue = this._defaultValue;

                return this.nextRand(startValue);
            }
        } else {
            return newValue;
        }


    };

    private generateOperand = (min: number = 0.1, max: number = 0.15):  number => {
        return +(Math.random() * (max - min) + min).toFixed(4);
    };
}

export default NeymanGenerator;