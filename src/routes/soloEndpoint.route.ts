import {
    BaseRoute,
    Method,
    response,
    Response
} from "@ant/framework";
import {
    getEnv,
    Lang,
    Logger
} from "@ant/framework";

function buildJsonResponse(obj: string) {
    Logger.error('Error handler');
    let [message, code] = obj.split("||");
    return response({
        message: message
    }, parseInt(code));
}

export class SoloRoute extends BaseRoute {
    url = "/api/v1/solo-endpoint";

    method: Method = "post";

    handle(req: any): Response {

        try {

            /* 
                Validaciones de encabezado
            */

            let headers = req?.headers || null;
            Logger.debug(headers.authorization);
            if ((Object.keys(headers)).filter((key) => key == 'authorization').length == 0)
                throw new Error("No existe encabezado de Authorization en la solicitud.||401");

            if (headers.authorization != 'EDUCA')
                throw new Error("El encabezado Authorization no es valido.||401");

            /* 
                Validaciones de query
            */

            // Validar que el query cedula sea un número, si no, devuelve 400
            const cedula: number = Number(req?.query?.cedula);
            if (isNaN(cedula))
                throw new Error("El parámetro en el query cedula es requerido y debe ser un número.||400");

            if (cedula > 35000000)
                throw new Error("La cedula no puede ser mayor a 35 millones.||451");


            /* 
                Validaciones de body
            */
            let body = req?.body || null;

            //Si no tiene body, devuelve 406
            if (Object.keys(body).length == 0)
                throw new Error("No se proporcionaron datos en el body de la solicitud.||406");

            // Validacion de los elementos del body nombres y apellido
            let requeridos = (Object.keys(body)).filter((key) => key == 'nombre' || key == 'apellido');
            let adicionales = (Object.keys(body)).filter((key) => key != 'nombre' && key != 'apellido');

            //Si no estan los requeridos
            if (requeridos.length != 2)
                throw new Error("Los campos nombre y apellido son requeridos.||400");

            //Si hay elementos adicionales
            if (adicionales.length != 0)
                throw new Error(`Los siguientes parametros son invalidos en el body de la solicitud: [${adicionales}].||413)`);

            //Si la longitud de el nombre o el apellido es mayor a 30
            if (body.nombre.length > 30 || body.apellido.length > 30)
                throw new Error("Los campos nombre y apellido no pueden tener más de 30 caracteres.||413");

            //Si la longitud de el nombre o el apellido es menor o igual a 2
            if (body.nombre.length <= 2 || body.apellido.length <= 2)
                throw new Error("Los campos nombre y apellido no pueden tener dos caracteres o menos.||406");

            //Si el nombre o el apellido tienen números
            if (body.nombre.match(/\d/) || body.apellido.match(/\d/))
                throw new Error("Los campos nombre y apellido no pueden contener números.||422");

        } catch (error: any) {
            return buildJsonResponse(error.message);
        }


        try {

            let { numero1, numero2 } = req.body;

            return response({
                resultado: 'Alo',
            });
        } catch (error: any) {
            Logger.error(error);
            return response({
                message: error?.message || "Ocurrió un error al procesar la solicitud."
            }, error?.message ? 400 : 500);

        }

    }
}