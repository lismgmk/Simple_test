
const btn = document.querySelector('button'),
    text = document.querySelector('input'),
    arr = [
        { name: "Вова", age: 36},
        { name: "Ира", age: 25},
        { name: "Коля", age: 70}
    ];
    
btn.addEventListener('click', () => {
    setTimeout(() => {
        if(text.value === 'google'){
            alert(`Yandex круче. Но это не точно` );
        } else {
            alert(`${text.value} ${arr[0].name}`);
        }
    }, 3000);

});

function superSum (a, b) {
    alert(`сумма любых двух чисел ${a+b}`)
};

superSum(10, 20);

// 7. Создать массив из чисел в перемешку (не отсортированы). C помощью цикла for найти максимальный и минимальный элементы в массиве

let arrayRandom = [-6, -2, -1, -10, -11111, -9, -99],
    max = arrayRandom[0],
    min = arrayRandom[0];

for (let i = 0; i < arrayRandom.length; i++) {
    if( max < arrayRandom[i] ) {
        max = arrayRandom[i]
    }
};


for (let i = 0; i < arrayRandom.length; i++){
    
    if( arrayRandom[i] < min ){
        min = arrayRandom[i]
    }
};



console.log(`минимум ${min} максимум ${max}`);


// 8. Создать 2 переменные a и b… присвоить им любые значения. Потом программно поменять эти значения местами, не используя значения напрямую

let a = 'XXX',
    b = 'YYY',
    c = a;

    a = b;
    b = c;

    console.log(a);
    console.log(b);
// 9. Оформить алгоритм поиска максимального числа в массиве как функцию findMax (чтобы можно было передавать в неё любой массив чисел, а на выходе она возвращала нам максимальное число из массива)

function findMax (array){
    let arr = array,
        max = array[0];

        for(let i = 0; i < arr.length; i++){
            if( arr[i] > max ){
                max = arr[i]
            }
        };

        console.log(max)
    }

findMax([-1212, -1, -454564654, -9]);

