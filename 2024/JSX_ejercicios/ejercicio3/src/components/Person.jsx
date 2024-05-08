function Persona({ name, age }) {
  if (age >= 18) {
    return <p>Hola {name} Bienvenidx, te invitamos a tomer una cervecita</p>;
  } else {
    return (
      <p>
        Hola {name}, lamentablemente no tienes la edad legal para consumir
        alcohol,
      </p>
    );
  }
}
export default Persona;
