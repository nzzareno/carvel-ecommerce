// import React, { useState, useEffect } from "react";
// import { doc, getDoc, getFirestore } from "firebase/firestore";
// const FBGetProduct = () => {
//   //YPQGY4euFdaUcCoDm06C
//   //productos
//   const [producto, setProducto] = useState({});

//   useEffect(() => {
//     const db = getFirestore();

//     const hats = doc(db, "Products", "YPQGY4euFdaUcCoDm06C");

//     getDoc(hats).then((rta) => {
//       console.log(rta.data());
//       console.log(rta.id);

//       setProducto({ ...rta.data(), id: rta.id });
//     });
//   }, []);

//   return (
//     <div>
//       {producto.id ? (
//         <>
//           <h1>{producto.name}</h1> <img src={producto.data().imageUrl} alt="33" />{" "}
//         </>
//       ) : (
//         <h1>Cargando...</h1>
//       )}
//     </div>
//   );
// };

// export default FBGetProduct;
