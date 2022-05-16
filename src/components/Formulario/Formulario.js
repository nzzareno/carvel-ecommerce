import { useContext, useState, memo } from "react";
import { CarritoContext } from "../../context/CartContext";
import "./Formulario.scss";
import { motion } from "framer-motion";
import { db } from "../../index";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import * as alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import {
  addDoc,
  collection,
  serverTimestamp,
  writeBatch,
  doc,
  runTransaction,
} from "firebase/firestore";

const Formulario = memo(() => {
  const [errorHelp, setErrorHelp] = useState(false);

  let navigate = useNavigate();
  let {
    setAddToCarrito,
    openModal,
    setOpenModal,
    totalPrice,
    fundamentalDataProduct,
    setOrderPrice,
    setOrderId,
    setFooterOff,
  } = useContext(CarritoContext);
  

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      phone: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(4, "Four letters at least")
        .required("First name is required")
        .trim()
        .matches(/^[aA-zZ\s]+$/, "Is not in correct format"),
      lastName: Yup.string()
        .min(3, "Three letters at least")
        .required("Last name is required")
        .trim()
        .matches(/^[aA-zZ\s]+$/, "Is not in correct format"),
      age: Yup.number()
        .positive("Age must be greater than zero")
        .required("Age Required")
        .min(10, "Two digits at least"),
      phone: Yup.number()
        .required("Phone Number Required")
        .min(1000000, "Seven digits at least"),
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
    }),
    onSubmit: () => {
      sendingBuyer();
    },
  });

  const buyer = {
    buyer: {
      name: formik.values.firstName,
      lastName: formik.values.lastName,
      age: formik.values.age,
      phone: formik.values.phone,
      email: formik.values.email,
    },
    items: fundamentalDataProduct,
    total: totalPrice,
    date: serverTimestamp(),
  };

  const sendingBuyer = async () => {
    try {
      const orderRef = collection(db, "Orders");
      const orderProducts = fundamentalDataProduct.map((product) => {
        return {
          doc: doc(db, "Products", product.id),
          quantity: product.quantity,
        };
      });

      await runTransaction(db, async (transaction) => {
        orderProducts.forEach(async (product) => {
          const check = await transaction.get(product.doc);
          const incomingStock = check.data().stock - product.quantity;
          const batch = writeBatch(db);
          if (
            !formik.values.firstName.trim() ||
            !formik.values.lastName.trim() ||
            !formik.values.email.trim() ||
            formik.values.firstName !== formik.values.firstName.trim() ||
            formik.values.lastName !== formik.values.lastName.trim() ||
            formik.values.email !== formik.values.email.trim() ||
            formik.values.firstName.required ||
            formik.values.lastName.required ||
            formik.values.email.required ||
            formik.values.phone.required ||
            formik.values.age.required
          ) {
            setErrorHelp(true);
            alertify.error("Please, fill the fields correctly");
            return;
          } else if (incomingStock < 0) {
            setErrorHelp(true);
            alertify.error("Sorry, there is not enough stock");
            return;
          } else {
            setErrorHelp(false);
          }
          batch.update(product.doc, { stock: incomingStock });
          await batch.commit();
        });
      });

      if (!errorHelp)
        return await addDoc(orderRef, buyer).then((rta) => {
          setOrderId(rta.id);
          setOrderPrice(buyer.total);
          setOpenModal(false);
          setAddToCarrito([]);
          navigate("/carvel-ecommerce/cart/checkout");
        });
    } catch (e) {
      console.error(e);
    }
  };

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  if (!openModal) {
    return null;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1.4 }}
      className="main"
      style={{ zIndex: 9 }}
    >
      {openModal ? (
        <div onClick={() => setOpenModal(!openModal)} className="overlay">
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="modalContainer"
          >
            <img
              className="image-modal"
              src="https://raw.githubusercontent.com/nzzareno/web-asyuth/main/img/stylepure.jpg"
              alt="8"
            />
            <div className="modalRight">
              <p
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setAddToCarrito([]);
                  navigate("/carvel-ecommerce/");
                  setOpenModal(false);
                }}
                className="closeBtn"
              >
                X
              </p>
              <div className="content-modal">
                <h1 className="saludo">Hello there!</h1>
                <h1 className="sub-saludo">to buy, please enter</h1>
                <h1 className="sub-saludox">your information data</h1>
              </div>
              <div className="form-container">
                <form
                  onSubmit={formik.handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div className="input-container">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName.toLowerCase()}
                      className="input"
                      style={{
                        border: formik.errors.firstName && "1px solid red",
                      }}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <small className="formik-error">
                        {formik.errors.firstName}
                      </small>
                    ) : null}
                  </div>
                  <div className="input-container">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName.toLowerCase()}
                      className="input"
                      style={{
                        border: formik.errors.lastName && "1px solid red",
                      }}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <small className="formik-error">
                        {formik.errors.lastName}
                      </small>
                    ) : null}
                  </div>
                  <div className="input-container">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email.toLowerCase()}
                      className="input"
                      style={{
                        border: formik.errors.email && "1px solid red",
                      }}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <small className="formik-error">
                        {formik.errors.email}
                      </small>
                    ) : null}
                  </div>
                  <div className="input-container">
                    <input
                      type="number"
                      id="age"
                      name="age"
                      placeholder="Age"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.age}
                      className="input"
                      style={{
                        border: formik.errors.age && "1px solid red",
                      }}
                    />
                    {formik.touched.age && formik.errors.age ? (
                      <small className="formik-error">
                        {formik.errors.age}
                      </small>
                    ) : null}
                  </div>
                  <div className="input-container">
                    <input
                      type="number"
                      id="phone"
                      name="phone"
                      placeholder="Phone"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phone}
                      className="input"
                      style={{
                        border: formik.errors.phone && "1px solid red",
                      }}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                      <small className="formik-error">
                        {formik.errors.phone}
                      </small>
                    ) : null}
                  </div>
                  <div className="btnContainer">
                    <button
                      onClick={() => {
                        navigate("/carvel-ecommerce/");
                        setAddToCarrito([]);
                      }}
                      className="btnOutline"
                    >
                      <span    onClick={() => setFooterOff(false)} className="bold">CANCEL</span>
                    </button>
                    <button
                      type="submit"
                      onClick={() => {
                        formik.handleSubmit();
                      }}
                      className="btnPrimary"
                    >
                      <span className="bold">BUY NOW</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>
          Please verify that you have added products to the cart, if not, go
          back to home and select what you like best!
        </h1>
      )}
    </motion.div>
  );
});

export default Formulario;
