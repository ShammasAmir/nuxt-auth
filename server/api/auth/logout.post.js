export default defineEventHandler(async (event) => {

    // console.log(parseCookies(event));

    // console.log(getCookie(event , 'token'));

    const token = getCookie(event , 'token');

    try {
        const data = await $fetch(`http://localhost:8000/api/logout`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        setCookie(event, 'token', '', {
            httpOnly: true,
            secure: true,
            maxAge: new Date(0),
            path: '/'
        })

        return data;
    } catch (error) {
        return error
    }
})