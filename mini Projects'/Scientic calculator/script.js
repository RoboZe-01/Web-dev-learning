class CalculatorEngine {
    constructor() {
        this.currentValue = '0';
        this.history = [];
        this.shiftActive = false;
        this.currentMode = 'basic';
    }

    handleInput(value) {
        if (value === 'Shift') {
            this.shiftActive = !this.shiftActive;
            return;
        }
        
        if (this.currentValue === '0') this.currentValue = '';
        this.currentValue += value;
    }

    calculate() {
        try {
            const result = math.evaluate(this.currentValue);
            this.history.push(`${this.currentValue} = ${result}`);
            this.currentValue = result.toString();
        } catch (error) {
            this.currentValue = 'Error';
        }
    }

    clear() {
        this.currentValue = '0';
    }
}

class UIManager {
    constructor() {
        this.engine = new CalculatorEngine();
        this.initializeKeypad();
        this.setupEventListeners();
        this.updateDisplay();
    }

    initializeKeypad() {
        const keyLayout = [
            ['7', '8', '9', '÷', 'Shift', 'Mode'],
            ['4', '5', '6', '×', '(', ')'],
            ['1', '2', '3', '-', 'Ans', '='],
            ['0', '.', 'π', '+', 'AC', '◄']
        ];

        const keypad = document.querySelector('.keypad-grid');
        keypad.innerHTML = keyLayout.map(row => `
            <div class="key-row">
                ${row.map(key => `<button>${key}</button>`).join('')}
            </div>
        `).join('');
    }

    setupEventListeners() {
        document.querySelector('.keypad-grid').addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                const value = e.target.textContent;
                this.handleButtonPress(value);
            }
        });

        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.addEventListener('click', () => this.switchMode(btn.dataset.mode));
        });
    }

    handleButtonPress(value) {
        if (value === 'AC') this.engine.clear();
        else if (value === '=') this.engine.calculate();
        else this.engine.handleInput(value);
        
        this.updateDisplay();
    }

    switchMode(mode) {
        this.engine.currentMode = mode;
        document.querySelectorAll('.panel').forEach(panel => 
            panel.classList.toggle('hidden', !panel.classList.contains(`${mode}-panel`))
    }

    updateDisplay() {
        document.getElementById('main-display').textContent = this.engine.currentValue;
        document.getElementById('shift-indicator').style.visibility = 
            this.engine.shiftActive ? 'visible' : 'hidden';
    }
}

// Initialize the application
const app = new UIManager();

// Matrix Operations Module
class MatrixOperations {
    static createMatrixInput(rows, cols) {
        const grid = document.querySelector('.matrix-input-grid');
        grid.innerHTML = '';
        grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const input = document.createElement('input');
                input.type = 'number';
                input.placeholder = '0';
                input.dataset.row = i;
                input.dataset.col = j;
                grid.appendChild(input);
            }
        }
    }

    static getMatrixValues() {
        const inputs = document.querySelectorAll('.matrix-input-grid input');
        return Array.from(inputs).reduce((matrix, input) => {
            const row = parseInt(input.dataset.row);
            const col = parseInt(input.dataset.col);
            if (!matrix[row]) matrix[row] = [];
            matrix[row][col] = parseFloat(input.value) || 0;
            return matrix;
        }, []);
    }
}

// Graph Plotter Module
class GraphPlotter {
    static plot(expression) {
        try {
            const xValues = Array.from({length: 100}, (_, i) => -10 + i * 0.2);
            const yValues = xValues.map(x => math.evaluate(expression, {x}));
            
            Plotly.newPlot('graph-container', [{
                x: xValues,
                y: yValues,
                type: 'scatter'
            }]);
        } catch (error) {
            console.error('Plotting error:', error);
        }
    }
}