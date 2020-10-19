# nerzhul250.github.io

Informe
=======
Lo que se ha realizado:
-----------------------

* Permite registrarse como usuario
* Permite Autenticacion de usuario
* Por cada dependencia, permite ver su nombre, coordinador y el nombre y apellido de sus usuarios en la vista detallada
* Se puede realizar busqueda de usuarios por cualquiera de sus campos
* Se guarda la contraseña en firebase usando md5
* Permite agregar, eliminar y editar usuarios con los siguientes campos: nombre, apellido, email, valido_hasta, dependencia (Se muestran las dependencias existentes), activo (la contraseña por defecto es 123456). 
* Permite agregar, eliminar y editar dependencias con los siguientes campos  nombre, coordinador, máximo número de usuarios, ubicación, activa(boolean). Cuando se requiere eliminar una dependencia, se checkea si no hay ningun usuario asociado a ella
* Se utiliza vuefire para mantener sincronizada las colecciones.

Lo que se puede mejorar:
------------------------

* Se puede mejorar mensajes de alertas y validacion de los campos de formulario.
* Se puede mejorar el aspecto general de la aplicación, el espaciado, fuentes utilizadas.
* Se puede embellecer mas la aplicación.
* Lo anterior se puede lograr haciendo un mayor uso de CSS.

Dificultades encontradas:
-------------------------

* A mitad del desarrollo, se deseaba tener una forma especifica de capturar una promesa rechazada, pero esto provocó un problema de dependencias cuya unica solución fue el de restaurar el proyecto a una version anterior.

Reflexiones:
------------

Desarrollar en vuejs, especialmente con vuetify, me da la sensacion de que no necesito CSS para embellecer mi aplicación, pero digo esto desde la perspectiva de alguien que nunca ha utilizado a fondo CSS, y que los resultados que obtiene con vuetify le satisfacen,
la verdad me gustaria tener una oportunidad para ver que mas podria lograrse con una combinacion de CSS+vuetify bien hecha. En este proyecto no pude explorarla
por cuestiones de tiempo.


