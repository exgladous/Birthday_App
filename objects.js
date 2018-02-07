var button = document.getElementById("submitbirthday");
button.addEventListener("click", () => {
    document.getElementById("output").textContent = getAge();
});

function getAge() {
    var today = new Date(),
        birthday = document.getElementById("birthdayinput").value,
        birthdate = new Date(birthday),
        age = Math.floor((today - birthdate) / (365 * 24 * 60 * 60 * 1000));

    return "You are " + age + " years of age. There are " + getDaysUntilNextBirthday() + " days until your next birthday!"
}

function getDaysUntilNextBirthday() {
    var today = new Date,
        nextyear = today.getYear() + 1,
        birthday = document.getElementById("birthdayinput").value,
        birthdate = new Date(birthday),

        nextbirthday = new Date (birthdate.setFullYear(today.getFullYear()));

    if (today - nextbirthday > 0) {
        var nextbirthday = nextbirthday.setFullYear(today.getFullYear() + 1)
    }

        var daysuntilnextbirthday = Math.ceil((nextbirthday - today) / (24 * 60 * 60 * 1000))

    return daysuntilnextbirthday
}
