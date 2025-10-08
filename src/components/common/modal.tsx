"use client"

import { ReactNode } from "react"
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody
} from "@heroui/react";

interface IProps {
    isOpen: boolean,
    onClose: () => void,
    title: string,
    children: ReactNode
}

const CustomModal = ({
    isOpen,
    onClose,
    title,
    children
}: IProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xs">
            <ModalContent>
                <ModalHeader className="border-b"><h3 className="text-xl text-background font-semibold">{title}</h3></ModalHeader>
                <ModalBody className="py-6">
                    {children}
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default CustomModal