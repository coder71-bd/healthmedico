import { useEffect, useState } from 'react';

const useProducts = () => {
  const [products, setProducts] = useState({});
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/coder71-bd/json/main/fake.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return [products, setProducts];
};

export default useProducts;
