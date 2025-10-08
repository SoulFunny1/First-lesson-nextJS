import { Button, Form, Input } from "@heroui/react";
import { useState } from "react";


interface IProps {
    onClose: () => void
}

const loginForm = ({ onClose }: IProps) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const validateEmail = (email: string) => {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return emailRegex.test(email)
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Форма отправлена: ", formData)
        onClose()
    }

    return (
        <Form className="w-full max-w-xs" onSubmit={handleSubmit}>
            <Input
                isRequired
                label="Email"
                name="email"
                placeholder="Введите email"
                type="email"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                validate={value => {
                    if (!value) return "Почта обязательна"
                    if (!validateEmail(value)) return "Введите правильный email"
                    return null
                }}
            />

            <Input
                isRequired
                name="password"
                placeholder="Введите пароль"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                validate={value => {
                    if (!value) return "Пароль обязательна"
                    if (value.length < 8) return "Пароль должен содержать не менее 8 символов"
                    return null
                }}
            />


            <div className="flex w-[100%] gap-4 items-center pt-8 justify-between">
                <Button onPress={onClose}>Отмена</Button>
                <Button type="submit" className="w-full" color="primary">Авторизоваться</Button>
            </div>

        </Form>
    )
}

export default loginForm