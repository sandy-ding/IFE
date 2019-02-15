var scoreObject = {
    "Tony": {
        "Math": 95,
        "English": 79,
        "Music": 68
    }, 
    "Simon": {
        "Math": 100,
        "English": 95,
        "Music": 98
    }, 
    "Annie": {
        "Math": 54,
        "English": 65,
        "Music": 88
    }
};

function obj2arr(obj) {
    var arr = [],
        i = 0;
    for (var key in obj) {
        arr.push([key]);
            for (var k in obj[key]){
                arr[i].push(obj[key][k])
            }
            i++;
        }
        return arr;
    }
            
obj2arr(scoreObject);
            
var menuArr = [
    [1, "Area1", -1],
    [2, "Area2", -1],
    [3, "Area1-1", 1],
    [4, "Area1-2", 1],
    [5, "Area2-1", 2],
    [6, "Area2-2", 2],
    [7, "Area1-2-3", 4],
    [8, "Area2-2-1", 6],
];

//从叶向上建root 对象树
function arr2obj(arr){
    var obj = {};
    for (var i = arr.length - 1; i >= 0; i--){
        var id = arr[i][0];
        var name = arr[i][1];
        var pid = arr[i][2]; 
        //构造子对象
        var child = {}
        child[id] = {
            "name": name
        }
        //如不存在，构造父对象
        if (!obj[pid]){
            obj[pid] = {
                "subMenu": child
            }
        } 
        //如已存在，添加子对象属性
        else {
            obj[pid]["subMenu"][id] = {
                "name": name
            }
        }
        //如果此对象同时是其他child的父对象，移动其child
        if (obj[id]){
            obj[pid]["subMenu"][id]["subMenu"] = obj[id]["subMenu"];
            //删除此对象属性
            delete obj[id];
        }
    }
    return obj["-1"]["subMenu"];
}
            
arr2obj(menuArr);