import { PartialType } from "@nestjs/swagger";
import { CreateEspacioDeTrabajoDto } from "./create-espacios.dto";


export class UpdateEspacioDeTrabajoDto extends PartialType(CreateEspacioDeTrabajoDto){}