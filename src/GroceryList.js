import { Component } from "react";
import check from './61.png';

export class GroceryList extends Component {
    constructor() {
        super();

        this.state = {
            userInput: '',
            groceryList: []

        }
    }

    onChangeEvent(event){  
        
        this.setState({userInput: event})
        console.log(event)
    }

    addItem(input){
        if(input === ''){
            alert ('Вы не ввели значение')
        }
        else {
            let listArrey = this.state.groceryList;
        listArrey.push(input);
        this.setState({groceryList: listArrey, userInput:''})
        console.log(listArrey);
        }
    
    }

    crossWord(event){
        const li = event.target;
        li.classList.toggle('crossed');
    } 
    
    delitItem(){
        let listArrey = this.state.groceryList;
        
        listArrey.length = 0;
        this.setState({groceryList: listArrey})
    }

    onFormSubmit(event){
        event.preventDefault(); 
    }


    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}
                > 
                <div className="container">
                    <input type='text' placeholder="Введиите позицию"
                    onChange={(event) => {this.onChangeEvent(event.target.value)}}
                    value={this.state.userInput}/> 
                </div>
                <div className="container">
                    <button  onClick={()=> this.addItem(this.state.userInput)} className="add">Добавить</button>
                </div>
                <ul>
                    {this.state.groceryList.map((item, index) => (
                        <li onClick={this.crossWord} key={index}>
                            <img src={check} width='40px'/>
                            {item}
                        </li>
                    ))}                    
                </ul>
                <div className="container">
                    <button onClick={() => this.delitItem()} className="delete">Удалить</button>
                </div>
                </form>

            </div>
            
        )
    }
}