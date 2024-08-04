import AuthService from "@/services/AuthService";

class AuthApi {
  static async registration(
    email: string,
    password: string,
    set: any,
    get: any
  ) {
    const { error, setLoading, setResetForm } = get();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    setLoading(true);

    try {
      const response = await AuthService.registration(formData);
      if (response.statusText === "OK") {
        const { access_token, prolong_token } = response.data;
        localStorage.setItem("accessToken", access_token);
        localStorage.setItem("prolongToken", prolong_token);
        window.location.href = "/";
      }

      return set({ isAuthenticated: true, resetForm: true });
    } catch (e) {
      if (error) return;
      setTimeout(() => {
        set({ error: false });
      }, 3000);
      return set({ error: true, resetForm: true });
    } finally {
      setLoading(false);
      setResetForm(false);
    }
  }

  static async login(email: string, password: string, set: any, get: any) {
    const { error, setLoading, setResetForm } = get();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    setLoading(true);

    try {
      const response = await AuthService.login(formData);
      if (response.statusText === "OK") {
        const { access_token, prolong_token } = response.data;
        localStorage.setItem("accessToken", access_token);
        localStorage.setItem("prolongToken", prolong_token);
        window.location.href = "/";
      }

      return set({ isAuthenticated: true, resetForm: true });
    } catch (e) {
      if (error) return;
      setTimeout(() => {
        set({ error: false, resetForm: false });
      }, 3000);
      return set({ error: true, resetForm: true });
    } finally {
      setLoading(false);
    }
  }
}

export default AuthApi;
