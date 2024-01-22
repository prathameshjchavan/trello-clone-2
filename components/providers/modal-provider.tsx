'use client'

import { Fragment, useEffect, useState } from "react"
import CardModal from "../modals/card-modal"
import ProModal from "../modals/pro-modal"

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null;

  return (
    <Fragment>
        <CardModal />
        <ProModal />
    </Fragment>
  )
}

export default ModalProvider