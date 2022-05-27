import './Calculator.css'
import { Component } from "react"
import Button from "../components/Button"
import Display from '../components/Display'

const initialState = {
    displayValue: '0', // Aqui é definido que o display começa com o valor 0.
    clearDisplay: false, // Proprieda para saber se o display deve ou não ser limpo após a entrada dos valores.
    operation: null, // Por ser o início, não há operação, então ela é definida como nula.
    values: [0, 0], // Define dois valores armazenados (0 e 0) para fazer a lógica de armazenamento dos valores modificados após uma operação ser adicionada.
    current: 0 // Define que o valor inicial a ser manipulado seja o primeiro valor do Array values.
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
        console.log(operation)
    }
    
    addDigit(n) {
        console.log(n)
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