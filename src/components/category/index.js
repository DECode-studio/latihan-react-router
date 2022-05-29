import Table from "./Table"
import Form from "./Form"
import { useState, useEffect } from 'react'
import axios from 'axios'
import FloatingButton from "./FloatingButton"

const Category = () => {
    const [categories, setCategories] = useState([])
    const [refetch, setRefetch] = useState({})

    const storeCategory = async (form) => {
        try {
            const response = await axios.post('https://rest-api-orm.herokuapp.com/api/category/create', form)
            setRefetch(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getCategoriesData = async () => {
        try {
            const response = await axios.get('https://rest-api-orm.herokuapp.com/api/category/list')
            setCategories(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(
        () => getCategoriesData
        , [refetch])

    return (
        <div className='container'>
            <Form storeCategory={storeCategory} />
            <br></br>
            <Table categories={categories} />
            <FloatingButton />
        </div>
    )
}

export default Category