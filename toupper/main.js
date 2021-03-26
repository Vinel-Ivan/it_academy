function toUpper(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

function caputalize(string) {
    return string.replace(/^./, string[0].toUpperCase());
}

alert(`Первый вариант: ${toUpper("something")} \nВторой вариант: ${caputalize("something2")}`);

