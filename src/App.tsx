import React, { useEffect, useState } from 'react'
import ROUTES from './index.Routes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Maincontext from './Context/Context'
import axios from 'axios'
import toast from 'react-hot-toast'

const router = createBrowserRouter(ROUTES)

const App = () => {
  const [data, setData] = useState([])
  const [wishList, setWishList] = useState(localStorage.getItem("wish") ? JSON.parse(localStorage.getItem("wish")) : [])
  const [search, setSearch] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8000/products").then(res => {
      console.log(res.data)
      setData(res.data)
      setSearch(res.data)
    })
  }, [])

  function addToWishList(prod) {
    const targetIndex = wishList.findIndex((item) => item.id === prod.id)
    if (targetIndex !== -1) {
      const updatedWishList = wishList.filter((item) => item.id !== prod.id)
      setWishList(updatedWishList)
      localStorage.setItem("wish", JSON.stringify(updatedWishList))
      toast.success("deleted item")
    } else {
      const updatedWishList = [...wishList, prod]
      setWishList(updatedWishList)
      localStorage.setItem("wish", JSON.stringify(updatedWishList))
      toast.success("item added")
    }
  }


  const RemoveData = (id) => {
    axios.delete(`http://localhost:8000/products/${id}`).then(res => {
      const target = data.find(prod => prod.id === id)
      if (target) {
        data.splice(data.indexOf(target), 1)
        setData([...data])
        console.log(target)
      }
    }).catch(error => {
      console.error('There was an error deleting the product!', error);
    });
  }
  

  function handlerFilter(e) {
    const sorting = e.target.value
    console.log(sorting)

    if (sorting == "df") {
      setData([...search])
    }
    else if (sorting == "10") {
      const target = search.sort((a, b) => a.price - b.price)
      console.log(target);
      
      setData([...target])
    }
    else if (sorting == "01") {
      const target = search.sort((a, b) => b.price - a.price)
      setData([...target])
    }
  }

  function handlerSearch(searchValue) {
    console.log(searchValue)
    if (searchValue == "")
      setData([...search])
    else {
      setData([...search.filter((item) => item.title.trim().toLowerCase().includes(searchValue))

      ])
    }
  }


  function deleteFromWishList(product) {
    const target = wishList.find((item) => item.id == product.id)
    wishList.splice(wishList.indexOf(target), 1)
    setWishList([...wishList])
    localStorage.setItem("wish", JSON.stringify([...wishList]))
    toast.success("deleted from wishlist")

  }

  const value = {
    data,
    addToWishList,
    wishList,
    deleteFromWishList,
    RemoveData,
    handlerSearch,
    handlerFilter,
    setData,
    search,
    setSearch
  }

  return (
    <div>
      <Maincontext.Provider value={value}>
        <RouterProvider router={router} />
      </Maincontext.Provider>
    </div>
  )
}

export default App
