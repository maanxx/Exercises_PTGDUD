import React, { useMemo, useState } from "react";

const generateProducts = (n) => {
  const products = [];
  for (let i = 1; i <= n; i++) {
    products.push({
      id: i,
      name: `Product ${i}`,
      price: Math.floor(Math.random() * 1000) + 50,
    });
  }
  return products;
};

const MOCK_PRODUCTS = generateProducts(3000);

function Btap03() {
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // loc ten sp
  const filteredProduct = useMemo(() => {
    console.time("Filter Product");
    const list = MOCK_PRODUCTS.filter((p) => {
      const matchName = p.name.toLowerCase().includes(search.toLowerCase());
      const matchMin = minPrice === "" || p.price >= Number(minPrice);
      const matchMax = maxPrice === "" || p.price <= Number(maxPrice);
      return matchName && matchMin && matchMax;
    });
    console.timeEnd("Filter Product");
    return list;
  }, [search, minPrice, maxPrice]);

  const totalPrice = useMemo(() => {
    console.time("Calculate Total");
    const total = filteredProduct.reduce((sum, p) => sum + p.price, 0);
    console.timeEnd("Calculate Total");
    return total;
  }, [filteredProduct]);
  return (
    <>
      <div
        style={{
          margin: 0,
          padding: "1rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Product Filter + Tong tien</h1>
        <div style={{ marginBottom: "1rem" }}>
          <input
            placeholder="Search your name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ marginRight: "0.5rem" }}
          />
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            style={{ marginRight: "0.5rem" }}
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>

        <h3>Total Price: {totalPrice}</h3>
        <ul
          style={{
            maxHeight: 300,
            overflowY: "scroll",
            border: "1px solide #ccc",
          }}
        >
          {filteredProduct.map((p) => {
            return (
              <li key={p.id}>
                {p.name} - {p.price}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Btap03;
