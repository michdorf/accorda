const dev = process.env.NODE_ENV === 'development';
const BASEPATH = dev ? '/' : '/chords/';

export default BASEPATH;
