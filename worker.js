function random(choices) {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

onmessage = e => {
    let basicMap = e.data;

    function setPosterBlock(num, trans, empty=false)
    {
        if(empty===true)
        {
            basicMap[12+num*2][10] = 1;
            return;
        }

        switch(num){
            case 1:
                if(trans===true)
                    basicMap[12][10] = 10;
                else
                    basicMap[12][10] = 9;
                break;
            case 1:
                if(trans===true)
                    basicMap[14][10] = 12;
                else
                    basicMap[14][10] = 11;
                break;
            case 1:
                if(trans===true)
                    basicMap[16][10] = 14;
                else
                    basicMap[16][10] = 13;
                break;
            case 1:
                if(trans===true)
                    basicMap[18][10] = 16;
                else
                    basicMap[18][10] = 15;
                break;
            case 1:
                if(trans===true)
                    basicMap[20][10] = 18;
                else
                    basicMap[20][10] = 17;
                break;
        }
    }

    function setDoorBlock(use, open=false)
    {
        if(use===false)
        {
            basicMap[20][14] = 1;
            return;
        }
        basicMap[20][14] = 7;
        if(open===true)
        {
            basicMap[14][13] = -21; 
            basicMap[14][12] = -21; 
            basicMap[14][11] = -21; 
        }
    }

    setPosterBlock(1,random([true,false]),random([true,false]));
    setPosterBlock(2,random([true,false]),random([true,false]));
    setPosterBlock(3,random([true,false]),random([true,false]));
    setPosterBlock(4,random([true,false]),random([true,false]));
    setPosterBlock(5,random([true,false]),random([true,false]));
    setDoorBlock(random([true,false]), random([true,false]));

    postMessage(basicMap);
}