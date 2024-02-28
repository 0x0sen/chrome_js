const MAPPING = {
    "０":"0",
    "１":"1",
    "２":"2",
    "３":"3",
    "４":"4",
    "５":"5",
    "６":"6",
    "７":"7",
    "８":"8",
    "９":"9",
}

const readline = require('readline');
const rl = readline.createInterface(
                    process.stdin, process.stdout);

rl.question('print line? 全角数字を入力', (line) => {
	main(line)
    rl.close();
});


function main(text){
    const _input = mapping_number(text)
    confirm_number(_input)
    const _array = make_block(_input)
    print(_array)
}


function mapping_number(text){
    let _text = ""
    text.split("").forEach(_char => {
        try{
            _text += MAPPING[_char]
        } catch {
            console.log("スキップ文字: " + _char)
        }
    })
    const _int_number = parseInt(_text)
    valid_odd(_int_number)
    return _int_number
}

function valid_odd(number){
    if(isNaN(number)){
        throw new Error("not number")
    }
    if(parseInt(number) % 2 === 0){
        throw new Error("not odd number")
    }
}

function confirm_number(number){
    // TODO
    console.log("Wanna make a diamond of "+number+"?: [yes]")
}

function make_block(number){
    const _number = (number*2)+1
    const _array = make_array(_number)
    const _array_with_frame = fill_frame(_array)
    const _array_with_star = fill_star(_array_with_frame)
    return _array_with_star
}

function make_array(number){
    return Array.from(new Array(number), (_) => new Array(number).fill("＊"))
}

function fill_frame(array){
    const _width = array.length
    for(let i=0; i < _width; i++){
        for(let j=0; j < _width; j++){
            if(i === 0 || i === _width-1){
                array[i][j]="＝"
            } 
            if(j === 0 || j === _width-1){
                array[i][j]="＝"
            }
        }
    }
    return array
}

function fill_star(array){
    const _width = array.length
    const _half_width=_width/2
    for(let i=1; i<_half_width; i++){
        const _number_for_space = _half_width - i 
        let _first_counter = Math.floor(_number_for_space)
        for(let j=1; j<_number_for_space; j++){
            if(_first_counter < 1){
                break
            }
            array[i][j]="　"
            array[_width-i-1][j]="　"
            _first_counter--
        }
        let _second_counter = Math.floor(_number_for_space)
        for(let j=_width-2; j>_number_for_space; j--){
            if(_second_counter < 1){
                break
            }
            array[i][j]="　"
            array[_width-i-1][j]="　"
            _second_counter--
        }
    }
    return array
}

function print(array){
    array.forEach(deep =>{
        let str =""
        deep.forEach(char => {
            str += char
        })
        console.log(str)
    })
}
