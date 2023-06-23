import React from 'react'; // Importa a biblioteca React

import '../layout/Loader.css'; // Importa o arquivo CSS de estilização do Loader


const Loader = () => { // Definição do componente Loader como uma função
  return (
    <div className="loader"> {/* Div que envolve o loader */}
      <div className="loader-circle"></div> {/* Div que representa o círculo do loader */}
    </div>
  );
};

export default Loader; // Exporta o componente Loader como padrão para ser utilizado em outros arquivos
