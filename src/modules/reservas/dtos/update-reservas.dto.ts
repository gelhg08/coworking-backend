import { PartialType } from "@nestjs/swagger";
import { CreateReservaDto } from "./create-reservas.dto";


export class UpdateReservaDto extends PartialType(CreateReservaDto){}