import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { initAuth } from "../../helpers/actions";
import { AuthContext } from "../../context/authContext";

const FormRegister = () => {
  const [loading, setLoading] = useState(false);
  const { setAuth } = useContext(AuthContext);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Debe tener mínimo 2 caracteres")
        .required("El Nombre es obligatorio"),
      email: Yup.string()
        .email("El Correo no es válido")
        .required("El Correo es obligatorio"),
      password: Yup.string()
        .min(6, "Debe tener mínimo 6 caracteres")
        .required("La Clave es obligatoria"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Las Claves no coinciden")
        .required("Confirmar la clave es obligatorio"),
    }),
    onSubmit: async (user) => {
      setLoading(true);
      const res = await initAuth(user, "register");
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
      <form onSubmit={formik.handleSubmit} className="form-register">
        <h1>Crear Cuenta</h1>
        <div className="form-control">
          <div className="form-input">
            <span className="far fa-user fa-fw" />
            <input
              name="name"
              value={formik.values.name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              placeholder="Nombre"
              autoComplete="off"
            />
          </div>
          {formik.touched.name && formik.errors.name && (
            <p>* {formik.errors.name}</p>
          )}
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
          <div className="form-input">
            <span className="fas fa-lock fa-fw" />
            <input
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              placeholder="Confirmar Clave"
              autoComplete="off"
            />
          </div>
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p>* {formik.errors.confirmPassword}</p>
          )}
        </div>
        <button type="submit" disabled={!formik.isValid || loading}>
          Guardar {loading && <i className="fas fa-spinner fa-pulse" />}
        </button>
      </form>
      <style jsx>{`
        form.form-register {
          z-index: 2;
        }
      `}</style>
    </>
  );
};

export default FormRegister;
