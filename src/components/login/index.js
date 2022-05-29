import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required('Required'),
            password: Yup.string()
                .required('Required'),
        }),
        onSubmit: values => {
            onLogin(values)
        },
    });

    const onLogin = async (values) => {
        try {
            const response = await axios.post('https://rest-api-orm.herokuapp.com/api/user/login', values)
            localStorage.setItem('token', `Bearer ${response.data.data.token}`)
            console.log(localStorage.getItem('token'));
            return navigate("/");
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">Username</label>
                    <input type="text" className="form-control" name="username"
                        onChange={formik.handleChange}
                        value={formik.values.username}
                    />
                    {formik.touched.username && formik.errors.username ? (
                        <div>{formik.errors.username}</div>
                    ) : null}
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type="password" className="form-control" name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div>{formik.errors.password}</div>
                    ) : null}
                </div>
                <br />
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default Login