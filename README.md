# Immersphere Pro · CRM Comercial

CRM standalone para captar, seguir y convertir clientes potenciales para Immersphere Pro / Rubik SOTA.

**Stack:** HTML + CSS + JS puro · localStorage · GitHub Pages · sin backend.

---

## Estado de Fases

### ✅ Fase 1 — App standalone (100%)
- App HTML standalone sin dependencias externas
- Leads demo pre-cargados (inmobiliarias Torrevieja / Orihuela Costa)
- localStorage persistente
- Reset demo disponible

### ✅ Fase 2 — CRM operativo (100%)
- Base de leads completa con scoring 360°
- Filtros por prioridad, temperatura, estado y búsqueda
- Pipeline Kanban por estados
- Journey del cliente por fases
- Top 10 por score
- Dashboard comercial con KPIs
- Ficha de lead completa (contacto, inteligencia, propuesta, scoring)
- Notas y próxima acción por lead
- Historial de actividad por lead
- Generador de oferta por lead
- Plantillas WhatsApp / email en el lead
- Crear y editar leads personalizados
- Export / import JSON y CSV
- **✅ Duplicar lead** — genera copia "Sin contactar" con datos comerciales preservados

### ✅ Fase 3 — Motor comercial (100%)

#### 3.1 — Objeciones añadidas
Biblioteca con 11 objeciones, incluyendo las 3 nuevas del briefing:
- **"Ya tenemos vídeos"** — diferenciación de experiencia interactiva vs. vídeo pasivo
- **"No queremos cambiar nada"** — enfoque de piloto reversible sin alterar el sistema
- **"No vendo suficiente premium"** — reposicionamiento para gama media

#### 3.2 — Seguimiento automático por estado
Alertas comerciales automáticas visibles en el Dashboard:
- Leads "Sin contactar" sin acción programada
- Leads "Sin contactar" con fecha de estado antigua
- Leads "Contactado" sin follow-up programado
- Leads "Contactado" sin respuesta en más de 3 días
- Leads "Contactado" sin próxima acción en más de 5 días
- Leads en "Propuesta" sin seguimiento programado
- Leads en "Propuesta" con más de 7 días sin actividad
- Leads calientes/muy calientes sin próxima acción
- Leads con objeción asignada pero sin cierre asignado

#### 3.3 — Biblioteca de objeciones y cierres conectada al lead activo
En la ficha de cada lead, sección "Biblioteca de Objeciones y Cierres":
- Seleccionar objeción de la biblioteca (11 disponibles)
- Seleccionar cierre de la biblioteca (10 disponibles)
- Vista previa de respuesta y cierre recomendado
- Copiar respuesta / cierre al portapapeles
- Generar WhatsApp con la objeción seleccionada
- Generar email con la objeción seleccionada
- Asignar objeción al lead (se guarda en historial)
- Asignar cierre al lead (se guarda en historial)
- Crea próxima acción automáticamente al asignar

**Biblioteca de cierres (10):**
Cierre piloto · Cierre por propiedad concreta · Cierre por urgencia · Cierre por diferenciación · Cierre por prueba limitada · Cierre por reactivación · Cierre por referido · Cierre ahorro de tiempo · Cierre premium accesible · Cierre continuidad mensual

---

### ✅ Fase 4 — CRM v1.4 · Calculadora Visual de Presupuestos (100%)

**Catálogo de servicios (~35 servicios):**
- Immersphere Pro SaaS: Starter, Professional, Enterprise, Setup, White label
- Inmobiliarias: Tour 360, Landing, QR, Ficha premium, Pack mensual, Reactivación
- Vídeo: Vertical RRSS, Horizontal, Reel, Tour, Pack mensual
- Web / landing: Landing corporativa, Web básica, Web premium, Mantenimiento
- Marketing digital: Copy, Google Business, Reporte, SEO, Contenidos
- Campañas: Setup Meta, Gestión Meta, Creatividades, Campaña propiedad
- Branding: Naming, Kit visual, Presentación, Mensaje comercial
- Personalizado: Consultoría, Producción a medida, Pack custom

**Packs comerciales (7):**
Pack Demo Inmobiliaria · Pack Propiedad Premium 360 · Pack Inmobiliaria Mensual · Pack SaaS · Pack Video+Landing+Tour · Pack Reactivación · Pack Proyecto Personalizado

**Quote Builder por lead:**
- Acceso desde botón "Crear presupuesto visual" en la ficha del lead
- Selector de línea de negocio (9 líneas)
- Selector de pack → carga servicios automáticamente
- Añadir servicios individualmente del catálogo
- Editar cantidad, precio unitario y coste interno por línea
- Marcar líneas como bonus o como opcional
- Cálculo en tiempo real: subtotal, descuento (% o €), base imponible, IVA, total

**Cálculos implementados:**
- Subtotal → Descuento → Base imponible → IVA → Total
- Coste interno total → Margen bruto → Margen %
- Probabilidad de cierre → Pipeline ponderado
- Alertas: margen bajo, descuento alto, sin caducidad, presupuesto vacío
- Sin NaN: divisiones por cero controladas

**Estados de presupuesto:** Borrador · Enviado · Visto · En seguimiento · Aceptado · Rechazado

**Acciones:** Guardar · Editar · Duplicar · Eliminar · Cambiar estado · Generar WA/email · Guardar en historial

**Mensajes generados:** WhatsApp comercial · Email con asunto y cuerpo · Guion llamada 30s · Respuesta a objeción — todos personalizados con empresa, responsable, pack, precio, caducidad y forma de pago. Sin placeholders vacíos.

**Dashboard:** 6 nuevos KPIs de presupuestos (total, enviados, aceptados, valor, pipeline ponderado, vencidos)

**Document Hub:** Lista de presupuestos guardados por lead con edición, duplicado, cambio de estado, WA directo y email directo

**Export/Import:** JSON v1.4 incluye presupuestos · CSV incluye 4 columnas nuevas de último presupuesto

---

## Pendiente

### ✅ v1.5 — Propuestas Comerciales (100%)

**Crear propuesta desde presupuesto:**
- Botón "📋 Propuesta" en cada presupuesto guardado del Document Hub
- Pre-rellena automáticamente empresa, responsable, servicios, importes, caducidad, forma de pago y bonus
- Selecciona la plantilla adecuada según la línea de negocio del presupuesto
- Datos internos (coste, margen, pipeline) nunca se transfieren a la propuesta

**5 plantillas de propuesta:**
Propuesta Inmobiliaria Demo · Propuesta Propiedad Premium 360 · Propuesta Inmobiliaria Mensual · Propuesta Immersphere SaaS · Propuesta Proyecto Personalizado

**Editor de propuesta (overlay con 3 tabs):**
- Tab Editar: título, resumen ejecutivo, diagnóstico, solución, servicios+precio, entregables, bonus, condiciones, caducidad, forma de pago, próximos pasos, nota final
- Tab Vista previa: documento comercial visual con cabecera Rubik SOTA, secciones, tabla de servicios, CTA y pie
- Tab Mensajes: WhatsApp corto, email completo con asunto, listos para enviar

**Imprimir / Guardar PDF desde navegador:**
- Sin dependencias externas — usa `window.print()` + `@media print`
- Imprime solo el documento de propuesta, oculta toda la UI de la app
- Layout A4 aproximado con tipografía limpia y colores corporativos

**WhatsApp/email:** `wa.me` + `encodeURIComponent` · `mailto` + `encodeURIComponent` · sin placeholders visibles

**Propuestas en Document Hub (por lead):**
- Lista con fecha, título, estado (badge), importe total, caducidad
- Acciones: Editar · Imprimir PDF · Duplicar · Cambiar estado · WA · Email · Eliminar

**Estados:** Borrador · Preparada · Enviada · Vista · En seguimiento · Aceptada · Rechazada · Caducada

**Seguimiento:** Historial de actividad · Próxima acción automática · Paso a "Propuesta"/"Cerrado" al cambiar estado

**Dashboard:** 4 KPIs de propuestas (total, enviadas, aceptadas, caducadas)

**Export/Import:** JSON v1.5 incluye propuestas · CSV añade 5 columnas de última propuesta

**Alerta automática:** Propuesta caducada con estado "enviada" aparece en alertas comerciales del dashboard

---

### 🔜 v1.6 — Propuestas comerciales avanzadas / PDF externo
### 🔜 v1.6 — Document Hub administrativo (contratos simples, facturas, carpetas cliente)
### 🔜 v1.7 — Integraciones externas (Holded, Stripe, Drive, firma digital)
### 🔜 v2.0 — SaaS real con backend, auth y base de datos

### (Roadmap previo) Dashboard de ventas — ampliaciones pendientes
- Tasa de avance por fase
- Tasa de respuesta y conversión
- Forecast mensual/trimestral
- Mejor canal por resultados
- Tiempo medio hasta primera respuesta
- Objeción más frecuente detectada
- Vista "Hoy / Esta semana" como tab dedicado

### ⏳ Fase 5 — Fidelización (0%)
### ⏳ Fase 6 — Integración SaaS (0%)

---

## Archivos principales

| Archivo | Descripción |
|---|---|
| `crm.html` | App CRM completa (standalone) |
| `index.html` | Landing Immersphere Pro |
| `servicios.html` | Página de servicios |

## Uso en GitHub Pages

La app CRM está disponible en: `https://juanmaes83.github.io/immersphere-pro-crm-leads/crm.html`
