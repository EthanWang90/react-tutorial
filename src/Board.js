import React, {Component} from "react";

class Board extends Component{
    renderSquare(i){
        return <Square />
    }
    render(){
        return(
            <div>
                <div className="row1">
                    {this.renderSquare(1)}
                    {this.renderSquare(1)}
                    {this.renderSquare(1)}
                </div>                
                <div className="row2">
                    {this.renderSquare(2)}
                    {this.renderSquare(2)}
                    {this.renderSquare(2)}
                </div>                
                <div className="row3">
                    {this.renderSquare(3)}
                    {this.renderSquare(3)}
                    {this.renderSquare(3)}
                </div>
            </div>
        );
    }
}

class Square extends Component{

    render(){
        return(
            <button>A</button>
        )
    }
}

export default Board;