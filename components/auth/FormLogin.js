import { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { initAuth } from "../../helpers/actions";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/authContext";

const FormLogin = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { setAuth } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("El Correo no es válido")
        .required("El Correo es obligatorio"),
      password: Yup.string()
        .min(6, "Debe tener mínimo 6 caracteres")
        .required("La Clave es obligatoria"),
    }),
    onSubmit: async (user) => {
      setLoading(true);
      const res = await initAuth(user, "login");
      if (res.ok) {
        const { user, token } = res;
        setAuth({ user, token });
        formik.resetForm();
        await router.replace("/chat");
      }
      setLoading(false);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="form-login">
        <h1>Ingresar al Chat</h1>
        <div className="form-control">
          <div className="form-input">
            <span className="far fa-envelope fa-fw" />
            <input
              name="email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              placeholder="Correo"
              autoComplete="off"
            />
          </div>
          {formik.touched.email && formik.errors.email && (
            <p>* {formik.errors.email}</p>
          )}
          <div className="form-input">
            <span className="fas fa-lock fa-fw" />
            <input
              name="password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              placeholder="Clave"
              autoComplete="off"
            />
          </div>
          {formik.touched.password && formik.errors.password && (
            <p>* {formik.errors.password}</p>
          )}
        </div>
        <button type="submit" disabled={!formik.isValid || loading}>
          Entrar {loading && <i className="fas fa-spinner fa-pulse" />}
        </button>
      </form>
      <style jsx>{`
        form.form-login {
          opacity: 0;
          z-index: 1;
        }
      `}</style>
    </>
  );
};

export default FormLogin;
