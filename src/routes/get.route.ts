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

export class GetRoute extends BaseRoute {
    url = "/api/v1/get-example/?";

    method: Method = "get";

    handle(req: any): Response {

        try {
            Logger.info(req.url);
            
            const parametro_id = req?.query?.id;
            if(parametro_id < 0)
                throw new Error("El parámetro id no puede ser menor a 0.");

            const name = req?.query?.name;
            
            return response({
                message: `Felicidades${' '+name || ''}, esta es una buena solicitud.`,
                parametro_id: parametro_id || "No se proporcionó ningún parámetro opcional."
            });
        } catch (error:any) {
            Logger.error(error);
            return response({
                message: error?.message || "Ocurrió un error al procesar la solicitud."
            }, error?.message ? 400 : 500);
            
        }

    } 
}