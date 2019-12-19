import IGenerator from "../common/IGenerator";

export class KK2Generator implements IGenerator{
    private x = 0;
    private a = 8775887;
    private b = 1166;
    private c = 5898;
    private m = 1000000;
    
    generate(): number {
        this.x = (this.a * this.x * this.x + this.b * this.x + this.c) % this.m;
        return this.x;
    }

}