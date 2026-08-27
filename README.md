# Geest API

API REST para gestión de tareas con asignación multiusuario, idempotencia y archivado transaccional, construida con **Node.js**, **TypeScript**, **NestJS 11**, **PostgreSQL** y **Prisma 7**.

Permite crear usuarios y tareas, asignar múltiples usuarios a una misma tarea, completar participaciones individuales y archivar automáticamente la tarea cuando todos sus participantes terminan.

**Producción:** [`geest-api-v1-production.up.railway.app`](https://geest-api-v1-production.up.railway.app)

---

## Tabla de contenidos

- [Stack](#stack)
- [Ejecución local](#ejecución-local)
- [Arquitectura y decisiones técnicas](#arquitectura-y-decisiones-técnicas)
- [Idempotencia](#idempotencia)
- [Archivado y notificaciones](#archivado-y-notificaciones)
- [Manejo de errores](#manejo-de-errores)
- [Mejora adicional: paginación](#mejora-adicional-paginación)
- [Supuestos y alcance](#supuestos-y-alcance)
- [Documentación](#documentación)
- [Deploy](#deploy)

---

## Stack

| Capa | Tecnología |
|---|---|
| Runtime | Node.js 22+ |
| Lenguaje | TypeScript |
| Framework | NestJS 11 |
| Base de datos | PostgreSQL 16 |
| ORM | Prisma 7 |
| Infraestructura local | Docker |
| Deploy | Railway |

---

## Ejecución local

### Requisitos

- Node.js 22+
- npm
- Docker

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar variables de entorno

```bash
cp .env.example .env
```

En PowerShell:

```powershell
Copy-Item .env.example .env
```

### 3. Levantar PostgreSQL

```bash
docker compose up -d
```

### 4. Aplicar el esquema versionado

```bash
npx prisma migrate deploy
```

### 5. Iniciar la API

```bash
npm run start:dev
```

La API queda disponible en `http://localhost:3000`.

### 6. Validación

```bash
npm run lint
npm run build
npm test
```

La suite incluye **17 tests automatizados** distribuidos en **7 suites**, cubriendo reglas de tareas y usuarios, idempotencia, formato de errores y reintentos de notificaciones.

---

## Arquitectura y decisiones técnicas

La aplicación sigue una separación estricta de capas:

```
Controller → Service → Repository → Prisma → PostgreSQL
```

PostgreSQL es la fuente de verdad para usuarios, tareas, asignaciones, idempotencia e intentos de notificación. El esquema está versionado mediante migraciones de Prisma.

La relación entre usuarios y tareas es **N:M** a través de la entidad `TaskAssignment`, que almacena de forma independiente `completed` y `completedAt` por cada participación.

El completado y el archivado se ejecutan de forma **transaccional**: cuando todos los participantes de una tarea terminan, esta pasa de `open` a `archived` una única vez, sin condiciones de carrera en escenarios concurrentes.

---

## Idempotencia

Todos los endpoints `POST` requieren el header `Idempotency-Key`.

- La clave, junto con un hash SHA-256 del payload, se persiste en PostgreSQL.
- Esto evita que requests duplicados o concurrentes ejecuten nuevamente una misma operación.

Se decidió exigir la clave como supuesto de diseño porque las operaciones modifican el estado del sistema, y la prevención de duplicados es un requisito crítico del dominio.

---

## Archivado y notificaciones

Al archivar una tarea, la API realiza un `POST` a `NOTIFY_URL`.

- Ante errores `5xx` o ausencia de respuesta, se ejecutan hasta **3 intentos** con esperas crecientes (backoff).
- Cada intento queda registrado en PostgreSQL.

Para desarrollo y demostración se utiliza `https://httpbin.org/post` únicamente como receptor HTTP de prueba.

---

## Manejo de errores

Todos los errores expuestos por la API siguen un formato consistente:

```json
{
  "error": {
    "code": "...",
    "message": "..."
  }
}
```

---

## Mejora adicional: paginación

`GET /users` y `GET /tasks` soportan `page` y `limit`, con un máximo de **100 registros** por consulta. `GET /tasks` conserva además el filtro requerido `status=open|archived`.

La paginación evita listados sin límite conforme crecen usuarios y tareas, reduciendo transferencia de datos, memoria y carga sobre PostgreSQL. Se eligió sobre otras mejoras posibles porque aporta escalabilidad directamente a las colecciones principales, sin modificar las reglas de negocio solicitadas.

---

## Supuestos y alcance

- `Idempotency-Key` es obligatorio en operaciones `POST`.
- Una relación usuario-tarea no puede duplicarse.
- Solo usuarios asignados pueden completar una tarea.
- Una tarea se archiva únicamente cuando todos sus participantes terminan.
- `NOTIFY_URL` representa un sistema externo y configurable.
- No se recortó ninguna funcionalidad obligatoria por restricciones de tiempo.

---

## Documentación

- **Modelo de base de datos, tipos y relaciones:** [`UML.md`](./UML.md)
- **Endpoints, bodies, headers y casos de prueba:** [`POSTMAN.md`](./POSTMAN.md)
- **Colección Postman:** [`postman/`](./postman/)

---

## Deploy

La API y PostgreSQL están desplegados en **Railway**, elegido porque permite desplegar aplicación y base de datos en el mismo proyecto, administrar variables de entorno y mantener una URL pública accesible durante la ventana de evaluación.

**URL pública:** [`geest-api-v1-production.up.railway.app`](https://geest-api-v1-production.up.railway.app)

Durante la instalación, `postinstall` ejecuta:

```bash
prisma generate
```

El proceso de producción aplica las migraciones versionadas antes de iniciar la API:

```bash
prisma migrate deploy && node dist/main
```

El repositorio incluye `docker-compose.yml` para reproducir PostgreSQL 16 localmente y una colección Postman con ejemplos del flujo completo.