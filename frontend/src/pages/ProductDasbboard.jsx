import { React } from "react";
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Items from "@/utility/Items";

export default function AdminProduct() {
  const [displayedItems, setDisplayedItems] = useState(Items);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    if (query) {
      const filteredList = Items.filter((item) =>
        item.productName.toLowerCase().includes(query)
      );
      setDisplayedItems(filteredList);
    } else {
      setDisplayedItems(Items);
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
          {displayedItems.length > 0 ? (
            displayedItems.map((item) => (
              <div key={item.id}>
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
            <p className="mt-8 text-lg text-red-500">product not found</p>
            
          )}
        </div>
      </div>
    </>
  );
}
