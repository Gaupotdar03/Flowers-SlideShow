 var i = 1;
      var interval;
      var timer;

      function startSS() {
        timer = setInterval(slideShow, 1000);
      }

      function stopSS() {
        clearInterval(timer);
      }

      function slideShow() {
        var imgElement = document.getElementById("Photos");
        var imgSrc = imgElement.getAttribute("src");

        if (i == 5) i = 1;
        else i++;
        imgElement.setAttribute("src", "images/" + i + ".jpeg");
      }

      document.getElementById("startbtn").onclick = startSS;
      document.getElementById("stopbtn").onclick = stopSS;