    // Precargar las imágenes al cargar la página

    //Lo primero que hace el script es crear el fragmento
    let fechaIni = new Date();

    const fragmento = document.createDocumentFragment();

    window.addEventListener('load', function () {

        let i=0;

        preloadImage('../assets/img/cojin-para-sofa-modular-en-algodon-dhel.webp', 'preload-image--'+i++);
        preloadImage('../assets/img/cojin-para-sofa-modular-en-algodon-dhel\ \(1\).webp', 'preload-image--'+i++);
        preloadImage('../assets/img/cojin-para-sofa-modular-en-algodon-dhel\ \(2\).webp', 'preload-image--'+i++);
        preloadImage('../assets/img/cojin-para-sofa-modular-en-algodon-dhel\ \(3\).webp', 'preload-image--'+i++);
        preloadImage('../assets/img/cojin-para-sofa-modular-en-algodon-dhel\ \(4\).webp', 'preload-image--'+i++);
        preloadImage('../assets/img/cojin-para-sofa-modular-en-algodon-dhel\ \(5\).webp', 'preload-image--'+i++);
        preloadImage('../assets/img/cojin-para-sofa-modular-en-algodon-dhel\ \(6\).webp', 'preload-image--'+i++);
        preloadImage('../assets/img/cojin-para-sofa-modular-en-algodon-dhel.jpg', 'preload-image--'+i++);



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
