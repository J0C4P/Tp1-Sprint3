# MiGameList — Tienda

🔗 **Deploy Netlify:** https://tp1-sprint3.netlify.app/

## Qué es
Mi catálogo de videojuegos del Sprint 2 se convirtió en tienda: agregás productos al carrito, ajustás cantidades, pasás por un checkout con validaciones y confirmás el pedido. El carrito y el modo oscuro persisten entre recargas (F5).

## Cómo correrlo
```bash
pnpm install && pnpm run dev
```

## Mis contextos

**`CarritoContext`** — guarda el carrito completo (`carrito`, `total`, `cantidadTotal`) y las acciones sobre él (`agregarCarrito`, `cambiarCantidad`, `quitarCarrito`, `vaciarCarrito`). Lo consumen `MyList` (el contador del navbar), `ProductoCard` (agregar productos), `CarritoModal`/`CarritoItem` (listar, editar cantidades, vaciar) y `Checkout` (el resumen del pedido y vaciar al confirmar). Es global porque esas cuatro ramas del árbol están lejos entre sí — sin Context, el carrito tendría que viajar por props a través de componentes (`Navbar`, `ProductoList`) que no lo usan, solo para llegar a quien sí lo necesita.

**`ThemeContext`** — guarda `modoOscuro` (persistido con `useLocalStorage`) y `toggleModo`. Hoy lo consume solo `ThemeToggle`, pero conceptualmente es una preferencia de **toda la app**, no de una vista puntual — el día que otro componente necesite adaptar algo según el tema, ya está disponible sin tocar nada de lo que hay armado.

## Mis hooks

- **`useLocalStorage(clave, valorInicial)`** — igual que `useState`, pero sincroniza el valor con `localStorage`. Devuelve `[valor, setValor]`. Es la base de `useCarrito` y de `ThemeContext`.
- **`useToggle(valorInicial)`** — alterna un booleano. Devuelve `[valor, toggle]`. Lo uso para abrir/cerrar el modal del carrito.
- **`useCarrito()`** — toda la lógica de dominio del carrito: agregar (respetando el stock), cambiar cantidad sin mutar, quitar, vaciar, y los derivados `total`/`cantidadTotal` con `reduce`. Se llama **una sola vez**, dentro de `CarritoProvider`.

## Decisiones de estado
Lo que **no** metí en un contexto, y por qué:

- **`busqueda`** — `useState` plano en `App.jsx`, compartido por `Navbar` (el input) y la vista `Tienda` (el filtro). No persiste ni le importa a nadie más.
- **`vista`** (qué pantalla se muestra) — también plano en `App.jsx`. Es routing manual, responsabilidad de layout, no un dato de dominio.
- **`panelAbierto`** (si el modal del carrito está abierto) — `useToggle` en `App.jsx`. Es estado de UI efímero: nadie necesita saberlo más que quien abre y cierra el modal.
- **`pedidoConfirmacion`** — `useState` en `App.jsx`, se pasa por prop directo a `Confirmacion`. Es un dato de un solo uso en una sola vista, no justifica un contexto.
- Dentro del formulario de `Checkout`, **ningún campo tiene su propio `useState`** — React Hook Form maneja todo eso internamente con `register`.

## Prop drilling: antes y después
Antes de Context (cuando el carrito viajaba por props desde `App.jsx`), tenía 3 componentes retransmitiendo props que ellos mismos no usaban:
- `ProductoList` recibía `onAgregar` solo para pasárselo a `ProductoCard`.
- `Navbar` recibía `cantidad` solo para pasárselo a `MyList`.
- `CarritoModal` recibía `cambiarCantidad`/`quitar` y los reenviaba a `CarritoItem` sin tocarlos (además de usar `carrito`/`total` para sí mismo).

Después de `CarritoContext`, ese número bajó a **cero** — `ProductoCard`, `MyList` y `CarritoItem` llaman a `useCarritoContext()` directo, y los tres componentes intermedios dejaron de recibir esas props por completo.

## Qué generé con IA
Usé Claude y ChatGPT para consultas durante todo el desarrollo, primero pedía que me explicara el concepto nuevo (Context, `reduce`, React Hook Form, `watch`) antes de escribir nada, y en varios tramos de codigo lo revisava.
Además el estilo visual lo dejé para el final a propósito y que lo revise y aplique la IA, para poder revisar y entender la lógica sin el ruido de las clases.

## Lo que me costó
Nada que comentar.
