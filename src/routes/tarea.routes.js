import { Router } from "express";
import { crearTarea, eliminarTarea, obtenerTarea, obtenerTareas } from "../controlles/tarea.controllers";
import validarTarea from "../helpers/validarTarea";

const router = Router();

router.route('/tarea')
    .get(obtenerTareas)
    .post(validarTarea, crearTarea);

router.route('/tarea/:id')
    .get(obtenerTarea)
    .delete(eliminarTarea)

export default router;
