export default function Home({caller, setCurrent}){
  setCurrent("\'Home\'")
  return(
    <>
      <h1 className="text-2xl pb-4" >Home Page</h1>
      <p>
        This was sent by {caller}
      </p>
    </>
  )
}