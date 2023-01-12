import { useGetAllPostQuery } from "./services/post";

function App() {
const {data,isLoading,isError,isSuccess,isFetching}  = useGetAllPostQuery();
console.log(isFetching, "is fetching");
console.log(isLoading,"is loading");
console.log(data,"data");
if (isFetching) {
  return <h1>is fetching</h1>
}
 
  return (
    <div className="">
      {
        data.map((singleProduct)=> (
          <div key={singleProduct.id}>
            {singleProduct.title}
            <hr />
          </div>
        ))
      }
    </div>
  );
}

export default App;
