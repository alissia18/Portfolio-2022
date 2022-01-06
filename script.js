$(".js-image").click(function() {
    var modal = document.getElementById("myModal");
    
    
    var img = document.getElementById(this.id);
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = this.src;
   
    var span = document.getElementsByClassName("close")[0];
    
    span.onclick = function() { 
      modal.style.display = "none";
    }
  })