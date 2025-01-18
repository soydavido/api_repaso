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

export class MultiplyRoute extends BaseRoute {
    url = "/api/v1/multiply-route";

    method: Method = "post";

    handle(req: any): Response {

        try {
            Logger.info(req.body)
            if (!req.body || Object.keys(req.body).length === 0) {
                throw new Error("No se proporcionaron datos en el cuerpo de la solicitud");
            }

            let {numero1, numero2} = req.body;
           
            return response({
                resultado: numero1*numero2,
            });
        } catch (error:any) {
            Logger.error(error);
            return response({
                message: error?.message || "Ocurrió un error al procesar la solicitud."
            }, error?.message ? 400 : 500);
            
        }

    } 
}