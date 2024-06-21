import { PartialType } from "@nestjs/swagger";
import { CreateSalaDto } from "./create-salas-dto";

export class UpdateSalaDto extends PartialType(CreateSalaDto){}