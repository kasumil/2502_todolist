export function emailValidator(email: string) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
export function passwordValidator(password: string) {
    if (password.length < 6) {
        return false;
    } else if (password.length > 20) {
        return false;
    }
    return true;
}
