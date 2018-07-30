import React, {Component} from "react";

class Board extends Component{
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        }
    }
    handleClick(i){
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext? "X": "O";
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }
    renderSquare(i){
        return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />
    }
    render(){
        const status = "next player: X";
        return(
            <div>
                <div>
                    {status}
                </div>
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
            </div>
        );
    }
}

function Square(props){ //Another component definition if this component only have render method
    return( // Also, we don't need arrow function for the onClick event because in a class, we used an arrow function to access the correct this value, but in a functional component we don’t need to worry about this.
        <button className = "square" onClick = {props.onClick}>
            {props.value}
        </button>
    );
}

// class Square extends Component{

//     // constructor(props){
//     //     super(props);
//     //     this.state = {
//     //         value: null,
//     //     };
//     // };
//     // if I want define a method using this, I must wrap method definition into one life cycle method
    
//     // componentDidMount(){
//     //     let currentComponent = this; // "this" doesn't go inside methods which are not life cycle method such as render() or componentDidMount()
        
//     //     function(): clickChange(){
//     //         console.log(1);
//     //         console.log(this);
//     //         currentComponent.setState({
//     //             value: "X",
//     //         });
//     //     };
//     // };

//     // clickChange(){
//     //     console.log(1);
//     //     console.log(this);
//     //     let currentComponent = this; // "this" doesn't go inside methods which are not life cycle method such as render() or componentDidMount()
//     //     currentComponent.setState({
//     //         value: "X",
//     //     });
//     // }
//     // componentWillUpdate(){
//     //     console.log(this);
//     // };
//     render(){
//         console.log(this);
//         return(
//             <button className="square" onClick={() => this.props.onClick()}> 
//                 {this.props.value}
//             </button>
//         )
//     }
//     //why this.setState works well in arrow function or? in render()
// }

export default Board;