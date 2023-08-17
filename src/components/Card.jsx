//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card(props) {
  return (
    <div className="Card">
      <h2>Detalle Aeropuerto Ingresado</h2>
      <p>Código: {props.codigo}</p>
      <p>Nombre: {props.nombre}</p>
    </div>
  );
}

export default Card;
