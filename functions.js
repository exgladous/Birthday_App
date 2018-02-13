var button = document.getElementById("submitbirthday");
button.addEventListener("click", () => {
    document.getElementById("output").textContent = checkFormat();

});

function getAge() {
    var today = new Date(),
        birthday = document.getElementById("birthdayinput").value,
        birthdate = new Date(birthday),
        age = Math.floor((today - birthdate) / (365 * 24 * 60 * 60 * 1000));

    return "You are " + age + " years of age. There are " + getDaysUntilNextBirthday() + " days until your next birthday! " + "You are " + getHoroscope();
}

function getDaysUntilNextBirthday() {
    var today = new Date,
        nextyear = today.getYear() + 1,
        birthday = document.getElementById("birthdayinput").value,
        birthdate = new Date(birthday),

        nextbirthday = new Date(birthdate.setFullYear(today.getFullYear()));

    if (today - nextbirthday > 0) {
        var nextbirthday = nextbirthday.setFullYear(today.getFullYear() + 1)
    }

    var daysuntilnextbirthday = Math.ceil((nextbirthday - today) / (24 * 60 * 60 * 1000))

    return daysuntilnextbirthday
}

function getHoroscope() {
    var today = new Date,
        birthday = document.getElementById("birthdayinput").value,
        birthdate = new Date(birthday),
        days = birthdate.getDate(),
        month = birthdate.getMonth();

    if ((days >= 20 && month == 0) || (days <= 18 && month == 1)) {
        document.getElementById("picture").src = "./Images/Aquarius.PNG";
        return "an Aquarius!";
    } else if ((days >= 19 && month == 1) || (days <= 20 && month == 2)) {
        document.getElementById("picture").src = "./Images/Pisces.PNG";
        return "a Pisces!";
    } else if ((days >= 21 && month == 2) || (days <= 19 && month == 3)) {
        document.getElementById("picture").src = "./Images/Aries.PNG";
        return "an Aries!";
    } else if ((days >= 21 && month == 3) || (days <= 20 && month == 4)) {
        document.getElementById("picture").src = "./Images/Taurus.PNG";
        return "a Taurus!";
    } else if ((days >= 21 && month == 4) || (days <= 22 && month == 5)) {
        document.getElementById("picture").src = "./Images/Gemini.PNG";
        return "a Gemini!";
    } else if ((days >= 23 && month == 5) || (days <= 22 && month == 6)) {
        document.getElementById("picture").src = "./Images/Cancer.PNG";
        return "a Cancer!";
    } else if ((days >= 23 && month == 6) || (days <= 22 && month == 7)) {
        document.getElementById("picture").src = "./Images/Leo.PNG";
        return "a Leo!";
    } else if ((days >= 23 && month == 7) || (days <= 22 && month == 8)) {
        document.getElementById("picture").src = "./Images/Virgo.PNG";
        return "a Virgo!";
    } else if ((days >= 23 && month == 8) || (days <= 21 && month == 9)) {
        document.getElementById("picture").src = "./Images/Libra.PNG";
        return "a Libra!";
    } else if ((days >= 22 && month == 9) || (days <= 21 && month == 10)) {
        document.getElementById("picture").src = "./Images/Scorpio.PNG";
        return "a Scorpio!";
    } else if ((days >= 22 && month == 10) || (days <= 19 && month == 11)) {
        document.getElementById("picture").src = "./Images/Sagittarius.PNG";
        return "a Sagittarius!";
    } else if ((days >= 19 && month == 0) || (days <= 20 && month == 1)) {
        document.getElementById("picture").src = "./Images/Capricorn.PNG";
        return "a Capricorn!";
    }
}


function checkFormat() {
    var format = document.getElementById("birthdayinput").value;
    var check1 = format.substring(2, 3);
    var check2 = format.substring(5, 6);
    if ((check1 == "/") && (check2 == "/")) {
        document.getElementById("picture").src = "";
        return getAge();
    } else {
        document.getElementById("picture").src = "./Images/lordandsaviour.jpg";
        return "Temple Says: Sorry, but you entered a date in the incorrect format. Please try again.";
    }
}
