// Crea una funzione che controlli due numeri interi. Ritorna true se uno dei due é 50 o se la somma dei due fa 50
let ControlNumber = (num1, num2) => {
    return (num1 === 50) || (num2 === 50) || (num1 + num2 === 50);
}

let RemoveString = (string, index) => {
    let newString = [];
    for (let i = 0; i < string.length; i++) {
        if (i === index) {
            continue;
        };
        newString.push(string[i]);
    }
    let result = newString.toString().replace(/['\[\],]/g, '');
    console.log(result);
}

let ControlNumber2 = (num1, num2) => {
    return ((40 < num1 && num1 < 60) || (40 < num2 && num2 < 60) || (70 < num1 && num1 < 100) || (70 < num2 && num2 < 100))
}

let CityName = name => (name.startsWith('Los') || name.startsWith('New')) ? name : false;

let CalcArray = array => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

let ControlArray = array => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 1 || array[i] === 3) {
            return false;
        }
        return true;
    }
}

let CheckAngle = degree =>  {
    if (degree < 90) {
        return 'acuto';
    } else if (degree < 180 && degree > 90 && degree !== 90 && degree !== 180) {
        return 'ottuso';
    } else if (degree === 90 ) {
        return 'retto';
    } else if (degree === 180 ) {
        return 'piatto';
    }
}

let Acronimo = nome => {
    let words = nome.split(' ');
    let newString = [];
    for (let word of words) {
        if (word.length > 0) {
            newString.push(word[0]);
        }
    }
    let result = newString.join(', ').replace(/['\[\],' ']/g, '');
    return result;
}

