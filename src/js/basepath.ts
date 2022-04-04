const is_vercel = typeof process.env.IS_VERCEL !== "undefined" ? process.env.IS_VERCEL : false;
const dev = process.env.NODE_ENV === 'development';
const BASEPATH = (dev && !is_vercel) ? '/' : '/chords/';

export default BASEPATH;
