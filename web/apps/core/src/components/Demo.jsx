import React from 'react';


export default class Demo extends React.Component{
    static propTypes = {
        who: React.PropTypes.string
    }

    getWho(){
        return this.props.who || 'World'
    }

    render(){
        return (
            <div>
                <p>Hello { this.getWho() }</p>
            </div>
        )
    }
}
