import { useState } from "react"

export const useToggleMOdal = () =>{
    const [open, steOpen] = useState({
        type: '',
        state: false
    })

    return {open, steOpen}
}