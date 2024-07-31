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

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(res => {
      console.log(res.data)
      setData(res.data)
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
    deleteFromWishList
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
