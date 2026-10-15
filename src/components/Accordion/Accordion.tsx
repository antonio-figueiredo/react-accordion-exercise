import './Accordion.css'
import { useState } from 'react';

const perguntasRespostas = [
  { id: 0, 
    pergunta: "O que é um Dachshund ?", 
    resposta: "De acordo com a Wikipedia: Dachshund ou teckel[Nota] (em alemão: Dackel), também apelidado de cão-salsicha, é uma raça de cães oriunda da Alemanha. Esta raça está inserida em grupo próprio da FCI devido a sua grande variedade de tamanho e pelagem: standard, miniatura e kaninchen, e de pelo: longo, liso e duro. Esse cão é descrito como caçador de toca, com olfato bastante apurado que permite seguir pistas facilmente e que o torna eficaz em ataques surpresas a presas pequenas. É dito ainda um bom sabujo, capaz de perseguir animais maiores, já que, apesar das pernas curtas, é leve."},
  { id: 1, 
    pergunta: "O Dachshund é um bom companheiro para crianças?", 
    resposta: "De acordo com o site Recanto Dachshund:  Os Dachshund possui bom relacionamento com as crianças e adultos, adaptam-se muito bem no ambiente familiar. Naturalmente amigável, o cachorro dessa raça tende a criar laços com uma pessoa da família. Por isso, é importante incentivar a socialização desde cedo. No entanto, com pessoas desconhecidas é um cachorro reservado."},
  { id: 2,
    pergunta: "O Dachshund é um bom cachorro para quem mora em apartamento?", 
    resposta: "De acordo com o site Pet Love: Se adapta bem ao apartamento, mas um cuidado prático é importante: escadas frequentes no dia a dia aumentam o risco de problemas de coluna, já que a estrutura alongada com patas curtas predispõe a essa condição. Brinquedos interativos e enriquecimento ambiental ajudam a canalizar a energia do Dachshund sem precisar de muito espaço. Ativo e divertido, é uma boa pedida para tutores que curtem um pet com temperamento marcante." },
   { id: 3,
    pergunta: "O Dachshund se dá bem com outras raças de cachorro ?", 
    resposta: "De acordo com o site Pet Love: O dachshund se dá bem com outros animais – especialmente cachorros da mesma raça. Em todo caso, as chances de ele querer ser o cão dominante são altas, bem como de apresentar comportamento possessivo com seus brinquedos." }
];

interface AccordionProps {
  id: number;
}

export function Accordion({ id }: AccordionProps) {
  
  const [status, changeStatus] = useState(0);

    function handleClick () {
        changeStatus(prevStatus => prevStatus === 0 ? 1 : 0);
    }
 
  return (
    <>
    <div className="container-question">
     <p className="my-plus-sign" onClick={handleClick} style={{ color: '#ADD8E6' }}>+</p>
      {  <h1 className="my-question">{perguntasRespostas[id].pergunta}</h1>}
     </div>
     {status === 1 && (
        <p className="my-answer">
          {perguntasRespostas[id].resposta}
        </p>
      )}
    </>
  );
}