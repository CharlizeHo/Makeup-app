import axios from "axios";
import { useEffect, useState } from "react";

const productsCount = 24;

const baseURL = "http://makeup-api.herokuapp.com/api/v1/products.json";

export default function useGetProducts() {
  const [singleProduct, setSingleProduct] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      const { data } = res;
      data.length = data.length > productsCount ? productsCount : data.length;
      setSingleProduct(data);
    });
  }, []);

  return singleProduct;
}


