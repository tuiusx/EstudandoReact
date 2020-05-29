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

/** */
TechItem.prototype ={
    tech: PropTypes.string,
};

export default TechItem;