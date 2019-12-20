import {countValues, insertToNode, prepareChartData} from "./lib/utils";
import GeneratorType from "./lib/common/GeneratorType";
import { Chart } from 'chart.js';

const input = document.querySelector('#count-number-input');
const btn = document.querySelector('#count-action');
const randomChartCtx = document.getElementById('random-chart') as HTMLCanvasElement;
const neimanChartCtx = document.getElementById('neiman-chart') as HTMLCanvasElement;
const linearChartCtx = document.getElementById('linear-chart') as HTMLCanvasElement;
const inverseChartCtx = document.getElementById('inverse-chart') as HTMLCanvasElement;

btn.addEventListener('click', (event) => {
    event.preventDefault();
    //@ts-ignore
    const count = input.value;

    if (!count) {
        alert('Неверное количество элементов');
        return;
    }

    const generatorBoxes = document.querySelectorAll('.results');

    const randomData = insertToNode(generatorBoxes[0], countValues(GeneratorType.Random, count));
    const neimanData = insertToNode(generatorBoxes[1], countValues(GeneratorType.Neyman, count));
    const linearData = insertToNode(generatorBoxes[2], countValues(GeneratorType.LCG, count));
    const inverseData = insertToNode(generatorBoxes[3], countValues(GeneratorType.ICG, count));

    const valuesMap = new Map<number, Element>();
    document.querySelectorAll('.generators-result').forEach(el => valuesMap.set(+el.querySelector('.results > .dispersion-value > span').innerHTML, el));
    const calculatingResult = document.querySelector('.calculating-result') as HTMLElement;
    calculatingResult.innerHTML = '';
    Array.from(valuesMap.keys()).sort((a ,b) => a - b).forEach((key, i) => calculatingResult.innerHTML += `${i + 1}. ${valuesMap.get(key).querySelector('h3').innerHTML} `);
    calculatingResult.style.display = 'block';

    const chartLables = ["0.05", "0.1", "0.15", "0.2", "0.25", "0.3", "0.35", "0.4", "0.45", "0.5", "0.55", "0.6", "0.65", "0.7", "0.75", "0.8", "0.85", "0.9", "0.95", "1"];
    const options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
    const randomChart = new Chart(randomChartCtx, {
        type: 'bar',
        data: {
            labels: chartLables,
            datasets: [{
                label: 'Генератор рандом',
                data: prepareChartData(randomData)
            }],
        },
        options
    });

    const neimanChart = new Chart(neimanChartCtx, {
        type: 'bar',
        data: {
            labels: chartLables,
            datasets: [{
                label: 'Генератор Фон-Неймана',
                data: prepareChartData(neimanData)
            }],
        },
        options
    });

    const linearChart = new Chart(linearChartCtx, {
        type: 'bar',
        data: {
            labels: chartLables,
            datasets: [{
                label: 'Линейный конгруэнтный генератор',
                data: prepareChartData(linearData)
            }],
        },
        options
    });

    const inverseChart = new Chart(inverseChartCtx, {
        type: 'bar',
        data: {
            labels: chartLables,
            datasets: [{
                label: 'Инверсный конгруэнтный генератор',
                data: prepareChartData(inverseData)
            }],
        },
        options
    });
});