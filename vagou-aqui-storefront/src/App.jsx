import React, {useEffect} from 'react'

const App = () => {
    const [loading, setLoading] = useState(false);
    const [productList, setProductList] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [fileredProductList, setFilteredProductList] = useState([]);

    const addCategory = (category) => {
        if(!selectedCategories.includes(category)){
            setSelectedCategories(prev => ([...prev, category]))
        }
    }

    const removeCategory = (category) => {
        if(selectedCategories.includes(category)){
            const removedList = selectedCategories.filter((item) => (item !== category));
            setSelectedCategories(removedList);
        }
    }

    const resetCategory = () => { // this function will be used to clear the filter
        setSelectedCategories([]);
    }

    useEffect(() => {
        if(selectedCategories.length === 0){
            setFilteredProductList(productList);
        } else{
            setFilteredProductList(productList.filter((item)=>(selectedCategories.includes(item.category))));
        }
    }, [selectedCategories, productList])
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
const getProducts = async () => {
    setLoading(true);

    await fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => .then(data => {
            setProductList(data.products);
            getCategories(); // get the categories list
        })
        .catch(err => alert(err))
        .finally(()=>{
            setLoading(false);
        })
}

useEffect(() => {
    getProducts();
}, [])

    return (
        <div>App</div>
    )
}
export default App
