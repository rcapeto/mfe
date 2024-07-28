import { loadModule } from "src/utils/loadModule";
import { AppModule } from "./app.module";

function mount() {
   loadModule(AppModule)
}

export default mount