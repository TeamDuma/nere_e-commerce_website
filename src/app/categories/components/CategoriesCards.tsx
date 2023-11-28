const CategoriesCards = () => {
    return (
        <>
        {/* component */}
        <div className="grid grid sm:grid-md:grid- xl:grid-cols-4 gap-4 row">
          <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
            <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=2"
                alt=""
                className="h-full w-full"
              />
            </div>
            <h6 className="mt-2 text-sm font-medium">Founder</h6>
       
        
          </div>
       
  
       
        </div>
      </>
      
      );
}
 
export default CategoriesCards ;