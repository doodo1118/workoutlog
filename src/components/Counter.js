import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

class Counter extends Component{
    static defaultProps = {
        number: 0,
        color: 'black',
        onIncrement: () => console.warn('onIncrement not defined'),
        onDecrement: () => console.warn('onDecrement not defined'),
        onSetColor: () => console.warn('onSetColor not defined'),
    }
    static propTypes = {
        number: PropTypes.number,
        color: PropTypes.string,
        onIncrement: PropTypes.func,
        onDecrement: PropTypes.func,
        onSetColor: PropTypes.func,
    }

    render(){
        return(
            <div 
                className="Counter" 
                onClick={this.props.onIncrement} 
                onContextMenu={
                    (e) => { 
                        e.preventDefault(); 
                        this.props.onDecrement();
                    }
                } 
                onDoubleClick={this.props.onSetColor}
                style={{backgroundColor: this.props.color}}>
                    {this.props.number}
            </div>
        )
    }
}

export default Counter;
