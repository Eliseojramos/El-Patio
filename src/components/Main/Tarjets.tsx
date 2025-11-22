import { Fragment } from "react/jsx-runtime"
import Tarjet1 from "./Tarjet1.tsx"
import Tarjet2 from "./Tarjet2.tsx"
import Tarjet3 from "./Tarjet3.tsx"
function Tarjets() {
  return (
    <Fragment>
      <div className="
        w-screen
        flex
        bg-gray-400
        justify-around
        h-130
        items-center
        ">
        < Tarjet1 />
        <Tarjet2 />
        <Tarjet3 />
      </div>

    </Fragment>

  )
}

export default Tarjets
