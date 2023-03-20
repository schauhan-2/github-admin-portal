function getRepos() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("input");
  filter = input.value.toUpperCase();
  table = document.getElementById("repoTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function setProfiles() {
  var adminClass = document.getElementsByClassName("adminUser");
  var maintainClass = document.getElementsByClassName("maintainUser");
  var i;
  for (i = 0; i < adminClass.length; i++) {
    adminClass[i].addEventListener("click", function() {
      navigator.clipboard.writeText(this.innerText);
      alert("Name copied. You can now search " + this.innerText + " on slack.");
    });
  }
  for (i = 0; i < maintainClass.length; i++) {
    maintainClass[i].addEventListener("click", function() {
      navigator.clipboard.writeText(this.innerText);
      alert("Name copied. You can now search " + this.innerText + " on slack.");
    });
  }
}