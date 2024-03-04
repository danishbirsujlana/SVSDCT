class AuthService {
    setToken(token) {
        localStorage.setItem('token', token);
    }
    removeToken() {
        localStorage.removeItem('token');
    }
    isAuthenticated() {
        return localStorage.getItem('token');
    }
}
const AuthStatus = new AuthService();
export default AuthStatus;