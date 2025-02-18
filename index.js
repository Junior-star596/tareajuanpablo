// Importaciones de funciones desde tasks.js
const { addTask, listTasks, removeTask } = require("./tasks");

// Agregar algunas tareas
addTask("Estudiar Node.js");
addTask("Practicar JavaScript");
addTask("Hacer ejercicio");

// Listar tareas
listTasks();

// Eliminar una tarea
removeTask(1); // Eliminar la tarea con índice 1 (Segunda tarea)

// Listar nuevamente para verificar
listTasks();
