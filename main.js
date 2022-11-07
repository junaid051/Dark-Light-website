function switchIt() {
    var box = document.getElementById("myBtn");
    
    if (box.checked) {
      document.body.style.backgroundColor="#131417"
      document.getElementById("coll").style.color="#6c7081"
      document.getElementById("col2").style.color="#ffffff"
    } else {
     document.body.style.backgroundColor=""
     document.getElementById("coll").style.color=""
      document.getElementById("col2").style.color=""
    }
  }
  setInterval(switchIt, 1000);