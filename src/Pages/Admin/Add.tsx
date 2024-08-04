import React, { useContext } from 'react';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Maincontext from '../../Context/Context';
import './Add.css';

const Add = () => {
  const { data, setData, setSearch, search } = useContext(Maincontext);

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      price: '',
      image: ''
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      description: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      price: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      image: Yup.string()
        .max(2000, 'Must be 20 characters or less')
        .required('Required'),
    }),
    onSubmit: values => {
      axios.post("http://localhost:8000/products", values).then(res => {
        setData([...data, res.data]);
        setSearch([...search, res.data])
      });
      formik.resetForm();
    },
  });

  return (
    <div style={{backgroundColor:"black", height:"100vh"}}>
      <div className="form-container">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="title">Name</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title ? (
          <div className="error">{formik.errors.title}</div>
        ) : null}

        <label htmlFor="description">Description</label>
        <input
          id="description"
          name="description"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
        />
        {formik.touched.description && formik.errors.description ? (
          <div className="error">{formik.errors.description}</div>
        ) : null}

        <label htmlFor="price">Price</label>
        <input
          id="price"
          name="price"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.price}
        />
        {formik.touched.price && formik.errors.price ? (
          <div className="error">{formik.errors.price}</div>
        ) : null}

        <label htmlFor="image">Image</label>
        <input
          id="image"
          name="image"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.image}
        />
        {formik.touched.image && formik.errors.image ? (
          <div className="error">{formik.errors.image}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Add;
