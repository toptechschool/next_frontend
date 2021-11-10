let ROOT

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    ROOT = "http://127.0.0.1:8000/";
} else {
    ROOT = "https://api.toptechschool.com/";
}

export const USER_LOGIN_API = `${ROOT}user/login/`;
export const USER_REGISTER_API = `${ROOT}user/register/`;
export const USER_LOGOUT_API = `${ROOT}user/logout/`;
export const USER_PROFILE_API = `${ROOT}user/profile/`;

export const POST_CREATE_API = `${ROOT}api/post/`;
export const POST_LIST_API = query => query===undefined?`${ROOT}api/post/`:`${ROOT}api/post/${query}`;
export const POST_DETAIL_API = slug => `${ROOT}api/post/${slug}/`;
export const POST_USER_API = username => `${ROOT}api/post/user/${username}/`;

export const USER_EMAIL_CONFIRMATION_API = (uuid,token) => `${ROOT}user/activation/${uuid}/${token}`;

export const TAG_LIST_API = `${ROOT}api/tags/`;