# Geest API — Guía de pruebas con Postman

## Postman

El repositorio incluye una colección y un environment de Postman dentro de:

```text
postman/
├── GEEST-API.postman_collection.json
└── GEEST.postman_environment.json
```

El environment permite alternar entre ejecución local y producción:

```text
GEEST_URL_LOCAL      = http://localhost:3000
GEEST_URL_PRODUCTION = https://geest-api-v1-production.up.railway.app
```

Los endpoints `POST` requieren el header:

```http
Idempotency-Key: <unique-key>
```

La colección contiene ejemplos del flujo completo: creación de usuarios, creación de tareas, asignación, completado, archivado automático, consulta de notificaciones, filtros y paginación.

Para probar idempotencia, se puede repetir una petición `POST` con la misma `Idempotency-Key` y el mismo body. La API devolverá la misma respuesta sin volver a ejecutar la operación.

Esta guía contiene un flujo completo para validar los endpoints principales de Geest API, incluyendo creación de usuarios y tareas, asignaciones, completado, archivado automático, notificaciones, paginación e idempotencia.

## URLs

### Producción

```text
https://geest-api-v1-production.up.railway.app
```

### Local

```text
http://localhost:3000
```

La colección de Postman puede utilizar las variables de environment:

```text
GEEST_URL_LOCAL
GEEST_URL_PRODUCTION
```

Los ejemplos siguientes utilizan `{{GEEST_URL_PRODUCTION}}`. Para ejecutar las pruebas localmente, sustituirla por `{{GEEST_URL_LOCAL}}`.

## Idempotencia

Todos los endpoints `POST` requieren el header:

```http
Idempotency-Key: <unique-key>
```

La misma clave con el mismo body reproduce la respuesta almacenada sin ejecutar nuevamente la operación. La misma clave con un body diferente devuelve `409 Conflict`.

---

## 1. Crear usuario Ana

```http
POST {{GEEST_URL_PRODUCTION}}/users
```

Headers:

```text
Content-Type: application/json
Idempotency-Key: user-ana-001
```

Body:

```json
{
  "name": "Ana",
  "lastName": "García",
  "email": "ana.geest@example.com"
}
```

Guardar el `id` devuelto para utilizarlo como `ANA_ID` en las pruebas posteriores.

---

## 2. Crear usuario Luis

```http
POST {{GEEST_URL_PRODUCTION}}/users
```

Headers:

```text
Content-Type: application/json
Idempotency-Key: user-luis-001
```

Body:

```json
{
  "name": "Luis",
  "lastName": "Martínez",
  "email": "luis.geest@example.com"
}
```

Guardar el `id` devuelto para utilizarlo como `LUIS_ID`.

---

## 3. Listar usuarios

```http
GET {{GEEST_URL_PRODUCTION}}/users
```

Respuesta esperada:

```json
{
  "data": [
    "..."
  ],
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 2,
    "totalPages": 1
  }
}
```

---

## 4. Probar paginación de usuarios

```http
GET {{GEEST_URL_PRODUCTION}}/users?page=1&limit=1
```

Respuesta esperada:

```json
{
  "data": [
    "..."
  ],
  "meta": {
    "page": 1,
    "limit": 1,
    "total": 2,
    "totalPages": 2
  }
}
```

---

## 5. Crear tarea

```http
POST {{GEEST_URL_PRODUCTION}}/tasks
```

Headers:

```text
Content-Type: application/json
Idempotency-Key: task-create-001
```

Body:

```json
{
  "title": "Preparar propuesta técnica",
  "description": "Completar la propuesta técnica para el cliente"
}
```

Guardar el `id` devuelto como `TASK_ID`.

La tarea debe iniciar con:

```json
{
  "status": "open",
  "archivedAt": null
}
```

---

## 6. Consultar tarea

```http
GET {{GEEST_URL_PRODUCTION}}/tasks/<TASK_ID>
```

Antes de asignar usuarios, `assignments` debe estar vacío.

---

## 7. Asignar Ana y Luis

```http
POST {{GEEST_URL_PRODUCTION}}/tasks/<TASK_ID>/assign
```

Headers:

```text
Content-Type: application/json
Idempotency-Key: task-assign-001
```

Body:

```json
{
  "userIds": [
    "<ANA_ID>",
    "<LUIS_ID>"
  ]
}
```

Respuesta esperada:

```json
{
  "message": "Users assigned successfully"
}
```

---

## 8. Probar repetición idempotente de la asignación

Enviar exactamente la misma petición anterior con la misma `Idempotency-Key` y el mismo body.

Respuesta esperada:

```json
{
  "message": "Users assigned successfully"
}
```

La operación no debe crear asignaciones duplicadas.

---

## 9. Consultar tarea con asignaciones

```http
GET {{GEEST_URL_PRODUCTION}}/tasks/<TASK_ID>
```

La respuesta debe incluir las dos asignaciones, inicialmente sin completar:

```json
{
  "status": "open",
  "assignments": [
    {
      "completed": false,
      "user": {
        "name": "Ana"
      }
    },
    {
      "completed": false,
      "user": {
        "name": "Luis"
      }
    }
  ]
}
```

---

## 10. Consultar tareas asignadas a Ana

```http
GET {{GEEST_URL_PRODUCTION}}/users/<ANA_ID>/tasks
```

Respuesta esperada:

```json
[
  {
    "id": "<TASK_ID>",
    "title": "Preparar propuesta técnica",
    "description": "Completar la propuesta técnica para el cliente",
    "status": "open",
    "completed": false,
    "completedAt": null
  }
]
```

---

## 11. Completar participación de Ana

```http
POST {{GEEST_URL_PRODUCTION}}/tasks/<TASK_ID>/complete
```

Headers:

```text
Content-Type: application/json
Idempotency-Key: task-complete-ana-001
```

Body:

```json
{
  "userId": "<ANA_ID>"
}
```

Respuesta esperada:

```json
{
  "message": "Task participation completed successfully"
}
```

La tarea debe continuar en estado `open`, ya que Luis todavía no ha completado su participación.

---

## 12. Verificar estado parcial

```http
GET {{GEEST_URL_PRODUCTION}}/tasks/<TASK_ID>
```

Estado esperado:

```text
Ana  -> completed: true
Luis -> completed: false
Task -> status: open
```

---

## 13. Completar participación de Luis

```http
POST {{GEEST_URL_PRODUCTION}}/tasks/<TASK_ID>/complete
```

Headers:

```text
Content-Type: application/json
Idempotency-Key: task-complete-luis-001
```

Body:

```json
{
  "userId": "<LUIS_ID>"
}
```

Respuesta esperada:

```json
{
  "message": "Task participation completed successfully"
}
```

Al ser el último participante pendiente, la tarea debe archivarse automáticamente y disparar la notificación externa.

---

## 14. Verificar archivado automático

```http
GET {{GEEST_URL_PRODUCTION}}/tasks/<TASK_ID>
```

La respuesta debe incluir:

```json
{
  "status": "archived",
  "archivedAt": "..."
}
```

Ambas asignaciones deben tener:

```text
completed: true
```

---

## 15. Consultar intentos de notificación

```http
GET {{GEEST_URL_PRODUCTION}}/tasks/<TASK_ID>/notifications
```

Para desarrollo y demostración, `NOTIFY_URL` utiliza `https://httpbin.org/post` como receptor HTTP de prueba.

Una notificación exitosa normalmente produce:

```json
[
  {
    "taskId": "<TASK_ID>",
    "attempt": 1,
    "statusCode": 200,
    "createdAt": "..."
  }
]
```

---

## 16. Listar tareas archivadas

```http
GET {{GEEST_URL_PRODUCTION}}/tasks?status=archived
```

La tarea completada debe aparecer en el resultado.

---

## 17. Probar paginación de tareas

```http
GET {{GEEST_URL_PRODUCTION}}/tasks?page=1&limit=2
```

Respuesta esperada:

```json
{
  "data": [
    "..."
  ],
  "meta": {
    "page": 1,
    "limit": 2,
    "total": 1,
    "totalPages": 1
  }
}
```

El filtro y la paginación también pueden combinarse:

```http
GET {{GEEST_URL_PRODUCTION}}/tasks?status=archived&page=1&limit=2
```

---

## 18. Validar límites de paginación

### Página inválida

```http
GET {{GEEST_URL_PRODUCTION}}/tasks?page=0&limit=20
```

Debe responder `400 Bad Request` indicando que `page` no puede ser menor que 1.

### Límite superior inválido

```http
GET {{GEEST_URL_PRODUCTION}}/tasks?page=1&limit=101
```

Debe responder `400 Bad Request` indicando que `limit` no puede ser mayor que 100.

---

## 19. Validar Idempotency-Key obligatorio

Ejecutar:

```http
POST {{GEEST_URL_PRODUCTION}}/tasks
```

sin enviar el header `Idempotency-Key`.

Debe responder `400 Bad Request` con un mensaje equivalente a:

```json
{
  "error": {
    "code": "BAD_REQUEST",
    "message": "Idempotency-Key header is required"
  }
}
```

---

## 20. Validar reutilización incorrecta de Idempotency-Key

Primera petición:

```http
POST {{GEEST_URL_PRODUCTION}}/tasks
```

Header:

```text
Idempotency-Key: conflict-test-001
```

Body:

```json
{
  "title": "Primera tarea"
}
```

Después, reutilizar exactamente la misma clave con un body diferente:

```json
{
  "title": "Otra tarea"
}
```

La segunda petición debe responder `409 Conflict`:

```json
{
  "error": {
    "code": "CONFLICT",
    "message": "Idempotency-Key was already used with a different request body"
  }
}
```

---

## Resultado esperado del flujo completo

Al finalizar las pruebas se habrá validado:

- Creación y listado de usuarios.
- Creación y consulta de tareas.
- Asignación de múltiples usuarios.
- Consulta de tareas asignadas por usuario.
- Finalización independiente de participantes.
- Archivado automático al completar todos los participantes.
- Notificación HTTP y registro de intentos.
- Filtros y paginación.
- Idempotencia de operaciones `POST`.
- Manejo de errores de validación y conflictos de idempotencia.
