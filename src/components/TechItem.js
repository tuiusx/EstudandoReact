import React from 'react';
import PropTypes from 'prop-types';
 
/** Recuperando as informacoes dentro da funcao, passada pela propriedade */
function TechItem({ tech, onDelete }) {
    return (
        <li>
            {tech}
            <button onClick={onDelete} type="button">Remover</button>
        </li>
    );
}

/** Se o usuario nao passar a propriedade ela vem como Oculto  */
TechItem.defaultProps = {
    tech: 'Oculto'
};

/** Verificar se as propriedades estao corretas sendo passada */
TechItem.prototype ={
    tech: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
};

export default TechItem;