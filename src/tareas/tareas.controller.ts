import { Controller, Post, Body, Get, Delete,Put, Param } from '@nestjs/common';
import { ITareaDTO } from 'src/dto/tarea.dto';
import { TareasService } from './tareas.service';


@Controller('api/v1/tareas')
export class TareasController {
    constructor(private readonly TareasServicio:TareasService){}
    //Insertar
    @Post()
    Insertar (@Body() nombre:ITareaDTO){
    return this.TareasServicio.Insertar(nombre)
    }

        @Get()
        Todos(){
            return this.TareasServicio.Todos()

        }

        @Get(':id')
        Uno(@Param('id') id: string){
        return this .TareasServicio.Uno(id)
    }


    @Put(':id')
    Actualizar(@Param('id') id:string, @Body() cuerpo:ITareaDTO) {
        return this.TareasServicio.Actualizar(id, cuerpo )


    }

    @Delete(':id')
    Eliminar(@Param('id') id:string){
        return this.TareasServicio.Eliminar(id)
    }



}




/**
 * Get -> Obtener - Select where
 *Post -> Insertar
 * Put Pacht ->Actualizar
 * Delete -> Eliminar
 */