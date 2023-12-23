import { useEffect, useState } from "react";
import MyMap from "./MyMap"



export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://api-two-swart.vercel.app")
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  

let hamada = new Date().toUTCString();
  
    
  return (
    <div className="flex flex-col overflow-x-auto">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-2 lg:px-8">
            <h1> (Orsod)سجل المخالفات</h1>
            {hamada}

            

            <div className="overflow-x-auto">
              <table className="min-w-full text-center text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500 ">
                  <tr>
                    <th scope="col" className="px-2 py-4">
                      #
                    </th>
                    <th scope="col" className="px-2 py-4">
                      الحي
                    </th>
                    <th scope="col" className="px-2 py-4">
                      المخالفة
                    </th>
                    <th scope="col" className="px-2 py-4">
                      الإحداثيات
                    </th>
                    
                    <th scope="col" className="px-2 py-4">
                      صورة
                    </th>
                    <th scope="col" className="px-2 py-4">
                      تفاصيل
                    </th>
                    <th scope="col" className="px-2 py-4">
                      التاريخ
                    </th>
                    <th scope="col" className="px-2 py-4">
                      الموبيل
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    
                    
                    <tr
                      key={user.id}
                      className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-2 py-4 font-medium">
                        {users.indexOf(user)+1}
                      </td>
                      <td className="whitespace-nowrap px-2 py-4">
                        {user.place}
                      </td>
                      <td className="whitespace-nowrap px-2 py-4">
                        {user.sort}
                      </td>
                      <td className="whitespace-nowrap px-2 py-4">
                        {user.mylat},{user.mylang}
                        <MyMap
                         markers={`${user.mylat},${user.mylang}`}/>
                      </td>
                      
                      <td className="whitespace-nowrap px-2 py-4">
                        {user.image ? (
                          <img
                          className="hover:scale-125"
                            width={200}
                            height={200}
                            src={user.image}
                            alt="صورة المخالفة"
                          />
                        ) : (
                          "no image"
                        )}
                      </td>
                      <td className="whitespace-nowrap px-2 py-4">
                        {user.flag}
                      </td>
                      <td className="whitespace-wrap px-2 py-4 font-bold">
{/* {user.date ?   user.date
                       : (  "no date" )}
                         */ }
                      
                      </td>
                      <td className="whitespace-nowrap px-2 py-4">
                        0{user.mob}
                        
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}




