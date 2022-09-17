import React from "react";
import {
	Form,
	TitleForm,
	TitleTextModal,
	FormContainer,
	FormHeader,
	FormHeaderText,
	FormText,
} from "./styled";
import { Formik } from 'formik'
import Input from "./Input";
import Button from "../ui/Button";
import Question from '../../icons/form/question.svg';
import { object, string } from 'yup'

const initialValues = {
	name: '',
	email: '',
	tel: ''
}

const telReg = /^(?:\+38)?(?:\(0\d{2}\)[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|0\d{2}[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|0\d{2}[0-9]{7})$/

const validationSchema = object({
	name: string()
		.required(`Це поле є обов'язковим`)
		.min(2, "Дуже коротке ім'я")
		.matches(/^\D+$/, 'Це поле не може містити цифри'),
	email: string()
		.required(`Це поле є обов'язковим`)
		.email("Невірний формат пошти"),
	tel: string()
		.required(`Це поле є обов'язковим`)
		.matches(telReg, 'Не схоже на номер телефону')
})




const ContactForm = () => {
	return (

		<FormContainer>
			<FormHeader>
				<FormHeaderText>Залишилися <b>питання?</b></FormHeaderText>
				<img src={Question} alt="" />
			</FormHeader>
			<FormText>Заповни форму і наш спеціаліст передзвонить тобі, щоб розповісти про деталі курсу і відповісти на питання, що тебе цікавлять.</FormText>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400)
				}}
			>
				{({ handleSubmit, isSubmitting }) => (
					<Form autoComplete="off" onSubmit={handleSubmit}>
						<Input
							name='name'
							type="text"
							placeholder="Ім'я"
						/>
						<Input
							name='email'
							type="text"
							placeholder="E-mail"
						/>
						<Input
							name='tel'
							type="phone"
							placeholder="Телефон"
						/>
						<Button
							type="submit"
							margin="26px 0 0 0"
							padding="21px 0"
							disabled={isSubmitting}
						>
							Відправити
						</Button>
					</Form>
				)}
			</Formik>
		</FormContainer>

	)
}

export default ContactForm;

