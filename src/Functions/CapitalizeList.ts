function capitalizeList(list: Array<string>): Array<string> {
    let rep = [];
    for (let element of list) {
        const words = element.split(' ');
        let newWord = '';
        for (let word of words) {
            word = word.charAt(0).toUpperCase() + word.slice(1);
            newWord += word + ' ';
        }
        rep.push(newWord.trim());
    }
    return rep;
}

export default capitalizeList;