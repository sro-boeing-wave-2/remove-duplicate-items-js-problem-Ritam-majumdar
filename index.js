/**
 * Removes all the duplicate items from the collection
 * @param {Array} inpArray
 * @returns {Array}
 */
const removeDuplicateItems = (inpArray) {
inpArray = new Array;
outArray = new Array;
var i= 0;
var j= 0;
var k=0;
var x;
for(i=0;i<inpArray.length;i++)
{
    x=0;
    for(j=0;j<outArray.length;j++)
    {
        if (outArray[j]==inpArray[i])
        {
            x=1;
            break;
        }
    }
        if(x==0)
        {
        outArray[k]=inpArray[i];
        k++;
        }
        else
        continue;
}
return outArray;
};

module.exports = removeDuplicateItems;
