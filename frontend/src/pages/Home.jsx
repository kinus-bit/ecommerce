import { React } from "react";
import { useState,useEffect} from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import API from "@/services/api";

export default function Home() {

  const [displayedItems, setDisplayedItems] = useState([]);

  const load = async () => {
      const res = await API.get("/all");
      setDisplayedItems(res.data);
    };
  
    useEffect(() => {
      load();
    }, []);
  return (
    <>
      <div className="flex justify-around">
        <div className="">
          <h1 className="text-[30px]">our latest collection</h1>
        </div>
        <div>
          <h1 className="text-[30px]">see more</h1>
        </div>
      </div>
      <div className="flex space-x-6 mt-3 mb-3 justify-center">
       
          {displayedItems.slice(0,3).map((item) => (
            <div key={item._id}>
              <Card className="flex h-80 w-80 p-0">
                <CardContent className="p-0">
                  <img
                    src={item.productUrl}
                    className="h-80 w-full object-cover rounded-md"
                  ></img>
                </CardContent>
              </Card>
            </div>
          ))}
       
      </div>

      <div className="flex justify-around">
        <div className="">
          <h1 className="text-[30px]">our Top Products</h1>
        </div>
        <div>
          <h1 className="text-[30px]">see more</h1>
        </div>
      </div>
      <div className="flex space-x-6 mt-3 mb-3 justify-center">
       
          {displayedItems.slice(3).map((item) => (
            <div key={item._id}>
              <Card className="flex h-80 w-80 p-0">
                <CardContent className="p-0">
                  <img
                    src={item.productUrl}
                    className="h-48 w-full object-cover rounded-md"
                  ></img>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <p>{item.productName}</p>
                  <p>{item.productPrice}</p>
                  <Button>see product</Button>
                </CardFooter>
              </Card>
            </div>
          ))}
       
      </div>
    </>
  );
}
