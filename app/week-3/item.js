

export default function item({name, quantity, category}){
return (
     <li className="flex justify-between items-center border-b py-2">
      <span className="font-semibold">{name}</span>
      <span className="text-gray-500"> : {quantity}</span>
      <span className="text-blue-600 italic">{category}</span>
    </li>
  );

}