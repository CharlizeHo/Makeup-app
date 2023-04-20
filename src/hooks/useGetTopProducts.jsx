import { useEffect, useState } from "react";
import axios from "axios";

const productsCount = 4;
const baseURL = "http://makeup-api.herokuapp.com/api/v1/products.json";

export default function useGetTopProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      const { data } = res;
      data.length = data.length > productsCount ? productsCount : data.length;
      setProducts(data);
    });
  }, []);

  return products;
}
