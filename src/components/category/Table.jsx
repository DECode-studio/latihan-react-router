const Table = ({ categories }) => {
    
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <td>No</td>
                    <td>Nama</td>
                    <td>Description</td>
                </tr>
            </thead>
            <tbody>
                {categories.map((category, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{category.name}</td>
                        <td>{category.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table