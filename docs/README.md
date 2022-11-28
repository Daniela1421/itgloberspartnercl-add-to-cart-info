# Add-To-Cart-Info

Este componente muestra información sobre los productos agregados al carrito de compras a través de un modal.

![image](https://user-images.githubusercontent.com/92064924/204398377-f4aaa8b6-83e0-4680-b655-c95af449278a.png)

## Configuration 

### Paso 1 - Clonar

Realizar la [clonación](https://github.com/Daniela1421/itgloberspartnercl-add-to-cart-info.git) de este repositorio.

### Paso 2 - Editar el Manifest.json 

Ingresar al archivo manifest.json y realizar modificaciones en: `vendor`, `name`, `version`, `title` y `description`
como se muestra en el siguiente ejemplo: 
```
{
  "vendor": "itgloberspartnercl",
  "name": "add-to-cart-info",
  "version": "0.0.1",
  "title": "Add to cart info",
  "description": "Componente que mostrará información a momento de agregar un producto al carrito de compras"
}
```
Además, verifique que el archivo cuente con los siguientes builders: 
```
  "builders": {
    "react": "3.x",
    "messages": "1.x",
    "docs": "0.x",
    "store": "0.x"
  }
```
### Paso 3 - Instalar node-modules

Para realizar esta instalación de node-modules, debe estar ubicado en la carpeta de `react` de la aplicación y ejecutar el comando `yarn`, y tendrá instaladas todas las dependencias necesarias para usar esta plantilla.

### Paso 4 - Ejecutar el preview

Despues de realizar los pasos anteriores puede verificar si su componente está funcionando ejecutando el comando `vtex link` si todo funciona correctamente deberá ver en consola `Sending locale change event`, si por el contrario ocurre un error verifique los pasos anteriores y realice nuevamente este paso. 

### Paso 5 - Implementar el componente

Por último, para utilizar el componente debe agregarlo a las `dependencies` en el `manifest.json` de su tienda de la siguiente manera: vendor.name : version. Por ejemplo: 
```
  "dependencies": {
     "itgloberspartnercl.add-to-cart-info": "0.x"
  }
```

## Dependencies

1. "vtex.checkout-resources": "0.x"
2. "vtex.order-manager": "0.x"
3. "vtex.product-context": "0.x"

## Contributors ✨

Daniela Ducuara Cañas
