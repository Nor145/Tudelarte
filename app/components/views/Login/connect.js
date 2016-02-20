import { reduxForm } from 'redux-form';

const fields = ['firstName'];

export const reduxFormConnectToLoginForm = reduxForm({
	form: 'test',
	fields
})
