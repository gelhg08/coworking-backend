import { PartialType } from "@nestjs/swagger";
import { CreateSesionDto } from "./create-sesiones.dto";


export class UpdateSesionDto extends PartialType(CreateSesionDto){}