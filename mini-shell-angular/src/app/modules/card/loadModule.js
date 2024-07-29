import { loadModule } from "src/utils/loadModule";
import { CardModule } from "./card.module";

export default function mount() {
   loadModule(CardModule)
}