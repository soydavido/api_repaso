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

export class CurrencyRoute extends BaseRoute {
    url = "/api/v1/currency-route";

    method: Method = "get";

    handle(req: any): Response {

        try {
                
            return response({
                message: `Consulta exitosa`,
                usd: 1,
                ves: 75.07
            });
            
        } catch (error:any) {
            Logger.error(error);
            return response({
                message: error?.message || "Ocurrió un error al procesar la solicitud."
            }, error?.message ? 400 : 500);
            
        }

    } 
}