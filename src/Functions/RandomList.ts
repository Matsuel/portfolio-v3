function randomizeList(list: Array<any>): Array<any> {
    const newList = [];
    while (list.length > 0) {
        const randomIndex = Math.floor(Math.random() * list.length);
        newList.push(list[randomIndex]);
        list.splice(randomIndex, 1);
    }
    return newList;
}

export default randomizeList;