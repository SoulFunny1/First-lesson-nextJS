"use client"

import CustomModal from "@/components/common/modal"
import RegistrationForm from "@/forms/registration.form"
import { defaultTransformValue } from "framer-motion"

interface IProps {
    isOpen: boolean,
    onClose: () => void
}

const RegistrationModal = ({ isOpen, onClose }: IProps) => {
    return (
        <CustomModal isOpen={isOpen} onClose={onClose} title='Регистрация'>
            <RegistrationForm onClose={onClose} />
        </CustomModal>
    )
}

export default RegistrationModal