import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './components/Header';
import Formulario from './components/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/FacuuR001.png",
      nombre: "Facundo Rullo",
      puesto: "Instructor",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Data Science",
      foto: "https://github.com/FacuuR001.png",
      nombre: "Facundo Rullo",
      puesto: "Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "DevOps",
      foto: "https://github.com/FacuuR001.png",
      nombre: "Facundo Rullo",
      puesto: "Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/FacuuR001.png",
      nombre: "Facundo Rullo",
      puesto: "Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Ux & UI Desing",
      foto: "https://github.com/FacuuR001.png",
      nombre: "Facundo Rullo",
      puesto: "Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Mobile Apps",
      foto: "https://github.com/FacuuR001.png",
      nombre: "Facundo Rullo",
      puesto: "Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión de Proyectos",
      foto: "https://github.com/FacuuR001.png",
      nombre: "Facundo Rullo",
      puesto: "Instructor"
    },
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/FacuuR001.png",
      nombre: "Facundo Rullo",
      puesto: "Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Data Science",
      foto: "https://github.com/FacuuR001.png",
      nombre: "Facundo Rullo",
      puesto: "Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "DevOps",
      foto: "https://github.com/FacuuR001.png",
      nombre: "Facundo Rullo",
      puesto: "Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/FacuuR001.png",
      nombre: "Facundo Rullo",
      puesto: "Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Ux & UI Desing",
      foto: "https://github.com/FacuuR001.png",
      nombre: "Facundo Rullo",
      puesto: "Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Mobile Apps",
      foto: "https://github.com/FacuuR001.png",
      nombre: "Facundo Rullo",
      puesto: "Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión de Proyectos",
      foto: "https://github.com/FacuuR001.png",
      nombre: "Facundo Rullo",
      puesto: "Instructor",
      fav: false
    },
  ]);
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX & UI Design",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Mobile Apps",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión de Proyectos",
      colorPrimario: "#DD8A29",
      colorSecundario: "#FFEEDF"
    }
  ]);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  } 

  //Registrar Colaborador
  const registrarColaborador = (colaborador) => {
    //Spread operator
    actualizarColaboradores([...colaboradores, {...colaborador, id: uuid()}])
  }

  //Eliminar Colaborador
  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores);
  }

  //Actualizar Color de Equipo
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }

      return equipo;
    });

    actualizarEquipos(equiposActualizados);
  }


  //Crear Equipo
  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }
  
  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }

      return colaborador
    });

    actualizarColaboradores(colaboradoresActualizados);
  }

  return (
    <div>
      <Header/>
      {/* { mostrarFormulario ? <Formulario/> : <></>} //otra forma de aplicar los estados */}
      { 
        mostrarFormulario && <Formulario 
          equipos={equipos.map(equipo => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        /> 
      }
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      { equipos.map( equipo => <Equipo 
          key={equipo.titulo} 
          datos={equipo} 
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
          />
        ) 
      }
      <Footer/>
    </div>
  );
}

export default App;
