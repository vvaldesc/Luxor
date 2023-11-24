    // Precargar las imágenes al cargar la página

    //Lo primero que hace el script es crear el fragmento
    let fechaIni = new Date();

    const fragmento = document.createDocumentFragment();

    window.addEventListener('load', function () {

        preloadImage('../assets/img/figura-decorativa-en-mdf-adara.webp', 'preload-image-1');
        preloadImage('../assets/img/figura-decorativa-en-mdf-adara (1).webp', 'preload-image-2');
        preloadImage('../assets/img/figura-decorativa-en-mdf-adara (2).webp', 'preload-image-3');

        preloadImage('../assets/img/decoracion-de-pared-josep.webp', 'preload-image-4');
        preloadImage('../assets/img/decoracion-de-pared-josep\ \(1\).webp', 'preload-image-5');
        preloadImage('../assets/img/decoracion-de-pared-josep\ \(2\).webp', 'preload-image-6');

        preloadImage('../assets/img/figura-decorativa-en-mdf-adara.webp', 'preload-image-1');
        preloadImage('../assets/img/figura-decorativa-en-mdf-adara (1).webp', 'preload-image-2');
        preloadImage('../assets/img/figura-decorativa-en-mdf-adara (2).webp', 'preload-image-3');

        preloadImage('../assets/img/decoracion-de-pared-josep.webp', 'preload-image-4');
        preloadImage('../assets/img/decoracion-de-pared-josep\ \(1\).webp', 'preload-image-5');
        preloadImage('../assets/img/decoracion-de-pared-josep\ \(2\).webp', 'preload-image-6');

        console.log("milisegundos para precargar las imágenes: ");
        console.log(new Date() - fechaIni)
      });
  
      function preloadImage(url, id) {
        let div_preCarga = document.createElement("div");
        div_preCarga.id=id.toString();
        div_preCarga.style.display="none";
        var img = new Image();
        img.src = url;
        img.onload = function () {
            div_preCarga.appendChild(img);
          fragmento.append(div_preCarga);
        };
      }

document.getElementById("section--catalogo").append(fragmento);
