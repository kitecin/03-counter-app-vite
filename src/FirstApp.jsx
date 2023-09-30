import lang from './assets/lang.json'; //importar los strings predefinidos
import PropTypes from 'prop-types';

const getResult = () =>{
  return 4+4;
}

export const FirstApp = ({
  title="Prueba",
  sub=125
}) => {

  return (
    <>
      <h1>{title}</h1>
      <h3>{sub+1}</h3>
      {/* <code>{JSON.stringify(newMessage)} </code> */}
      <p>{lang.paragraph.message}</p>
      <p>{getResult()} </p>
    </>
  )
}


FirstApp.propTypes ={
  title: PropTypes.string.isRequired,
  sub: PropTypes.number,
}

FirstApp.defaultProps ={
  title: "No hay titulo",
  sub: 0
}