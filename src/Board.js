import React, {Component} from "react";

class Board extends Component{
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        }
    }
    calcWinner(squares){
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++){
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a]===squares[b] && squares[b]===squares[c]){
                return squares[a];
            }
        }
    }
    handleClick(i){
        const squares = this.state.squares.slice();
        if(squares[i] || this.calcWinner(squares)){
            return
        }
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
        const winner = this.calcWinner(this.state.squares);
        let status;
        if(winner){
            status = "The winner is: " + winner;
        }
        else{
            status = "next player: " + (this.state.xIsNext? "X":"O");
        }
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