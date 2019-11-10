var kits = {};
// 1.随机 0~n的整数
kits.randomInt = function(n){
    return Math.floor(Math.random() * (n+1));
}

// 2.随机 n~m 的整数
kits.randomIntN = function(n,m){
    return Math.floor(Math.random() * (m - n + 1) + n);
}

// 3.随机rgb进制颜色
kits.randomColorRGB = function(result){
    var r = this.randomIntN(0,255);
    var g = this.randomIntN(0,255);
    var b = this.randomIntN(0,255);
    var result = 'rgb('+ r +',' + g +',' + b+ ')';
    return result;
}

// 4.随机16进制颜色
kits.randomColorSixteen = function(){
    var arr = ['a','b','c','d','e','f',0,1,2,3,4,5,6,7,8,9];
    var str = '#';
    for(var i = 0; i < 6; i++){
        var index = this.randomInt(15);
        str += arr[index];
    }
    return str;
}

// 5.冒泡排序，从小到大
kits.bubblingSort = function(arr){
    for(var i = 0; i < arr.length; i++){
        for(var j = i+1; j < arr.length; j++){
            if( arr[i] > arr[j]){
                var temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}

// 6.数组去重
kits.unique = function(arr){
    return arr.filter(function(item,index,array){
        return array.indexOf(item) === index;
    });
};

// 7.判断字符出现次数最多的符号和次数
kits.charMore = function (item){
    var arr = [];
    for(var i = 0; i < item.length; i++){
       if( arr[item[i]] ){
        arr[item[i]]++;
       }else{
        arr[item[i]] = 1;
       }
   }

    var max = 0;
    var index = '';
    for(var key in arr){
        if(arr[key] > max){
            max = arr[key];
            index = key;
        }
    }
    return console.log('出现次数最多的字符是'+ index + ',出现了' + max + '次');
}


// 8. 找出最大值
kits.findMax = function(item){
    var max = item[0];
    for(var i = 1; i < item.length; i++){
        if( max < item[i]){
            max = item[i]
        }
    }
    return max;
}

// 9. 找出最小值
kits.findMin = function(item){
    var min = item[0];
    for(var i = 1; i < item.length; i++){
        if( min > item[i]){
            min = item[i]
        }
    }
    return min;
}

// 10. 格式化时间
kits.formatDate = function(){
    var data = new Date();
    return console.log(data);
}

//11. 查找某个字符串在数组中的所有的索引
kits.findIndex = function(n){
    for(var i = 0; i < arguments.length; i++){
        if(arguments[i].indexOf(n) != -1){
            console.log(i+1)
        }
    }
}



