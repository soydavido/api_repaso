import DatabaseProvider from "./providers/database.provider";
import { HomeRoute } from "./routes/home.route";
import { InfoRoute } from "./routes/info.route";
import LogProvider from "./providers/log.provider";
import CacheProvider from "./providers/cache.provider";
import RouterProvider from "./providers/router.provider";
import { TestWorker } from "./workers/test.worker";
import {
    BoostrapInterface,
    RouteContract,
    ServiceProviderContract,
    WorkerContract,
    ConsumerContract
} from "@ant/framework";
import { TaskContract } from "@ant/framework/lib/src/scheduler";
import TasksProvider from "./providers/tasks.provider";
import { TestTask } from "./tasks/test.task";
import KafkaProvider from "./providers/kafka.provider";
import { KafkaTask } from "./tasks/kafka.task";
import { TestConsumer } from "./consumers/test.consumer";
import { EventProvider } from "./providers/event.provider";
import { ListenerContract } from "@ant/framework/lib/src/events";
import { TestListener } from "./listeners/test.listener";
import { GetRoute } from "./routes/get.route";
import { PostRoute } from "./routes/post.route";
export class Boostrap implements BoostrapInterface {
    /**
     * The declared application's service providers.
     */
    public providers: (new(boostrap: BoostrapInterface) => ServiceProviderContract)[] = [
        LogProvider,
        //DatabaseProvider,
        RouterProvider,
        TasksProvider,
    ];

    /**
     * The declared application's routes. 
     */
    public routes:  (new() => RouteContract)[] = [
        HomeRoute,
        InfoRoute,
        GetRoute,
        PostRoute
    ];

    /**
     * The declared application's workers. 
     */
    public workers: (new() => WorkerContract)[] = [

    ];

    /**
     * The declared application's workers. 
     */
    public consumers: (new() => ConsumerContract)[] = [

    ];

    /**
     * The declared application's tasks. 
     */
    public tasks: (new () => TaskContract)[] = [

    ];

    /**
     * The declared application's event listeners. 
     */
    listeners: (new () => ListenerContract)[] = [

    ];
}
