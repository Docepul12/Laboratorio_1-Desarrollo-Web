import axios from 'axios';

// Crear una instancia de axios con configuración predeterminada
const iAX = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

// Interceptor de solicitud
iAX.interceptors.request.use(
    config => {
        console.log("Interceptor de solicitud activado: Añadiendo autorización...");
        config.headers['Authorization'] = 'Autorizado-claro que SIIIII';
        return config;
    },
    error => {
        console.error("Error en el interceptor de solicitud:", error);
        return Promise.reject(error);
    }
);

// Interceptor de respuesta
iAX.interceptors.response.use(
    response => {
        console.log("Interceptor de respuesta activado:", response);

        // Verifica si el personaje personalizado ya fue agregado para evitar duplicados
        const customCharacterExists = response.data.results.some(character => character.id === 2121);

        if (!customCharacterExists) {
            response.data.results.push({
                "id": 2121,
                "name": "DORA PULIDO",
                "status": "NO SE EL STATUS",
                "species": "HUMAN",
                "type": "NO ES ROBOT",
                "gender": "TAL VEZ",
                "origin": {
                    "name": "TERRICOLA",
                    "url": "http://fullstack.com"
                },
                "location": {
                    "name": "CHIA (CUNDINAMARCA)",
                    "url": "https://chia.com/apisss/ubicaen/333"
                },
                "image": "https://rndm.com/api/char/avatar/21.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episodios/8",
                    "https://rickandmortyapi.com/api/episodios/8888"
                ],
                "url": "https://randm.com/api/char/21",
                "created": "2024-10-15T20:38:53.659Z"
            });
        }

        return response;
    },
    error => {
        console.error("Error en el interceptor de respuesta:", error);
        return Promise.reject(error);
    }
);

export default iAX;
