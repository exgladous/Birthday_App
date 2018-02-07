var button = document.getElementById("submitbirthday");
button.addEventListener("click", () => {
    document.getElementById("output").textContent = getAge();
});

function getAge() {
    var today = new Date(),
        birthday = document.getElementById("birthdayinput").value,
        birthdate = new Date(birthday),
        age = Math.floor((today - birthdate) / (365 * 24 * 60 * 60 * 1000));

    return "You are" + age + "years of age."
}
