// Задание 2



const data = {
    color: 'red',
    width: 400,
    height: 500
}
function func(options){
    let color = options.color;
    let width = options.width;
    let height = options.height;
    console.log(color, width, height);
}
func(data)


// Решение

function func2(data){
    let {color, width, height} = data;
    console.log(color, width, height);
}
func2(data)
