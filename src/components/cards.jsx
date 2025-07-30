export default function Cards(props) {
  return (
    <div className={`mt-16 m-8 p-4 w-1/4  border-2 border-gray-800 shadow-lg shadow-gray-500 bg-slate-400 ${props.className}`}>
      <h1 className="text-center text-3xl font-serif">{props.Name}</h1>
      
    </div>
  );
}