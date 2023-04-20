import { useEffect, useState } from "react";
import axios from "axios";

const productsCount = 4;
const baseURL = "http://makeup-api.herokuapp.com/api/v1/products";

export default function useGetTopProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${baseURL}.json`).then((res) => {
      const { data } = res;
      data.length = data.length > productsCount ? productsCount : data.length;
      setProducts(data);
    });
  }, []);

  return products;
}
