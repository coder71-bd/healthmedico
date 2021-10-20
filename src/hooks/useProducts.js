import { useEffect, useState } from 'react';

const useProducts = () => {
  const [allProduct, setAllProduct] = useState({});
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/coder71-bd/json/main/fake.json')
      .then((res) => res.json())
      .then((data) => setAllProduct(data));
  }, []);

  return [allProduct, setAllProduct];
};

export default useProducts;
