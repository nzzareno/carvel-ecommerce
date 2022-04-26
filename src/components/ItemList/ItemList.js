import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import CollectionTitle from "../CollectionTitle/CollectionTitle";
import "./ItemList.scss";
import { useParams } from "react-router-dom";
import Spinner from "../ItemListContainer/Spinner";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../index";
import { motion } from "framer-motion";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const ItemList = () => {
  const [productos, setProductos] = useState([]);
  const [glassesImage, setGlassesImage] = useState("");
  const [accessoriesImage, setAccessoriesImage] = useState("");
  const [hatsImage, setHatsImage] = useState("");
  const [jacketsImage, setJacketsImage] = useState("");
  const [womensImage, setWomensImage] = useState("");
  const [yellowpast, setYellowpast] = useState("");
  const { id } = useParams();

  const storage = getStorage();
  const httpsReferenceGlasses = ref(
    storage,
    "https://firebasestorage.googleapis.com/v0/b/carvel-ecommerce-coder.appspot.com/o/GlassesUltimate.jpg"
  );
  const httpsReferenceAccessories = ref(
    storage,
    "https://firebasestorage.googleapis.com/v0/b/carvel-ecommerce-coder.appspot.com/o/HatImage.jpg"
  );
  const httpsReferenceHats = ref(
    storage,
    "https://firebasestorage.googleapis.com/v0/b/carvel-ecommerce-coder.appspot.com/o/HatPicture.jpg"
  );
  const httpsReferenceJackets = ref(
    storage,
    "https://firebasestorage.googleapis.com/v0/b/carvel-ecommerce-coder.appspot.com/o/JacketImage.jpg"
  );
  const httpsReferenceWomens = ref(
    storage,
    "https://firebasestorage.googleapis.com/v0/b/carvel-ecommerce-coder.appspot.com/o/WomenImage.jpg"
  );

  const httpsReferenceYellowPast = ref(
    storage,
    "https://firebasestorage.googleapis.com/v0/b/carvel-ecommerce-coder.appspot.com/o/yellowpast.jpg"
  );

  useEffect(() => {
    getDownloadURL(httpsReferenceGlasses).then((url) => {
      setGlassesImage(url);
    });

    getDownloadURL(httpsReferenceAccessories).then((url) => {
      setAccessoriesImage(url);
    });

    getDownloadURL(httpsReferenceHats).then((url) => {
      setHatsImage(url);
    });

    getDownloadURL(httpsReferenceJackets).then((url) => {
      setJacketsImage(url);
    });

    getDownloadURL(httpsReferenceWomens).then((url) => {
      setWomensImage(url);
    });

    getDownloadURL(httpsReferenceYellowPast).then((url) => {
      setYellowpast(url);
    });

    let productosRef;
    if (!id) {
      productosRef = query(
        collection(db, "Products"),
        where("chosen", "==", true)
      );
    } else {
      productosRef = query(
        collection(db, "Products"),
        where("category", "==", id)
      );
    }
    getDocs(productosRef).then((res) => {
      setProductos(res.docs.map((item) => ({ ...item.data(), id: item.id })));
    });
  }, [id]);

  function imagePoster() {
    if (id === "Hats") {
      return hatsImage;
    } else if (id === "Jackets") {
      return jacketsImage;
    } else if (id === "Womens") {
      return womensImage;
    } else if (id === "Glasses") {
      return glassesImage;
    } else if (id === "Accessories") {
      return accessoriesImage;
    }
    return yellowpast;
  }

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      {productos.length > 0 && (
        <motion.div
          className="container-image"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 7 }}
        >
          <h1 className="title-collection">
            <CollectionTitle productos={productos} />
          </h1>
          <motion.img
            className={id ? "poster-image" : "yellowpast"}
            src={imagePoster()}
            alt="99"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 7 }}
          />

          {!id && (
            <div style={{ background: "black" }} id="rotate-words">
              <div>
                NEW ARRIVALS
                <p>for you</p>
              </div>
              <div>
                BEST SELLERS
                <p>for you</p>
              </div>
              <div>
                PERFECT CHOICES
                <p>for you</p>
              </div>
              <div>
                YOU WILL FOLLOW AN INSTINCT
                <p>for you.</p>
              </div>
            </div>
          )}
        </motion.div>
      )}

      <div className="shop-page">
        {productos.length === 0 ? (
          <div>
            <Spinner />
          </div>
        ) : (
          productos.map(
            ({ id, name, imageUrl, price, category, color, brand, page }) => (
              <Item
                key={id}
                id={id}
                name={name}
                imageUrl={imageUrl}
                price={price}
                page={page}
                category={category}
                brand={brand}
                color={color}
              />
            )
          )
        )}
      </div>
    </>
  );
};

export default ItemList;
