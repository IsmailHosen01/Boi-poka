export const getStoredBook = () => {

    const storedBookSTR = localStorage.getItem('readList');
    if (storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    }
    else {
        return [];
    }
}

export const addToStoredDB = id => {

    const storedBookData = getStoredBook();

    if (storedBookData.includes(id)) {
        alert('Book Already Existed');
    }
    else {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem('readList',data);
    }

}