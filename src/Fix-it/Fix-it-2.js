const FixIt2 = () => {
    return (
    <div>
        <Book num="1" title="Ready Player One" author="Ernest Cline" />
        <Book num="2" title="The Hobbit" author=" J R R Tolkien" />
        <Book num="3" title="Do Androids Dream Of Electric Sheep?" author="Philip K. Dick" />
    </div>
    )
}

const Book = () => {
    return (
        <div>
            <h2>number: {Book.num}</h2>
            <h2>title: {Book.title}</h2>
            <h2>author: {Book.author}</h2>
        </div>
    )
}

export default FixIt2