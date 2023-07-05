const value = document.getElementsByTagName("form");

const button = document.getElementsByTagName("button");

button[0].addEventListener("click", makePost);

function makePost(e) {
  e.preventDefault();
  //   console.log(value[0].elements["name"].value); //Chidubem Obinwanne
  //   console.log(value[0].elements["email"].value);
  //   console.log(value[0].elements["password"].value);
  fetch("http://localhost:2043/api/v1/user/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      fullName: value[0].elements["name"].value,
      email: value[0].elements["email"].value,
      password: value[0].elements["password"].value,
    }),
    mode: "cors",
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

// const x = document.forms["frm1"];
// let text = "";
// for (let i = 0; i < x.length; i++) {
//   text += x.elements[i].value + "<br>";
// }
// document.getElementById("demo").innerHTML = text;
