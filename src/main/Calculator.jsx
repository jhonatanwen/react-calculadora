import './Calculator.css'
import { Component } from "react"
import Button from "../components/Button"
import Display from '../components/Display'


export default class Calculator extends Component {
    render() {
        return (
            <div className="calculator">
                <Display value={100} />
                <Button label="AC" className="white" id="ac"/>
                <Button label="/" className="operator"/>
                <Button label="7" className="white"/>
                <Button label="8" className="white"/> 
                <Button label="9" className="white"/>
                <Button label="*" className="operator"/>
                <Button label="4" className="white"/>
                <Button label="5" className="white"/>
                <Button label="6" className="white"/>
                <Button label="-" className="operator"/>
                <Button label="1" className="white"/>
                <Button label="2" className="white"/>
                <Button label="3" className="white"/>
                <Button label="+" className="operator"/>
                <Button label="0" className="white" id="zero"/>
                <Button label="." className="white"/>
                <Button label="=" className="operator"/>
            </div>
        )
    }
}