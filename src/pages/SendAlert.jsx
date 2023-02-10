import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openLocalEvent } from '../state/slices/viewsSlice'

const SendAlert = () => {
    const [newAlert, setNewAlert] = useState({
        ceco: 0,
        type_id: 0,
        estado: 0,
        descripcion: '',
        personalLesionado: 0,
        intentoRobo: 0,
        robo: 0,
        detenidos: 0,
        danos: 0,
        estadoLocal_id: 0
    })
    const [count, setCount] = useState(0)
    const local = useSelector((state) => state.views.local.data[0])
    const dispatch = useDispatch()

    const handleChange = e => {
        setNewAlert({
            ...newAlert,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        //console.log('Credentials:', credentials)
        dispatch(openLocalEvent({
            ceco: parseInt(local.ceco),
            type_id: parseInt(newAlert.tipeAlert),
            estado: 1,
            descripcion: newAlert.descripcion,
            personalLesionado: parseInt(newAlert.personalLesionado),
            intentoRobo: parseInt(newAlert.intentoRobo),
            robo: parseInt(newAlert.robo),
            detenidos: parseInt(newAlert.detenidos),
            danos: parseInt(newAlert.danos),
            estadoLocal_id: parseInt(newAlert.estadoLocal_id)
        }))
        console.log('Nueva alerta', newAlert)
    }

    const handleCount = (e) => {
        if (e <= 500) {
            setCount(e)
        }
    }
    return (
        <div className="flex flex-col gap-2 h-screen w-screen p-8">
            <p className='py-4'>
                Unimarc <b>UNIMARC CURICO I #510</b>
            </p>

            <form onSubmit={handleSubmit}>
                <div className="">
                    <label htmlFor="tipeAlert" className="block text-sm font-medium text-white">Elige un Tipo de alerta</label>
                    <select name="tipeAlert" onChange={handleChange} className="bg-gray-50 border mt-4 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                        <option value=''>Seleccione un tipo!</option>
                        <option value={1}>Amago de incendio</option>
                        <option value={2}>Caida de frio: mural</option>
                        <option value={3}>Caida de frio: central media t°</option>
                        <option value={4}>Caida de frio: central baja t°</option>
                        <option value={5}>Caida por trabajos en altura</option>
                        <option value={6}>Corte de electricidad</option>
                    </select>
                </div>
                <div className="flex items-center my-4">
                    <input onChange={handleChange} name="danos" type="checkbox" value={1} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="danos" className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500">Daños</label>
                </div>
                <div className="flex items-center my-4">
                    <input onChange={handleChange} name="detenidos" type="checkbox" value={1} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="detenidos" className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500">Detenidos</label>
                </div>
                <div className="flex items-center my-4">
                    <input onChange={handleChange} name="robo" type="checkbox" value={1} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="robo" className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500">Robo</label>
                </div>
                <div className="flex items-center my-4">
                    <input onChange={handleChange} name="intentoRobo" type="checkbox" value={1} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="intentoRobo" className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500">Intento de robo</label>
                </div>
                <div className="flex items-center my-4">
                    <input onChange={handleChange} name="personalLesionado" type="checkbox" value={1} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="personalLesionado" className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500">Personal lesionado</label>
                </div>
                <div>
                    <textarea

                        type="text"
                        rows={5}
                        name="descripcion"
                        className="w-full min-h-[80px] text-sm p-4 text-slate-900 bg-gray-100 border-gray-300 rounded ring-offset-gray-800 focus:ring-2"
                        onChange={e => {
                            handleCount(e.target.value.length)
                            handleChange(e)
                        }}
                    />
                    <p>{500 - count}</p>
                </div>
                <br />
                <div className="">
                    <label htmlFor="estadoLocal_id" className="block text-sm font-medium text-white">Elige un estado de local</label>
                    <select name="estadoLocal_id" onChange={handleChange} className="bg-gray-50 border mt-4 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                        <option value=''>Seleccione un tipo!</option>
                        <option value={1}>Abierto</option>
                        <option value={2}>Cerrado</option>
                        <option value={3}>Fuera de servicio</option>
                        <option value={4}>Cerrado permanentemente</option>
                    </select>
                </div>

                <div className='mt-8 flex flex-col gap-y-4'>
                    <button
                        onSubmit={handleSubmit}
                        className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 text-gray-400 bg-slate-700 rounded-xl font-bold text-lg hover:bg-red-900'>Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default SendAlert