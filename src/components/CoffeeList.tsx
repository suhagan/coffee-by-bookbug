import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const CoffeeList: React.FC = () => {
  const [endpoint, setEndpoint] = useState("");
  const [search, setSearch] = useState("");

  const { data, loading } = useFetch<any>(
    "https://api.sampleapis.com/coffee/hot"
  );

  // Classification rules
  const classifyDrink = (item: any) => {
    const text =
      `${item?.title ?? ""} ${item?.description ?? ""}`.toLowerCase();

    const hotKeywords = ["hot", "varm", "svart", "espresso", "te"];
    const icedKeywords = ["iced", "juice", "kall", "apelsinjuice", "applejuice", "lemonad", "cold"];

    const isHot = hotKeywords.some((k) => text.includes(k));
    const isIced = icedKeywords.some((k) => text.includes(k));

    return { isHot, isIced };
  };

  const hotDrinks = Array.isArray(data)
    ? data.filter((x) => classifyDrink(x).isHot)
    : [];

  const icedDrinks = Array.isArray(data)
    ? data.filter((x) => classifyDrink(x).isIced)
    : [];

  const selectedList =
    endpoint === "hot"
      ? hotDrinks
      : endpoint === "iced"
      ? icedDrinks
      : [];

  const filteredList = selectedList.filter((item: any) =>
    item.title?.toLowerCase().includes(search.toLowerCase())
  );

  const noData =
    !loading && endpoint && filteredList.length === 0;

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
      {/* Dropdown */}
      <div className="mb-4">
        <label className="block mb-2 font-semibold dark:text-white">
          Select what type of drink you want:
        </label>

        <select
          className="p-2 border rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600"
          value={endpoint}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setEndpoint(e.target.value)
          }
        >
          <option value="">-- Choose an option --</option>
          <option value="hot">Hot Drinks</option>
          <option value="iced">Iced Drinks</option>
        </select>
      </div>

      {/* Search */}
      {endpoint && (
        <input
          type="text"
          placeholder="Search drinks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 mb-4 border rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600"
        />
      )}

      {/* Status Messages */}
      {!endpoint && (
        <p className="text-gray-600 dark:text-gray-300">
          Please select a category.
        </p>
      )}

      {loading && <p>Loading…</p>}

      {noData && (
        <p className="text-gray-500 italic dark:text-gray-400">
          No items found.
        </p>
      )}

      {/* Side-by-side cards */}
      {!loading && filteredList.length > 0 && (
        <div className="flex flex-col gap-6 mt-6">
          {filteredList.map((item: any) => (
            <div
              key={item.id}
              className="flex bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-500 transition transform hover:-translate-y-1 hover:scale-[1.01] overflow-hidden"
            >
              {/* IMAGE */}
              <div className="w-1/3 h-40">
                <img
                  src={item.image || "https://via.placeholder.com/150"}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TEXT */}
              <div className="w-2/3 p-4 flex flex-col justify-center">
                <h3 className="text-xl font-semibold dark:text-white mb-1">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 line-clamp-2">
                  {item.description}
                </p>

                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  <span className="font-semibold">Ingredients:</span>{" "}
                  {Array.isArray(item.ingredients)
                    ? item.ingredients.join(", ")
                    : "Unknown"}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
