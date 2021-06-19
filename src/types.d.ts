import { FormEvent, MouseEvent, ChangeEvent } from 'react'

export type InputChangeEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
export type SubmitFormEvent = FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>