import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { CommonModule } from '@angular/common'; // Importa CommonModule si es necesario
import { tarea } from '../../models/tarea';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [CommonModule, FormsModule], // Asegúrate de incluir FormsModule aquí
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'] // Corrige el nombre del archivo CSS
})
export class TareasComponent implements OnInit{
  listTareas: tarea[] = [];
  nombreTarea = '';

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea() {
  
    // Crear un objeto tarea
    const tarea: tarea = {
      nombre: this.nombreTarea,
      estado: false
    }

    // Agregar el objeto tarea
    this.listTareas.push(tarea);

    // Reset form
    this.nombreTarea = '';

  }

  eliminarTarea(index: number): void{
    this.listTareas.splice(index, 1);

  }

  actualizarTarea(tarea: tarea, index: number): void {
    this.listTareas[index].estado = !tarea.estado
  }
}
