insert into usuario(email, password, nombres, apellidos) values ('correovalido2@gmail.com', '$2a$10$aMqbESjKZtuzrsr0hCK/yeifsJofg5iSQG2IzJqaGe1v7eGbJSYa.', 'Alvaro', 'Gonzales');

insert into Categoria(nombre_categoria) values ('Iphone'), ('Ipad'), ('Mac');
insert into categoria_producto(nombre_producto, imagen_1,imagen_2, imagen_3, imagen_4, categoria, descripcion, precio, tamano_pantalla, modelo_chip, camara, sistema_operativo, bateria, conectividad, ram)
       values ('Iphone 12', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-finish-unselect-gallery-1-202207_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1662129048006',
       'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-finish-unselect-gallery-2-202207?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1662129021500', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-finish-unselect-gallery-3-202207_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1662128988137',
       'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-finish-unselect-gallery-4-202207?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1662128967910',
       'Iphone','El iPhone 12 se estrenó con iOS 14 y funciona con el procesador Apple A14 Bionic. Soporta redes 5G​ para mayor velocidad, con la capacidad de cambiar automáticamente a LTE según sea necesario para conservar la vida útil de la batería. La pantalla contiene aproximadamente el doble de píxeles que el iPhone 11 con una relación de contraste de 2,000,000:1 y un rendimiento de caída 4 veces superior al de los modelos anteriores. El sistema de doble cámara orientado hacia atrás incluye una lente ultra ancha y lente gran angular. Las bobinas cambiantes inalámbricas dentro del teléfono incluyen MagSafe para la alineación magnética y la conexión de cargadores y accesorios. El conector Lightning actualizado admite una carga más rápida a través de USB-C. ',
       599.00, 'OLED Retina *2.532 x 1.170 píxeles, *Super Retina XDR, 19.5:9 *460ppp *True-tone', 'Apple A14 Bionic, 5nm NPU Neural Engine de 4ª gen', 'Principal: 12MP, f/1.6, OIS, QuadLED flash *Secundaria gran angular: 12MP, f/2.4 *Vídeo: 4K Dolby Vision, 1080p/240fps, HDR',
        'iOS 14', 'Carga rápida 18W e inalámbrica MagSafe 15W', 'Compatible 5G', '4 GB');
insert into categoria_producto(nombre_producto, imagen_1,imagen_2, imagen_3, imagen_4, categoria, descripcion, precio, tamano_pantalla, modelo_chip, camara, sistema_operativo, bateria, conectividad, ram)
        values ('Iphone 12 Mini', 'https://i5.walmartimages.com/asr/3918418c-63b8-4514-88f6-77c1ed8ef2dc.81dbe823263b12c8999f50ff4f455887.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        'https://i.ebayimg.com/images/g/3h8AAOSwLXhkAPxw/s-l1600.jpg', 'https://i.ebayimg.com/images/g/0t0AAOSwg2VkAP27/s-l1600.jpg',
        'https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12_new-design_10132020_big.jpg.large.jpg',
        'Iphone','El Apple iPhone 12 mini es la variante más pequeña de la serie iPhone 12. Con una pantalla OLED de 5.4 pulgadas, el iPhone 12 mini está potenciado por el chip A14 Bionic, con opciones de 64GB, 128GB o 256GB de almacenamiento interno. La cámara principal es dual, de 12MP + 12MP y la cámara selfie es de 12 megapixels, utilizándose también para el reconocimiento de rostro Face ID. Corriendo iOS 14, el iPhone 12 mini también cuenta con conectividad 5G, resistencia al agua, parlantes stereo, y todos los servicios de Apple.',
        314.10, 'OLED de 5.4 pulgadas (diagonal) sin marco *Resolución de 2340 x 1080 pixeles a 476 ppi *Pantalla HDR', 'Chip A14 Bionic *CPU de 6 núcleos con 2 núcleos de rendimiento y 4 de eficiencia *GPU de 4 núcleos-Neural Engine de 16 núcleos',
        'Sistema de dos cámaras de 12 MP: ultra gran angular y gran angular', 'iOS 14', '2227 mAh', 'Compatible 5G', '4 GB');
insert into categoria_producto(nombre_producto, imagen_1,imagen_2, imagen_3, imagen_4, categoria, descripcion, precio, tamano_pantalla, modelo_chip, camara, sistema_operativo, bateria, conectividad, ram)
        values ('Iphone 13', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6417/6417788_sd.jpg;maxHeight=640;maxWidth=550',
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6417/6417788cv14d.jpg;maxHeight=2000;maxWidth=2000', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6417/6417788cv13d.jpg;maxHeight=2000;maxWidth=2000',
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6417/6417788cv12d.jpg;maxHeight=2000;maxWidth=2000',
        'Iphone','El Apple iPhone 13 representa una actualización menor del iPhone 12. Conservando la pantalla OLED de 6.1 pulgadas, el iPhone 13 cuenta con un procesador Apple A15 Bionic, con opciones de almacenamiento de 128GB. 256GB. o 512GB. La cámara principal del iPhone 13 es dual, con lentes wide y ultrawide de 12MP con IBIS y zoom óptico 2x, y la cámara frontal es de 12MP. El iPhone 13 tiene parlantes stereo, soporta carga rápida tanto por cable como inalámbrica, es resistente al polvo y agua, y soporta redes 5G.',
        699.00, 'Super Retina XDR OLED de 6,1 pulgadas *Resolución FullHD+ (2.532 x 1.170 píxeles) *460 ppp *True-Tone', '*Apple A15 Bionic *GPU cuatro núcleos *Neural Engine',
        '12 MP f/1.6, OIS *Gran angular: 12 MP f/2.4, 120º FOV *Vídeo: 4K Dolby Vision', 'iOS 15', '3.227 mAh *Carga rápida 20W *Carga inalámbrica 7,5W *Carga MagSafe 15W', 'Compatible 5G', '4 GB' );

insert into categoria_producto(nombre_producto, imagen_1,imagen_2, imagen_3, imagen_4, categoria, descripcion, precio, tamano_pantalla, modelo_chip, camara, sistema_operativo, bateria, conectividad, ram)
        values ('Ipad Pro 12.9', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-ipad-pro-12-wifi-spacegray-2021?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1674663706569',
        'https://mrphonerepair.co.uk/wp-content/uploads/2023/02/ipad-pro-12-PRICE-IN-PAKISTAN-300x300.png', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNJ4LA4CZEnvZic7t78gKA51HxSZaTKuHcPQCyQJq2SGAEOf8vRNfxguprHR5b_-WUkwA&usqp=CAU',
        'https://m.media-amazon.com/images/I/71brAk7Sc2L._AC_UF1000,1000_QL80_.jpg',
        'Ipad','iPad Pro. Con un rendimiento extraordinario, conectividad inalámbrica superrápida y la experiencia de Apple Pencil de última generación. Además, potentes características nuevas de productividad y colaboración con iPadOS 16. iPad Pro es el mejor iPad.',
        1099.30, '"Liquid Retina XDR" miniLED de 12,9 pulgadas *Resolución 2.732 x 2.048p *600 nits de brillo con picos de 1.000 nits en contendo de alto rango dinámico *120 Hz de tasa de refresco',
        'Apple M2', 'Principal: 12 Mpx *Gran angular: 12 Mpx *Sensor LiDAR *Flash TrueTone', 'iPadOS 16', '10.758 mAh *Carga rápida de 18 W (cargador incluido)', 'WiFi 6E *Bluetooth 5.0 *5G (en versión GPS+Cellular)', '16 GB');
insert into categoria_producto(nombre_producto, imagen_1,imagen_2, imagen_3, imagen_4, categoria, descripcion, precio, tamano_pantalla, modelo_chip, camara, sistema_operativo, bateria, conectividad, ram)
        values ('iMac 24', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-cto-hero-202104?wid=1254&hei=1132&fmt=jpeg&qlt=90&.v=1617479508000',
        'https://i.blogs.es/805829/apple_new-imac-spring21_hero_04202021_full-bleed-image.jpg.large_2x/1366_2000.jpg', 'https://www.muycomputer.com/wp-content/uploads/2021/04/imac.jpg',
        'https://media.guitarcenter.com/is/image/MMGS7/L86162000000000-00-2000x2000.jpg',
        'Mac','Experimente la potencia y el rendimiento del chip Apple M1 con el iMac Green Apple de 24" . El Apple M1 integra la CPU, GPU, Neural Engine, I/O y más en un solo sistema en un chip (SoC). Aborde sus proyectos con la rápida CPU de 8 núcleos y emprenda aplicaciones y juegos con uso intensivo de gráficos con la GPU de 7 núcleos. Acelere las tareas de aprendizaje automático con el motor neuronal de 16 núcleos. Combinado con RAM y SSD, podrá aprovechar al máximo de macOS y otras aplicaciones de Apple. El iMac no solo es más potente, sino que también cuenta con un rediseño completo. Con un grosor de solo 11,5 mm, el iMac de Apple tiene un perfil lateral llamativo y un diseño compacto.',
        1299.30, 'Retina 4.5K de 24 pulgadas *4.480 x 2.520 píxeles (218 ppp) *500 nits, gama cromática alta, True Tone', 'Chip M1 de Apple (CPU de 8 núcleos) *GPU de 7 núcleos / 8 núcleos (según modelo) *Neural Engine de 16 núcleos',
        'FaceTime HD a 1080p', 'macOS Big Sur', '143 W Toma Gigabit Ethernet', 'Wi-Fi 6, Bluetooth 5.0', '8 GB');

insert into producto(numero_serie, fecha_ingreso, color, cantidad_memoria, categoria_producto)
        values ('lksjfl45654dfs45', '2022-05-05', 'Black', '16 GB', 1);

insert into producto(numero_serie, fecha_ingreso, color, cantidad_memoria, categoria_producto)
        values ('kjfssdf65sdsfg45', '2022-05-05', 'White', '16 GB', 1);
insert into producto(numero_serie, fecha_ingreso, color, cantidad_memoria, categoria_producto)
        values ('lksj543565dfss45', '2022-05-05', 'Black', '32 GB', 1);

insert into producto(numero_serie, fecha_ingreso, color, cantidad_memoria, categoria_producto)
        values ('kjf4545455ssdf45', '2022-05-05', 'White', '32 GB', 1);

insert into producto(numero_serie, fecha_ingreso, color, cantidad_memoria, categoria_producto)
        values ('kjf4545455ssdf45', '2022-05-05', 'Purple', '64 GB', 1);
insert into producto(numero_serie, fecha_ingreso, color, cantidad_memoria, categoria_producto)
        values ('kjf4545455ssdf45', '2022-05-05', 'Red', '64 GB', 1);

insert into producto(numero_serie, fecha_ingreso, color, cantidad_memoria, categoria_producto)
        values ('lksjfl45654dfs45', '2022-05-05', 'Black', '16 GB', 2);

insert into producto(numero_serie, fecha_ingreso, color, cantidad_memoria, categoria_producto)
        values ('kjfssdf65sdsfg45', '2022-05-05', 'White', '16 GB', 2);
insert into producto(numero_serie, fecha_ingreso, color, cantidad_memoria, categoria_producto)
        values ('lksj543565dfss45', '2022-05-05', 'Black', '32 GB', 1);

insert into producto(numero_serie, fecha_ingreso, color, cantidad_memoria, categoria_producto)
        values ('kjf4545455ssdf45', '2022-05-05', 'White', '32 GB', 2);

insert into producto(numero_serie, fecha_ingreso, color, cantidad_memoria, categoria_producto)
        values ('kjf4545455ssdf45', '2022-05-05', 'Purple', '64 GB', 2);
insert into producto(numero_serie, fecha_ingreso, color, cantidad_memoria, categoria_producto)
                values ('kjf4545455ssdf45', '2022-05-05', 'Red', '64 GB', 2);