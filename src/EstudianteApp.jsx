import { useState } from "react"
import { FormularioEstudiante } from "./componentes/FormularioEstudiante";
import { TablaEstudiante } from "./componentes/TablaEstudiante";



//<ListaEstudiantes lista={estudiantes}/>

export const EstudiantesApp = () => {

    const [datos, setDatos] = useState(null);

    const [estudiantes, setEstudiantes] = useState([]);
    console.log(estudiantes);

    const agregarEstudiante = (estudiante) => {
        setEstudiantes([...estudiantes, estudiante])
    }


    const eliminarEstudiante = (index) => {
        setEstudiantes(estudiantes.filter((_, i) => i !== index));  //el segundo parametro indica la posicion y la filtra de la lista
    }

    const extraeDatos = (index) => {
        const estudiante = estudiantes.find((_, i) => i === index);
        setDatos(estudiante);
      };
    // const editarEstudiante = (index, estudianteEditado) =>{
    //     setEstudiantes(estudiantes.map((estudiante, i) => {
    //             if(i === index){
    //                  return estudianteEditado;
    //             }else{
    //                 return estudiante
    //             }
    //         }));
          
    // }
    return (
        <>
            <FormularioEstudiante agregar={(estu) => { agregarEstudiante(estu) }} datos={datos} />
            <TablaEstudiante eliminar={(index) => eliminarEstudiante(index)} listaEstudiantes={estudiantes} extrae={extraeDatos} />
        </>
    )
}

// editar={(index, estudianteEditado)=> editarEstudiante(index, estudianteEditado)}
