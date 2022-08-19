
// Задание 1

const data = ['Иван', 'Иванов', 'Отдел разработки',];

function func(emp){
    let name = emp[0];
    let surname = emp[1];
    let department = emp[2];

    let position;
    if(emp[3] !== undefined){
        position = emp[3]
    } else{
        position = 'Junior'
    }
    console.log(name, surname, department, position);
}
func(data)


// Решение


function func1(data){
    let [name, surname, department, position] = data;
    position = position !== undefined ? position : 'Junior'
    console.log(`${name} ${surname} ${department} ${position} `);
}
func1(data)












