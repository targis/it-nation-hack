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
import Spinner from '../Spinner'

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




const ContactForm = ({ formTitle = 'Залишилися питання?', light, setIsFormSubmitted }) => {
	const titleLast = formTitle.split(' ').at(-1)
	const titleFirst = `${formTitle.split(' ').slice(0, -1).join(' ')}`

	return (

		<FormContainer light={light}>
			<FormHeader>
				<FormHeaderText light={light}>{titleFirst} <b>{titleLast}</b></FormHeaderText>
				{!light && (<img src={Question} alt="" />)}
			</FormHeader>
			<FormText light={light}>Заповни форму і наш спеціаліст передзвонить тобі, щоб розповісти про деталі курсу і відповісти на питання, що тебе цікавлять.</FormText>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						console.log(JSON.stringify(values, null, 2));
						setSubmitting(false);
						setIsFormSubmitted(true)
					}, 1000)
				}}
			>
				{({ handleSubmit, isSubmitting }) => (
					<Form autoComplete="off" onSubmit={handleSubmit}>
						<Input
							name='name'
							type="text"
							placeholder="Ім'я"
							disabledChars={/\d/gi}
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
							disabledChars={/[^\d]/gi}
						/>
						<Button
							type="submit"
							margin="26px 0 0 0"
							padding="21px 0"
							disabled={isSubmitting}
						>
							{isSubmitting ? (<Spinner size={'25px'} color={'#fff'} />) : 'Відправити'}
						</Button>
					</Form>
				)}
			</Formik>
		</FormContainer>

	)
}

export default ContactForm;

// --------------------------------

