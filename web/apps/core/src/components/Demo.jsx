import React from 'react';

export default class Demo extends React.Component{
    static propTypes = {
        name: React.PropTypes.string
    }

    getName(){
        return this.props.name || 'World'
    }

    render(){
        return (
            <div>
                <p>Hello { this.getName() }</p>
            </div>
        )
    }
}
