import React from 'react'

const App = () => {
    const [loading, setLoading] = useState(false);

    const getCategories = async () => {
        setLoading(true);

        await fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then(data =>
                setCategories(data);
    })
.catch(err => alert(err))
        .finally(()=>{
            setLoading(false);
        })
}

    return (
        <div>App</div>
    )
}
export default App
