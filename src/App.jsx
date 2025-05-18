/** @format */
import { useEffect, useState } from "react";
import BtnCatery from "./components/BtnCatery.jsx";
import CardProduct from "./components/CardProduct.jsx";
import Modal from "./components/Modal.jsx";
import { LoaderPinwheel } from "lucide-react";

function App() {
  const [products, setProduct] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);
  // const [catagories, setCatagories] = useState([]);
  const catagories = Array.from(new Set(products.map((el) => el.category)));
  console.log(
    "new Set(products.map((el)=>el.category))",
    new Set(products.map((el) => el.category))
  );

  const fetchProduts = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      // console.log("data of fetchProduts >>>>>>>>>", data);
      setProduct(data);
      setProductsByCategory(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // ใช้ new Set แทน
  // products.map((item) => {
  //   if (!catagories.includes(item.category))
  //     setCatagories([...catagories, item.category]);
  // });

  const hdlClickCatagories = (category) => {
    const result =
      category !== "Show all products"
        ? products.filter((item) => item.category === category)
        : products;
    setProductsByCategory(result);
  };

  useEffect(() => {
    fetchProduts();
  }, []);

  // console.log("filterCategory >>>>>>>>>>>", catagories);
  console.log("productsByCategory >>>>>>>>>>>", productsByCategory);

  // function hdlClick(products) {
  //   fetchProduts(products);
  // }

  return (
    <div className="p-8 space-y-4 font-mono">
      <h1 className="skeleton text-5xl mb-10 flex items-center p-4">
        Products Fetch & Filter
      </h1>

      {isLoading ? (
        <div className="flex gap-2 justify-center items-center h-40">
          <LoaderPinwheel size={40} className="animate-spin" />
          <p className="text-red-500 font-bold text-4xl">Loading...</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-8 gap-4 ">
            {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}

            {catagories.map((item) => {
              console.log(item);
              return (
                <BtnCatery
                  key={item}
                  item={item}
                  hdlClickCatagories={hdlClickCatagories}
                />
              );
            })}

            <BtnCatery
              hdlClickCatagories={hdlClickCatagories}
              item="Show all products"
            />
          </div>
          {/* ==================== ก้อน Card ที่ต้องทำ modal ด้วย ============= */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {productsByCategory.map((item) => (
              <CardProduct
                key={item.id}
                item={item}
                onClick={() => setSelectedProduct(item)} //callback function
              />
            ))}
          </div>
          {/* ✅ Base Modal */}
          {selectedProduct && (
            <Modal
              item={selectedProduct}
              onClose={() => setSelectedProduct(null)} //callback function ========
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
