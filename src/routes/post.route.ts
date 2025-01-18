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

export class PostRoute extends BaseRoute {
    url = "/api/v1/post-example/?";

    method: Method = "post";

    handle(req: any): Response {

        try {
            Logger.info(req.body)
            if (!req.body || Object.keys(req.body).length === 0) {
                throw new Error("No se proporcionaron datos en el cuerpo de la solicitud");
            }

            
            let {id,nombre,apellido} = req.body;
           
            return response({
                message: `Felicidades${` ${nombre} ${apellido}` || ''}, esta es una buena solicitud.`,
            });
        } catch (error:any) {
            Logger.error(error);
            return response({
                message: error?.message || "Ocurrió un error al procesar la solicitud."
            }, error?.message ? 400 : 500);
            
        }

    } 
}