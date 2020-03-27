CREATE USER 'manager'@'%' IDENTIFIED BY 'developer';
GRANT ALL PRIVILEGES ON *.* TO 'manager'@'%' IDENTIFIED BY 'developer';

DROP USER ‘manager’@‘localhost’;


sudo nano /etc/nginx/sites-available/default

se modifico la vista vlistaprecio se agrego el nombre del Deposito
/////////////////
DELIMITER $$

ALTER ALGORITHM=UNDEFINED DEFINER=`manager`@`%` SQL SECURITY DEFINER VIEW `vlistaprecio` AS (
SELECT
  `listaprecios`.`Codigo`       AS `Codigo`,
  `productos`.`descripcion`     AS `producto`,
  `listaprecios`.`Descripcion`  AS `Descripcion`,
  `listaprecios`.`Precio`       AS `Precio`,
  `listaprecios`.`Porcentaje`   AS `Porcentaje`,
  `listaprecios`.`PrecioCompra` AS `PrecioCompra`,
  `listaprecios`.`Cuotas`       AS `cuotas`,
  `productos`.`CodigoProducto`  AS `CodigoProducto`,
  `productos`.`CodigoBarra`     AS `CodigoBarra`,
  `stock`.`StockActual`         AS `StockActual`,
  `stock`.`codigoDeposito`      AS `codigoDeposito`,
  `productos`.`estado`          AS `Estado`,
  `marcas`.`CodigoMarca`        AS `CodigoMarca`,
  `marcas`.`Descripcion`        AS `Marca`,
   `depositos`.`Nombre`        AS `Deposito`
FROM (((`productos`
     JOIN `marcas`
       ON ((`productos`.`CodigoMarca` = `marcas`.`CodigoMarca`)))
    JOIN `stock`
      ON ((`stock`.`CodigoProducto` = `productos`.`CodigoProducto`)))
   JOIN `listaprecios`
     ON (((`listaprecios`.`codigoDeposito` = `stock`.`codigoDeposito`)
          AND (`listaprecios`.`CodigoProducto` = `stock`.`CodigoProducto`)))
   JOIN `depositos`
    ON (
      `stock`.`codigoDeposito` = `depositos`.`codigoDeposito`
    )))$$

DELIMITER ;

//////////////////
se modifico la vista vproductos cambiando descripcion por producto
/////////
DELIMITER $$

ALTER ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vproductos` AS (
SELECT
  `productos`.`CodigoProducto`   AS `CodigoProducto`,
  `productos`.`CodigoBarra`      AS `CodigoBarra`,
  `productos`.`descripcion`      AS `producto`,
  `productos`.`cantidadpaquete`  AS `CantidadPaquete`,
  `productos`.`peso`             AS `Peso`,
  `productos`.`perecedero`       AS `Perecedero`,
  `productos`.`estado`           AS `Estado`,
  `representante`.`Descripcion`  AS `Representante`,
  `unidadmedida`.`Descripcion`   AS `Media`,
  `marcas`.`Descripcion`         AS `Marca`,
  `categorias`.`descripcion`     AS `Categoria`,
  `tipoimpuesto`.`Descripcion`   AS `Impuesto`,
  `stock`.`StockActual`          AS `StockActual`,
  `stock`.`StockMinimo`          AS `StockMinimo`,
  `stock`.`StockMaximo`          AS `StockMaximo`,
  `stock`.`PrecioCompra`         AS `PrecioCompra`,
  `stock`.`UtilidadMinima`       AS `UtilidadMinima`,
  `stock`.`UtilidadMaxima`       AS `UtilidadMaxima`,
  `stock`.`PrecioVentaMinorista` AS `PrecioVentaMinorista`,
  `stock`.`PrecioVentaMayorista` AS `PrecioVentaMayorista`,
  `stock`.`Estante`              AS `Estante`,
  `stock`.`Fila`                 AS `Fila`,
  `stock`.`Columna`              AS `Columna`,
  `depositos`.`codigoDeposito`   AS `codigoDeposito`,
  `depositos`.`Nombre`           AS `Deposito`
FROM (((((((`stock`
         JOIN `productos`
           ON ((`stock`.`CodigoProducto` = `productos`.`CodigoProducto`)))
        JOIN `depositos`
          ON ((`stock`.`codigoDeposito` = `depositos`.`codigoDeposito`)))
       JOIN `marcas`
         ON ((`productos`.`CodigoMarca` = `marcas`.`CodigoMarca`)))
      JOIN `categorias`
        ON ((`productos`.`CodigoCategoria` = `categorias`.`CodigoCategoria`)))
     JOIN `unidadmedida`
       ON ((`productos`.`CodigoUnidad` = `unidadmedida`.`CodigoUnidad`)))
    JOIN `tipoimpuesto`
      ON ((`productos`.`CodigImpuesto` = `tipoimpuesto`.`CodigImpuesto`)))
   JOIN `representante`
     ON ((`productos`.`CodigoRepresentante` = `representante`.`CodigoRepresentante`))))$$

DELIMITER ;
////////