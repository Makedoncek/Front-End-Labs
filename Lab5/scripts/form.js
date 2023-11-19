function validateForm() {
    let form = document.forms["input-form"];
    var errorMessages = document.querySelectorAll("label.wrong-input");
    var res = true;
    const fullnamePattern = /[\wа-яА-ЯІ]+\s[\wа-яА-ЯІ].[\wа-яА-ЯІ]./
    if (!fullnamePattern.test(form['fullname'].value)) {
        errorMessages[0].hidden = false;
        res = false;
    }
    else {
        errorMessages[0].hidden = true;
    }

    const idCardPattern = /[\wа-яА-ЯІ]{2}\s№\d{6}/
    if (!idCardPattern.test(form['id-card'].value)) {
        errorMessages[1].hidden = false;
        res = false;
    }
    else {
        errorMessages[1].hidden = true;
    }

    const facultyPattern = /[\wа-яА-ЯІ]{4}/
    if (!facultyPattern.test(form['faculty'].value)) {
        errorMessages[2].hidden = false;
        res = false;
    }
    else {
        errorMessages[2].hidden = true;
    }

    const birthDatePattern = /\d{2}.\d{2}.\d{4}/
    if (!birthDatePattern.test(form['birthday-date'].value)) {
        errorMessages[3].hidden = false;
        res = false;
    }
    else {
        errorMessages[3].hidden = true;
    }

    const addressPattern = /м.\s[\wа-яА-ЯІ]+/
    if (!addressPattern.test(form['address'].value)) {
        errorMessages[4].hidden = false;
        res = false;
    }
    else {
        errorMessages[4].hidden = true;
    }

    if (res) {
        var info = document.getElementById("information");
        var oldUl = document.getElementById("info-ul");

        var ul = document.createElement("ul");
        ul.setAttribute("id", "info-ul");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode("ПІБ: " + form['fullname'].value));
        ul.appendChild(li);
        li = document.createElement("li");
        li.appendChild(document.createTextNode("Номер ID-картки: " + form['id-card'].value));
        ul.appendChild(li);
        li = document.createElement("li");
        li.appendChild(document.createTextNode("Факультет: " + form['faculty'].value));
        ul.appendChild(li);
        li = document.createElement("li");
        li.appendChild(document.createTextNode("Дата народження: " + form['birthday-date'].value));
        ul.appendChild(li);
        li = document.createElement("li");
        li.appendChild(document.createTextNode("Адреса: " + form['address'].value));
        ul.appendChild(li);
        info.replaceChild(ul, oldUl);
    }
    else
        return res;
}