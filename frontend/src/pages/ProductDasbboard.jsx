import { React } from "react";
import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import API from "../services/api";
import { FadeLoader } from "react-spinners";

export default function AdminProduct() {
  const [displayedItems, setDisplayedItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  //loading items from database
  const load = async (req, res) => {
    try {
      setLoading(true);
      const res = await API.get("/products/all");
      setDisplayedItems(res.data);
      setAllItems(res.data);
    } catch (error) {
      setError("Failed to fetch products");
    }
    finally {
      setLoading(false);
    }
  }; 

  //fire them after loading the page
  useEffect(() => {
    load();
  }, []);

  //handle searching 
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    if (query) {
      const filteredList = allItems.filter((item) =>
        item.productName.toLowerCase().includes(query)
      );
      if (filteredList.length > 0) {
        setDisplayedItems(filteredList);
        setError("");
      } else {
        setDisplayedItems([]);
        setError("404 - NOT FOUND");
      }
    } else {
      setDisplayedItems(allItems);
      setError("")
    }
  };

  return (
    <>
      <div className="flex gap-2 justify-center mt-4">
        <div className="w-120">
          <Input
            type="text"
            placeholder="Search product"
            className=""
            onChange={handleSearch}
          />
        </div>
        <div>
          <Button>Search</Button>
        </div>
      </div>
      <div className=" flex justify-start mt-5 ml-20">
        <h1 className="text-black-500 font-semibold text-2xl">products</h1>
      </div>

      <div>
        <div className="flex  flex-wrap space-x-6 justify-center">
          {loading ? (<FadeLoader />) :
            error ? (<h2 className="text-red-500 text-2xl">
              {error}</h2>) :
              displayedItems.length > 0 ? (
                displayedItems.map((item) => (
                  <div key={item._id}>
                    <Card className="flex h-90 w-80 p-0 mb-4">
                      <CardContent className="p-0">
                        <img
                          src={item.productUrl}
                          className="h-55 w-full object-cover rounded-md"
                        ></img>
                      </CardContent>
                      <CardFooter className="flex flex-col">
                        <p>{item.productName}</p>
                        <p>${item.productPrice}</p>
                        <Button>see product</Button>
                      </CardFooter>
                    </Card>
                  </div>
                ))
              ) : (
                <p className="mt-8 text-lg text-red-500">NO PRODUCTS AVAILABLE</p>

              )
          }
        </div>
      </div>
    </>
  );
}
