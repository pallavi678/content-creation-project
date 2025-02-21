import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { FaSearch } from "react-icons/fa";

function Categorization() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        const uniqueCategories = ["all", ...new Set(data.map((item) => item.category))];
        setCategories(uniqueCategories);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = data.filter((val) =>
    val.title.toLowerCase().includes(input.toLowerCase()) &&
    (selectedCategory === "all" || val.category === selectedCategory)
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minHeight: "100vh", padding: "20px" }}>
      <h1 style={{ marginBottom: "10px", marginTop: '-30px', fontSize: "24px", fontWeight: "bold", color: "#333" }}>Categorization</h1>
      <div style={{ display: "flex", alignItems: "center", width: "50%", position: "relative" }}>
        <input
          type="text"
          placeholder="Search Here"
          onChange={(e) => setInput(e.target.value)}
          style={{
            padding: "10px",
            width: "100%",
            borderRadius: "20px",
            border: "1px solid #ccc",
            textAlign: "left",
            paddingLeft: "35px",
          }}
        />
        <FaSearch
          style={{
            position: "absolute",
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#888",
          }}
        />
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ padding: "8px", borderRadius: "10px", marginLeft: "10px", background:"#f1f1f1",width: "150px" }}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "15px",
          maxWidth: "1200px",
          marginTop: "20px",
        }}
      >
        {filteredData.length > 0 ? (
          filteredData.map((val) => (
            <Card key={val.id} style={{ width: "250px", padding: "10px" }}>
              <Card.Body style={{ textAlign: "center" }}>
                <Card.Img
                  variant="top"
                  src={val.image}
                  style={{ height: "150px", width: "150px", objectFit: "contain" }}
                />
                <Card.Title style={{ fontSize: "14px", marginTop: "10px",fontFamily:'sans-serif' }}>
                  {val.title}
                </Card.Title>
              </Card.Body>
            </Card>
          ))
        ) : (
          <h2>No Data Found</h2>
        )}
      </div>
    </div>
  );
}

export default Categorization;