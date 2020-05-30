import React, { Component } from 'react';

import TechItem from './TechItem';

class TechList extends Component {
    /** O State e imutavel so pode ser mudado usando o setState */
    state = {
        newTech: '',
        techs: []
    };

    /** Executado assim que o componente aparece em tela */
    componentDidMount() {
        const techs = localStorage.getItem('techs');

        if (techs) {
            this.setState({ techs: JSON.parse(techs) });
        }
    }

    /** Executado sempre que houver alterações nas props ou estado */
    componentDidUpdate(_, prevState) {
        // this.props, this.state
        if (prevState.techs !== this.state.techs) {
            localStorage.setItem('techs', JSON.stringify(this.state.techs))
        }
    }

    /** Executado quando o componente deixa de existir */
    componentWillMount() {

    }

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
                    /** Proriedade e tudo que passa para um componente */
                        <TechItem 
                            key={tech} 
                            tech={tech} 
                            onDelete={() => this.handleDelete(tech)} 
                        />
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