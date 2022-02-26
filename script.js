let count = 0;

document.getElementById("butIn").addEventListener("click", function() {
    count++;
    $("h2").text(count);
  });

  document.getElementById("butDe").addEventListener("click", function() {
    count--;
    $("h2").text(count);
  });
