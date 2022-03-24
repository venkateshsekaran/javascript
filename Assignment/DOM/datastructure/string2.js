//comparing emails
const myemail = "venkateshsekaran18";
const login = "vEnkateshSekaran18";
const mail = login.toLowerCase();
mail == myemail ? console.log("matched") : console.log("not matched");

const check = function (items) {
  items.includes("knife")
    ? console.log(items.replace("knife", "wife"))
    : console.log(items);
  console.log(items.startsWith("he"));
  console.log(items.endsWith("fe"));
};
check("hi knife");
check("he killed by his knife");
