console.log('Happy developing ✨')
function order(words){
    if (words.length != 0) {
        const splitWords = words.split(' ');
        const reorder = words.split(' ');
        for (const word of splitWords) {
            for (const i of word) {
                let j;
                j = Number(i);
                console.log(j);
                if (j != NaN) {
                    reorder[j - 1] = word;
                }
            }
        }
        return reorder.join(' ');
    } else return words;
}
