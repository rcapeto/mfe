import { loadModule } from "src/utils/loadModule";
import { AppChildModule } from "./app-child.module";

export default function mount() {
   loadModule(AppChildModule)
}