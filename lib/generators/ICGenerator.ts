import IGenerator from "../common/IGenerator";

/**
 * Инверсный конгруэнтный метод
 * В целом норм, но несколько тяжеловесен, поскольку есть рекурсивные операции и сложная операция обращения к полю значения
 */
class ICGenerator implements IGenerator {
    private _seed = 1;
    private _n = 104729;
    private _a = 1;
    private _c = 1;

    generate(): number {
        this._seed = this.next();
        return this._seed / 100000;
    }

    private next(): number {
        if (this._seed == 0) {
            return this._c;
        }
        return (this._a * ICGenerator.modInv(this._seed, this._n) + this._c) % this._n;
    }

    private static modInv(a: number, n: number) {
        let b0 = n, t, q;
        let x0 = 0, x1 = 1;
        if (n == 1) return 1;
        while (a > 1) {
            q = Math.floor(a / n);
            t = n, n = a % n, a = t;
            t = x0, x0 = x1 - q * x0, x1 = t;
        }
        if (x1 < 0) x1 += b0;
        return x1;
    }
}

export default ICGenerator;