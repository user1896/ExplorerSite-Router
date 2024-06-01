export default function AboutUs({caller, setCurrent}){
  setCurrent("\'About\'")
  return(
    <>
      <h1 className="text-2xl pb-4" >About Us Page</h1>
      <p>
        This was sent by {caller}
      </p>
    </>
  )
}