var doc = document.getElementById('textArea')
var objArr = []
function getvalue() {
    var splitVal = doc.value.split('\n')
    console.log(splitVal)
    var questionA = {}
    var count = 1
    for (var i =0; i<splitVal.length; i++){
    if (splitVal[i] !== ""){
        if(splitVal[i].slice(-1) === '?'){
            questionA.question = splitVal[i].trim()
        }else {
            if(splitVal[i].slice(-1) === '*'){
            questionA = splitVal[i].trim().slice(0,-1)
        }
        questionA['option' +count] = splitVal[i].trim()
        count ++
    }

    }else{
        objArr.push(questionA)
        questionA = {}
        count = 1;
    }

    }

}
































function textarea() {
    var text = document.getElementById("text");
    var questions = [];
    var obj = {};
    var value = text.value.split("\n");
    var count = 1;
    for (var i = 0; i < value.length; i++) {
        if (value[i] === "") {
            questions.push(obj);
            obj = {};
            count = 1;
        } else {
            if (value[i].lastIndexOf("?") !== -1) { 
                obj.question = value[i];
            } else {
                if (value[i].lastIndexOf("*") !== -1) { 
                    obj.answer = value[i].slice(0, -1);
                    obj['option' + count] = value[i].slice(0, -1);
                } else {
                    obj['option' + count] = value[i];
                }
                count++;
            }
        }
    }
    console.log(questions); 
}