import React from 'react';
 
/** Recuperando as informacoes dentro da funcao, passada pela propriedade */
function TechItem({ tech, onDelete }) {
    return (
        <li>
            {tech}
            <button onClick={onDelete} type="button">Remover</button>
        </li>
    );
}

export default TechItem;