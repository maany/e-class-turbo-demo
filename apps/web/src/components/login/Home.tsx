import React, { useEffect, useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Home: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
   
    if (typeof window !== 'undefined') {
      const fetchData = async () => {
        try {
          const response = await fetch("https://fakestoreapi.com/products");
          const result: Product[] = await response.json();
          setData(result);
        } catch (error) {
          setError("Failed to fetch data");
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {data.map((product) => (
        <div className='text-white' key={product.id} style={{ color: 'white' }}>
          <h1>{product.title}</h1>
          <p>{product.price}</p>
          <p>{product.description}</p>
          <img src={product.image} alt={product.title} width="100" />
        </div>
      ))}   
    </div>
  );
};

export default Home;