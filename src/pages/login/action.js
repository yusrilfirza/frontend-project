import { setSessionLogin } from '../../helpers/cookie';

export const login = (body, history) => {
    const user = JSON.parse(localStorage.getItem('user', JSON.stringify(body)));
    const { email, pass } = user;
    if (body.email === email && body.pass === pass) {
        const resp = {
            data: {
                access_token: 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiVXNlciIsIklzc3VlciI6Im5ld3MiLCJVc2VybmFtZSI6InVzZXIiLCJleHAiOjE2MzcxNTgxMjYsImlhdCI6MTYzNzE1ODEyNn0.KvrHPR3M16yLmKTyen9Kt1796UlrjpOigSUzivjkoXc',
                refresh_token: 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiVXNlciIsIklzc3VlciI6Im5ld3MiLCJVc2VybmFtZSI6InVzZXIiLCJleHAiOjE2MzcxNTgxMjYsImlhdCI6MTYzNzE1ODEyNn0.KvrHPR3M16yLmKTyen9Kt1796UlrjpOigSUzivjkoXc',
                username: body.email,
                roles: user,
                id: 12,
            },
        };
        setSessionLogin(resp);
        history.push('/');
    }
};

export default {
    login,
};
