import FormularioLog from "@/Components/FormularioLog";

export default function PageLog() {
  return (
     <>
        <div className='flex justify-center my-15'>
        <div className="card lg:card-side h-128 w-320 bg-base-100 shadow-sm align-middle">
          <figure className="w-1/2 flex items-center justify-center bg-gradient-to-r from-purple-400 to-purple-600 p-10">
          <img
                src="static/logo/Logo_BuscaVest_icone.jpg"
                alt="Logo BuscaVest"
                className="h-10 w-10"
              />
          </figure>
          <div className="w-1/2 flex items-center justify-center bg-white p-10">
            <FormularioLog/>
          </div>
        </div> 
        </div>   
        </>
  );
}
