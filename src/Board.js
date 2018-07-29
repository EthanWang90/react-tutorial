import React, {Component} from "react";

class Board extends Component{
    renderSquare(i){
        return <Square value={i}/>
    }
    render(){
        return(
            <div>
                <div className="row1">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>                
                <div className="row2">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>                
                <div className="row3">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Square extends Component{

    constructor(props){
        super(props);
        this.state = {
            value: null,
        };
    };
    // if I want define a method using this, I must wrap method definition into one life cycle method
    
    // componentDidMount(){
    //     let currentComponent = this; // "this" doesn't go inside methods which are not life cycle method such as render() or componentDidMount()
        
    //     clickChange(){
    //         console.log(1);
    //         console.log(this);
    //         currentComponent.setState({
    //             value: "X",
    //         });
    //     };
    // };

    // clickChange(){
    //     console.log(1);
    //     console.log(this);
    //     let currentComponent = this; // "this" doesn't go inside methods which are not life cycle method such as render() or componentDidMount()
    //     currentComponent.setState({
    //         value: "X",
    //     });
    // }
    // componentWillUpdate(){
    //     console.log(this);
    // };
    render(){
        console.log(this);
        return(
            <button className="square" onClick={() => this.setState({value: "X"})}> 
                {this.state.value}
            </button>
        )
    }
    //why this.setState works well in arrow function or? in render()
}

export default Board;