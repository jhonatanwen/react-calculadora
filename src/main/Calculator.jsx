import './Calculator.css'
import { Component } from "react"
import Button from "../components/Button"
import Display from '../components/Display'

const initialState = {
    displayValue: '0', // Define o valor mostrado no Display.
    clearDisplay: false, // Proprieda para saber se o Display deve ou não ser limpo após a entrada dos valores.
    operation: null, // Define que operação está sendo usada.
    values: [0, 0], // Define o armazenamento dois valores para que sejam feitas as operações matemáticas.
    current: 0 // Define que o valor esta sendo manipulado no Array values.
}

export default class Calculator extends Component {
    state = {...initialState}
    
    constructor(props) {
        super(props)
        
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }
    
    clearMemory() {
        this.setState({...initialState})
    }
    
    setOperation(operation) {
        if(this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            const equals = operation === "="
            const currentOperation = this.state.operation
            const values = [...this.state.values]
            
            switch(currentOperation) {
                case "/":
                    values[0] = values[0] / values[1]
                    break
                case "*":
                    values[0] = values[0] * values[1]
                    break
                case "-":
                    values[0] = values[0] - values[1]
                    break
                case "+":
                    values[0] = values[0] + values[1]
                    break
            }
            
            if (isNaN(values[0]) || !isFinite(values[0])) {
                this.clearMemory()
                return
            }
            
            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }
    
    addDigit(n) {
        if(n === '.' && this.state.displayValue.includes('.')){
            return
            // Inibe que o usuário acabe adicionando mais do que um ponto no valor.
        }

        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay // Lógica para a mudança dos valores no Display serem ou não limpos.
        const currentValue = (clearDisplay && n!=='.') ? '' : this.state.displayValue // Lógica para mudança do valor exibido no Display.
        const displayValue = currentValue + n // Muda o valor exibido no Display com base no currentValue.
        const i = this.state.current
        const newValue = parseFloat(displayValue)
        const values = [...this.state.values]
        values[i] = newValue
        
        this.setState({ displayValue, clearDisplay: false })
        this.setState({ values })
        // Teste: 
        console.log(values)
    }
    
    render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" click={this.clearMemory} className="white" id="ac"/>
                <Button label="/" click={this.setOperation} className="operator"/>
                <Button label="7" click={this.addDigit} className="white"/>
                <Button label="8" click={this.addDigit} className="white"/> 
                <Button label="9" click={this.addDigit} className="white"/>
                <Button label="*" click={this.setOperation} className="operator"/>
                <Button label="4" click={this.addDigit} className="white"/>
                <Button label="5" click={this.addDigit} className="white"/>
                <Button label="6" click={this.addDigit} className="white"/>
                <Button label="-" click={this.setOperation} className="operator"/>
                <Button label="1" click={this.addDigit} className="white"/>
                <Button label="2" click={this.addDigit} className="white"/>
                <Button label="3" click={this.addDigit} className="white"/>
                <Button label="+" click={this.setOperation} className="operator"/>
                <Button label="0" click={this.addDigit} className="white" id="zero"/>
                <Button label="." click={this.addDigit} className="white"/>
                <Button label="=" click={this.setOperation} className="operator"/>
            </div>
        )
    }
}
