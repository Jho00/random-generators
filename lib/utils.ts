export const dispersion = (numbers: number[]): number => {
    let res = 0;
    const avg = getAvg(numbers);

    numbers.forEach((item: number) => {
        const sqr = item - avg;
        res+= sqr * sqr;
    });

    return res / numbers.length;
};

export const getAvg = (numbers: number[]): number => numbers.reduce((sum: number, curr: number): number => sum + curr) / numbers.length;