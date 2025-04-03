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

export class RandomNumber extends BaseRoute {
    url = "/api/v1/random-number/?";

    method: Method = "get";

    handle(req: any): Response {

        try {
            
            return response({
                message: 'Numero generado exitosamente',
                numero_aleatorio: (Math.random() * 1000).toFixed(0) 
            });
            
        } catch (error:any) {
            Logger.error(error);
            return response({
                message: error?.message || "Ocurrió un error al procesar la solicitud."
            }, error?.message ? 400 : 500);
            
        }

    } 
}