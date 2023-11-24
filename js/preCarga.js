    // Precargar las imágenes al cargar la página

    //Lo primero que hace el script es crear el fragmento
    let fechaIni = new Date();

    const fragmento = document.createDocumentFragment();

    window.addEventListener('load', function () {

        let i=0;

        preloadImage('../assets/img/sillon-en-chenilla-nicxon\ \(1\).webp', 'preload-image--'+i++);
        preloadImage('../assets/img/sillon-en-chenilla-nicxon\ \(2\).webp', 'preload-image--'+i++);
        preloadImage('../assets/img/sillon-en-chenilla-nicxon\ \(3\).webp', 'preload-image--'+i++);
        preloadImage('../assets/img/sillon-en-chenilla-nicxon\ \(4\).webp', 'preload-image--'+i++);


        preloadImage('../assets/img/lampara-de-pie-en-ceramica-warwick.webp', 'preload-image--'+i++);
        preloadImage('../assets/img/lampara-de-pie-en-ceramica-warwick\ \(1\).webp', 'preload-image--'+i++);
        preloadImage('../assets/img/lampara-de-pie-en-ceramica-warwick\ \(2\).webp', 'preload-image--'+i++);
        preloadImage('../assets/img/lampara-de-pie-en-ceramica-warwick\ \(3\).webp', 'preload-image--'+i++);


        preloadImage('../assets/img/sillon-colgante-en-ratan-taveira.webp', 'preload-image--'+i++);
        preloadImage('../assets/img/sillon-colgante-en-ratan-taveira\ \(1\).webp', 'preload-image--'+i++);
        preloadImage('../assets/img/sillon-colgante-en-ratan-taveira\ \(2\).webp', 'preload-image--'+i++);
        preloadImage('../assets/img/sillon-colgante-en-ratan-taveira\ \(3\).webp', 'preload-image--'+i++);


        preloadImage('../assets/img/figura-decorativa-en-mdf-adara.webp', 'preload-image--'+i++);
        preloadImage('../assets/img/figura-decorativa-en-mdf-adara (1).webp', 'preload-image--'+i++);
        preloadImage('../assets/img/figura-decorativa-en-mdf-adara (2).webp', 'preload-image--'+i++);
        preloadImage('../assets/img/figura-decorativa-en-mdf-adara (3).webp', 'preload-image--'+i++);


        preloadImage('../assets/img/decoracion-de-pared-josep.webp', 'preload-image--'+i++);
        preloadImage('../assets/img/decoracion-de-pared-josep\ \(1\).webp', 'preload-image--'+i++);
        preloadImage('../assets/img/decoracion-de-pared-josep\ \(2\).webp', 'preload-image--'+i++);
        preloadImage('../assets/img/decoracion-de-pared-josep.jpg', 'preload-image--'+i++);


        preloadImage('../assets/img/cojin-para-sofa-modular-en-algodon-dhel.webp', 'preload-image--'+i++);
        preloadImage('../assets/img/cojin-para-sofa-modular-en-algodon-dhel\ \(1\).webp', 'preload-image--'+i++);
        preloadImage('../assets/img/cojin-para-sofa-modular-en-algodon-dhel\ \(2\).webp', 'preload-image--'+i++);
        preloadImage('../assets/img/cojin-para-sofa-modular-en-algodon-dhel\ \(3\).webp', 'preload-image--'+i++);

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

document.getElementsByTagName("main")[0].append(fragmento);
