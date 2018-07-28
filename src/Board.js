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


    clickAlert(){
        alert("hello");
    }
    render(){
        return(
            <button onClick={this.clickAlert}>
                {this.props.value}
            </button>
        )
    }
}

export default Board;