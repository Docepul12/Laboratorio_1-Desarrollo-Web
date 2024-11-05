import React, { useEffect, useState, useCallback } from 'react';
import { Button, Table, Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setPagAct, setRM } from "../reducers";
import iAX from "../ConfigAXIOS";
import { FcLeft, FcRight } from "react-icons/fc";
import { ImFirst, ImLast } from "react-icons/im";

function RickAndMortyTable() {
    const disp = useDispatch();
    const infRM = useSelector(state => state.holaAPP.infoRM);
    const pagAct = useSelector(state => state.holaAPP.pagAct);
    const [loading, setLoading] = useState(true);

    const numRegXPag = 5;
    const ultReg = pagAct * numRegXPag;
    const priReg = ultReg - numRegXPag;
    const lstRegxPag = infRM.slice(priReg, ultReg);

    const lstBtnPag = [];
    for (let x = 1; x <= Math.ceil(infRM.length / numRegXPag); x++) {
        lstBtnPag.push(
            <Pagination.Item key={x} active={x === pagAct} onClick={() => paginar(x)}>{x}</Pagination.Item>
        );
    }

    // Definir la función getData con useCallback
    const getData = useCallback(async () => {
        setLoading(true);
        try {
            const rta = await iAX.get('/character');
            disp(setRM(rta.data.results));
        } catch (error) {
            console.log("ERROR:" + error.message);
        } finally {
            setLoading(false);
        }
    }, [disp]);

    // Llamar a getData cuando el componente se monte
    useEffect(() => {
        getData();
    }, [getData]);

    // Función para cambiar la página actual
    const paginar = (np) => {
        disp(setPagAct(np));
    }

    return (
        <div>
            {/* Botón para obtener datos de la API */}
            <Button onClick={getData} className="my-3">RandM</Button>

            {/* Mostrar mensaje de carga mientras se obtienen los datos */}
            {loading ? (
                <div className="text-center my-5">
                    <p>Cargando datos...</p>
                </div>
            ) : (
                <>
                    {/* Tabla para mostrar los datos obtenidos de la API */}
                    <Table striped bordered hover variant="warning">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>SPECIES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lstRegxPag.map((p, i) => (
                                <tr key={i}>
                                    <td>{p.id}</td>
                                    <td>{p.name}</td>
                                    <td>{p.species}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    {/* Paginación para navegar entre las páginas de datos */}
                    <Pagination className="justify-content-center">
                        <Pagination.First onClick={() => paginar(1)} disabled={pagAct === 1}>
                            <ImFirst />
                        </Pagination.First>
                        <Pagination.Prev onClick={() => paginar(Math.max(pagAct - 1, 1))} disabled={pagAct === 1}>
                            <FcLeft />
                        </Pagination.Prev>

                        {lstBtnPag}

                        <Pagination.Next onClick={() => paginar(Math.min(pagAct + 1, Math.ceil(infRM.length / numRegXPag)))} disabled={pagAct === Math.ceil(infRM.length / numRegXPag)}>
                            <FcRight />
                        </Pagination.Next>
                        <Pagination.Last onClick={() => paginar(Math.ceil(infRM.length / numRegXPag))} disabled={pagAct === Math.ceil(infRM.length / numRegXPag)}>
                            <ImLast />
                        </Pagination.Last>
                    </Pagination>
                </>
            )}

        </div>
    );
}

export default RickAndMortyTable;

