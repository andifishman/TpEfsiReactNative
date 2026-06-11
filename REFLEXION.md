Reflexión del tp login


Cómo usamos la ia


Para empezar este tp fuimos a chatgpt para que nos ayude a generar una primera versión de la pantalla del login en react native con ts. Le pedimos que haga un componente con campos de usuario y contraseña, un botón para entrar y una validación simple y tambien credenciales hardcodeadas. lo que nos dió fue funcional, pero estaba hecho de una manera bastante genérica y simple, sin tener en cuenta algunas cosas que nos pedía la consigna.


Después de ver ese primer código que nos dió, volvimos a preguntarle a chatgpt para entender cómo funciona useState con tipos en TypeScript, porque en JavaScript lo habiamos usado antes pero con el tipado fue distinto. También le pedimos que agregue un comando para qué la pantalla se vea bien en dispositivos reales, porque cuando tuvieramos que abrir el teclado en el celular, no ibamos a poder ver lo que estabamos escribiendo porque lo tapaba el teclado y chatgpt nos dijo que usemos KeyboardAvoidingView, y nos dio su comando para ponerlo en el codigo.


Decisiones que tomamos


chatgpt nos dijo de hacer la validación del login con un solo if  usando &&,como: if (usuario === usuarioCorrecto && contrasena === passwordCorrecta). pero decidimos no usar eso y separamos la verificación en dos if anidados, primero comprobamos el usuario y adentro me fijo si la contraseña es la misma. nos pareció más fácil seguirlo cuando lo estabamos probando y entender en donde estaba el error en cada caso.


También cambiamos la forma en que mostramos el mensaje de resultado. La ia nos dió un string para mostrar el mensaje, pero lo  reemplazamos con un objeto con dos campos (texto y tipo) para poder ver si el login andaba bien o fallaba, usando verde para bien y rojo para mal. Esa idea no nos la dió la ia, lo decidimos nosotros viendo cómo andaba la pantalla cuando ejecutabamos.


Además agregamos el botón para limpiar el formulario que chatpgt no nos lo daba y nos parecía bien tenerlo para ahorrar borrar letra por letra si querias borrar todo, además para probar era incomodo borrar letra por letra.


lo que aprendimos:


Aprendimos a usar useState con ts, además de cómo tipar el estado con genéricos como useState<string> y a definir tipos propios con type para estructuras más dificiles. También entendimos mejor cómo conectar los TextInput a los estados con la propiedad onChangeText.


tambipen aprendimos que la ia es sirve mucho  para empezar rápido, pero que el código que nos da hay que revisarlo y adaptarlo a lo que pide la consigna, porque es muy dificil que la haga tal cual nos lo pide. En este caso tuvimos que modificar bastante la lógica para que se ajuste a lo que nos pedia la consigna y a lo que queriamos que muestre. Si lo que hgaciamos era copiar y pegar todp sin entenderlo ni cambiarlo, no ibamos a poder explicar lo que hace cada parte.



