PROYECTO: INNOVVENTAS E-COMMERCE + CHATBOT
Curso: AI-900T00 Conceptos Básicos de IA en Microsoft Azure

CONTENIDO DEL PROYECTO
1. index.html  -> Página de E-commerce completa.
2. styles.css  -> Diseño visual responsive.
3. app.js      -> Funcionalidad de productos, carrito, checkout, métricas y chatbot local.

FUNCIONES INCLUIDAS
- Catálogo de productos tecnológicos.
- Búsqueda por texto.
- Filtro por categoría.
- Ordenamiento por precio y valoración.
- Favoritos.
- Carrito funcional con cantidades.
- Cupón de descuento INNOV10.
- Checkout con formulario y generación de pedido.
- Seguimiento de pedido por código.
- Panel de métricas demo.
- Chatbot local funcional con respuestas para productos, pagos, envíos, garantía, soporte, ofertas y asesor humano.

CÓMO ABRIR LA PÁGINA
1. Descomprime la carpeta.
2. Abre index.html con Google Chrome, Edge o Firefox.
3. Prueba comprar un producto y hablar con el chatbot.

CÓMO CONECTAR TU CHATBOT DE COPILOT STUDIO
1. En Copilot Studio, publica tu agente.
2. Entra a Canales o Channels.
3. Selecciona Sitio web personalizado o Custom website.
4. Copia el código de inserción que te entregue Copilot Studio.
5. Abre index.html en Visual Studio Code.
6. Busca este comentario:
   PEGA AQUÍ EL CÓDIGO DEL CHATBOT DE COPILOT STUDIO
7. Pega el código antes de la línea:
   <script src="app.js"></script>
8. Abre app.js y cambia:
   const USE_LOCAL_CHATBOT = true;
   por:
   const USE_LOCAL_CHATBOT = false;
9. Guarda y abre index.html nuevamente.

QUÉ CAPTURAS TOMAR PARA TU ENTREGA
- Portada de la tienda InnovVentas.
- Catálogo de productos.
- Carrito con productos agregados.
- Formulario de checkout.
- Código de pedido generado.
- Seguimiento de pedido.
- Chatbot respondiendo consultas.
- Panel de métricas demo.
- Si usas Copilot Studio: captura del agente publicado e integrado.

NOTA
Si no puedes publicar Copilot Studio por licencia de estudiante, el chatbot local incluido sirve como demostración funcional del flujo conversacional. Para el informe, indica que se dejó preparada la zona de integración para Copilot Studio y que el bot local simula los temas configurados.
