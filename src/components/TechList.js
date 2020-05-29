import React, { Component } from 'react';

class TechList extends Component {
    /** O State e imutavel so pode ser mudado usando o setState */
    state = {
        newTech: '',
        techs: [
            'Node.js',
            'ReactJS',
            'React Native'
        ]
    };

    handleInputChange = e => {
        this.setState({ newTech: e.target.value });
    }
    /** Adicionando itens a lista */
    handleSubmit = e => {
        e.preventDefault();
    
        this.setState({ techs: [... this.state.techs, this.state.newTech], 
            newTech: ''
        })
    }
    /** Removendo itens da lista */
    handleDelete = (tech) => {
        this.setState({ techs: this.state.techs.filter(t => t !== tech) })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <ul>
                    {this.state.techs.map(tech => (
                        <li key={tech}>
                            {tech}
                            <button onClick={() => this.handleDelete(tech)} type="button">Remover</button>
                        </li>
                    ))}
                </ul>
                <input 
                    type="text" 
                    onChange={this.handleInputChange} 
                    value={this.state.newTech} 
                />
                <button type="submit">Enviar</button>
            </form>
        );
    }
}

export default TechList;